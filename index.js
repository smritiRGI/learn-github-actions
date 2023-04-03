import express from 'express'
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname).substring(1)

let app = express()

app.get('/' ,  (_req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.set("port", process.env.PORT || 3001);

const server = app.listen(app.get("port"), function () {
  console.log("Express server listening on port " + server.address().port);
});

export default app;