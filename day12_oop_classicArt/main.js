class Classic {
    constructor(  art_url, frame = "black-border") {
    this.frame = frame
    this.art_url = art_url
  }
  
  render(){
    // let img = document.querySelector("img")
    
    let pic = document.createElement("img")
    pic.width = "300"
    // var div = document.getElementsByTagName('div')
    pic.src = this.art_url
    // pic.setAttribute("class", "frame")
    pic.className = this.frame
    document.body.appendChild(pic)
  }
}


class Meme extends Classic {
    constructor( art_url, frame = "red-border"){
        super()
        this.frame = frame
        this.art_url = art_url
    }
}


class Gallery {
    constructor(){
        this.all = []
    }

    add(imageObject){
        //imageArray.push(imageObject);
        this.all.push(imageObject)
    }

    renderAll(){
        for (let i = 0; i< this.all.length; i++){
        let pic = document.createElement("img")
        pic.width = "300"
        pic.src = this.all[i].art_url
        pic.className = this.all[i].frame
        document.body.appendChild(pic)
        }
    }
}

let art1 = new Classic("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg")
art1.render()
// art1.render()

let art2 = new Classic("http://www.worldfortravel.com/wp-content/uploads/2011/09/Switzerland-Mountain-Natural-Beauty-900x675.jpg")

let meme1 = new Meme("http://i0.kym-cdn.com/entries/icons/original/000/022/940/spongebobicon.jpg")
meme1.render()

let meme2 = new Meme("https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350")
//var imageArray = new Array();

let gallery = new Gallery()

gallery.add(meme2)
gallery.add(art2)
gallery.add(meme1)
gallery.add(art1)

gallery.renderAll()












