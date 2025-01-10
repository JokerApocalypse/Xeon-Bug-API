require("./doc/module.js")

global.prefix = ['','!','.',',','#','/']
global.owner = ['24104071654','2250141253296','242069670572']
global.ownMain = '2250500107362'
global.NamaOwner = 'X-TECH' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = 'X-EndPoint' //
global.author = 'X-TECH' //
global.packname = 'X-Bug-API' //
global.url1 = 'https://whatsapp.com/channel/0029VadaaRZK5cDOTh6sMD41' //
global.url2 = 'https://whatsapp.com/channel/0029VadaaRZK5cDOTh6sMD41' //
global.linkgc = 'https://whatsapp.com/channel/0029VadaaRZK5cDOTh6sMD41'
global.delayjpm = 3500
 





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
