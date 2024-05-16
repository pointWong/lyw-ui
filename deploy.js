const Client = require('ssh2-sftp-client')
const sftpAccount = require('./.sftp-account')

const sftp = new Client()
const deploy = async () => {
  const args = process.argv.slice(2)
  const env = args[0]
  try {
    if (!sftpAccount[env]) return
    console.log('正在上传至服务器...')
    await sftp.connect(sftpAccount[env])
    await sftp.uploadDir('./dist/build', sftpAccount[env].targetDir)
  } catch (error) {
    console.log('上传失败：')
    console.log(error)
  } finally {
    console.log('上传成功！')
    sftp.end()
  }
}

deploy()