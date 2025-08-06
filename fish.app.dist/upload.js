// upload.js
import 'dotenv/config' // load .env vars
import { createClient } from '@web3-storage/w3up-client'
import fs from 'fs'
import path from 'path'

const main = async () => {
  const client = await createClient()
  const token = process.env.W3UP_TOKEN

  if (!token) {
    console.error('❌ Missing W3UP_TOKEN in .env file')
    process.exit(1)
  }

  await client.setCurrentSpace(token)

  const dirPath = './build' // Replace with actual build folder
  const files = []

  const walk = (dir) => {
    for (const file of fs.readdirSync(dir)) {
      const fullPath = path.join(dir, file)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        walk(fullPath)
      } else {
        files.push({
          path: fullPath.replace(`${dirPath}/`, ''),
          content: fs.createReadStream(fullPath),
        })
      }
    }
  }

  walk(dirPath)

  const cid = await client.uploadDirectory(files)
  console.log('✅ Uploaded with CID:', cid)
  console.log(`🔗 Access it via: https://w3s.link/ipfs/${cid}`)
}

main().catch(console.error)
