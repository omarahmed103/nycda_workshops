let ul = document.querySelector("ul")


class AllProduct {
    constructor(){
        this.all = []
    }

    add(product){
        this.all.push(product)
    }
}

class Redbull {
    constructor(title, src, price){
        this.title = title
        this.src = src
        this.price = price
    }
}

let products = new AllProduct()
axios.get("https://www.redbullshopus.com/products.json")
.then((response) => {
 // let li = document.querySelector("li")
  let data = response.data.products
  

  data.forEach((item) => {
    let h3 = document.createElement("h3")
    let pic = document.createElement("img")
    let p = document.createElement("p")
    let li = document.createElement("li")

    products.add(
      new Redbull(
        item["title"],
        item.images[0].src, 
        item.variants[0].price
      )
    )
     

    h3.innerHTML = item["title"]
    pic.src = item.images[0].src
    p.innerHTML = item.variants[0].price
    

    li.appendChild(h3)
    li.appendChild(pic)
    li.appendChild(p)
    ul.appendChild(li)
    
   })
    

}).catch((error) => {
  console.log(error)
 })