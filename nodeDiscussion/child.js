// const {exec} = require('child_process')

// exec('ls -lh',(err,stdout,stderr)=>{
//     if(err){
//         console.error(`exec error: ${err}`)
//         return
//     }
//     console.log(`stdout: ${stdout}`)
//     console.log(`stderr: ${stderr}`)
// })

// const {execFile} = require('child_process')
// const scriptPath = "./script.sh"

// const args = ["args1","args2"]
// execFile(scriptPath,args,(err,stdout,stderr)=>{
//     if(err){
//         console.error(`execFile error: ${err}`)
//         return
//     }
//     console.log(`stdout: ${stdout}`)
//     console.log(`stderr: ${stderr}`)
// })

const cp = require('child_process')

cp.spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", ["https://www.youtube.com" , "--incognito"])