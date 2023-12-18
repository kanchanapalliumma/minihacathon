function showdata(attaching){
    // const apiKey='68791b949ff04702b17a84ed88c84e02'
    const url= `https://newsapi.org/v2/everything?q=apple&from=2023-12-16&to=2023-12-16&sortBy=popularity&apiKey=68791b949ff04702b17a84ed88c84e02`
    const fetchurl=(attaching==="")  ?url  :`https://newsapi.org/v2/everything?q=${attaching}&from=2023-12-16&to=2023-12-16&sortBy=popularity&apiKey=68791b949ff04702b17a84ed88c84e02`

    fetch(fetchurl)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    .then((data) =>{
       let list=data.articles
       if (Array.isArray(list) && list.length > 0) {
       let newshtml=""
       for(let i=0,count=0;i<list.length  & count<9;i++){
           let item=list[i]
           const image=item.urlToImage
           if (image){
            const title=item.title
            const description=item.description
            newshtml+=`<li><img src="${image}">  <h3>${title}</h3>  <p>${description}</p></li>`
            count=count+1
            }
            }
         document.querySelector(".grid-container").innerHTML=newshtml
        }
    })
    .catch(error =>{ console.error(error)
    })
}
showdata("")






   
