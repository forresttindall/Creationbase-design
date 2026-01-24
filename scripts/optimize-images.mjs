import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')
const imagesDir = path.join(root, 'public', 'images')

const exts = new Set(['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'])

async function walk(dir) {
  const out = []
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) {
      out.push(...await walk(p))
    } else {
      out.push(p)
    }
  }
  return out
}

async function optimizeFile(file) {
  const ext = path.extname(file)
  if (!exts.has(ext)) return { skipped: true }
  const before = (await fs.stat(file)).size
  let buffer
  try {
    if (ext.toLowerCase() === '.jpg' || ext.toLowerCase() === '.jpeg') {
      buffer = await sharp(file)
        .rotate()
        .jpeg({ quality: 80, progressive: true, mozjpeg: true })
        .toBuffer()
    } else if (ext.toLowerCase() === '.png') {
      buffer = await sharp(file)
        .png({ quality: 80, compressionLevel: 9, adaptiveFiltering: true, palette: true })
        .toBuffer()
    } else {
      return { skipped: true }
    }
  } catch (err) {
    return { error: err }
  }
  await fs.writeFile(file, buffer)
  const after = (await fs.stat(file)).size
  return { before, after }
}

async function main() {
  try {
    const files = await walk(imagesDir)
    let totalBefore = 0
    let totalAfter = 0
    let optimizedCount = 0
    for (const f of files) {
      const res = await optimizeFile(f)
      if (res?.error) {
        console.error('Failed:', f, res.error?.message || res.error)
        continue
      }
      if (res?.skipped) continue
      optimizedCount += 1
      totalBefore += res.before
      totalAfter += res.after
      const saved = res.before - res.after
      const pct = res.before > 0 ? ((saved / res.before) * 100).toFixed(1) : '0.0'
      console.log(`Optimized: ${path.basename(f)}  -${(saved/1024).toFixed(1)}KB (${pct}%)`)
    }
    const savedTotal = totalBefore - totalAfter
    const pctTotal = totalBefore > 0 ? ((savedTotal / totalBefore) * 100).toFixed(1) : '0.0'
    console.log(`\nSummary: ${optimizedCount} images optimized`)
    console.log(`Before: ${(totalBefore/1024/1024).toFixed(2)} MB`)
    console.log(`After:  ${(totalAfter/1024/1024).toFixed(2)} MB`)
    console.log(`Saved:  ${(savedTotal/1024/1024).toFixed(2)} MB (${pctTotal}%)`)
  } catch (err) {
    console.error('Optimization failed:', err)
    process.exit(1)
  }
}

main()
