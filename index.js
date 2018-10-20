let data = document.querySelector('.data')
setInterval(()=>{
  navigator.geolocation.getCurrentPosition((d, e) => {
    let latitude = d.coords.latitude
    let longitude = d.coords.longitude
    let speed = d.coords.speed
    data.innerHTML += `<li>latitude: ${latitude}, longitude: ${longitude}, speed: ${speed}`
  })
  window.scrollTo(0, document.body.getBoundingClientRect().height)
}, 500)
