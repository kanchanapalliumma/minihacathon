function showdata(attaching){
    const url= `https://newsapi.org/v2/everything?q=bitcoin&apiKey=68791b949ff04702b17a84ed88c84e02`
    const fetchurl=(attaching==="")  ?url  :`https://newsapi.org/v2/everything?q=${attaching}&from=2023-12-16&to=2023-12-16&sortBy=popularity&apiKey=68791b949ff04702b17a84ed88c84e02`
    const newone=document.getElementById("arrow")

    fetch(fetchurl)
    .then((response)=>response.json())
    .then((data) =>{
       let list=data.articles
       let newone=list.length
       let newshtml=""
       for(let i=0,count=0;i<newone && count<9;i++){
           const item=list[i]
           const image=item.urlToImage
           if (image){
           const title=item.title
           const description=item.description
           const newdescription=description.slice(0,120)+"......."
           newshtml+=`<li><img src="${image}">  <h3>${title}</h3>  <p>${newdescription}</p> <p id="arrow">Read full article  <a href="${item.url}" target="_blank" class="read-article"><span>&#8594;</span></a></p></li>`
           count=count+1
           }
           }
           document.querySelector(".grid-container").innerHTML=newshtml
    })
    .catch(error =>{ console.error(error)
    })
}
showdata("")

document.getElementById("button").addEventListener("click",function(){
   const attaching=document.querySelector(".search-input").value
   showdata(attaching)
})







   
