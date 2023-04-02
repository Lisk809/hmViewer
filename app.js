const express=require("express")
const log4js=require("log4js")
const app=express()
const logger=log4js.getLogger("app")
logger.level="all"
app.use(express.static("."))
const port=8080
app.listen(port, ()=>{
	logger.info(`Server is running at http://localhost:${port}`)
})
app.all('*', (req, res) => {
	logger.debug(`hava get req in ${req.url}`)
})
