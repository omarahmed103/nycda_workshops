//This comes from data.js
var gifs = window.data.data;

var newGifs = []
for (let i = 0; i < gifs.length; i ++){
    let index = gifs[i].images.original.url.indexOf("gif?")
    newGifs[i] = gifs[i].images.original.url.slice(0, index + 4)
}    
var pic = document.createElement("img")

function render(){
    var picture = newGifs[Math.floor(Math.random() * newGifs.length)]
     pic.width = "300"
    pic.src = picture
    document.body.appendChild(pic)
  }