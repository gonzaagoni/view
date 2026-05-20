document.getElementById("continuar")
.onclick = ()=>{

navigator.geolocation.getCurrentPosition((pos)=>{

   fetch("/gps",{

      method:"POST",

      headers:{
         "Content-Type":"application/json"
      },

      body: JSON.stringify({

         lat: pos.coords.latitude,

         lon: pos.coords.longitude

      })

   })

})

}
