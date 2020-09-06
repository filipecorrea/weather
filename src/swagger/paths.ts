import path from 'path'
import fs from 'fs'

const models = 'src/models'
const routes = 'src/routes'

function getFiles (dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? getFiles(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file))
  })
  return filelist
}

export default getFiles(models).concat(getFiles(routes))
