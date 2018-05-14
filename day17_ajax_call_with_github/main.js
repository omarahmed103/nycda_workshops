var gifs = window.data;
var data = window.data2;
//console.log(data[0].name )
let ul = document.querySelector("ul")
let h1 = document.createElement("h1")
let h2 = document.createElement("h2")
let image = document.createElement("img")

//var dataa2 = window.data2.data2;

 //console.log(gifs)
class MyGithubInfo {
    constructor(imageSRc, gitHubSrc, repoCount, repoName ) {
        this.imageSRc = imageSRc
        this.gitHubSrc = gitHubSrc
        this.repoCount = repoCount
        this.repoName = repoName
    }
}

class Github {
    constructor (){
        this.all = []
    }

    add(myInformation){
        this.all.push(myInformation)
    }
}

h1.innerHTML = gifs.name
ul.appendChild(h1)
image.src = gifs.avatar_url
ul.appendChild(image)
var newGifs = []
for (let i = 0; i < data.length; i++){
    newGifs[i] = data[i].name
    let p = document.createElement("p")
    p.innerHTML = newGifs[i] 
    ul.appendChild(p) 
}

console.log(newGifs[2])


























// let data = null
// let info = null

// axios.get("https://api.github.com/users/omarahmed30")
// .then((response) => {
//     data = response.data
//     console.log(data.name)
    
//     let gitHub = new Github()
  
//         let h1 = document.createElement("h1")
//         h1.innerHTML = data.name
//         let image = document.createElement("img")
//         image.src = data.avatar_url

//     axios.get(data.repos_url)
//     .then((response) => {
//         info = response.data
//         console.log(info[0].name)




    //     info.forEach(element => {
    //         let p = document.createElement("p")
    //         gitHub.add(
    //             new MyGithubInfo(
    //                 element.name
    //             )
    //         )        
    // })
// })

// })