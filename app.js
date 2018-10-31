const res=document.querySelector("#result");
const search= document.querySelector("#userinp");
const btn=document.querySelector("#hi")

btn.addEventListener("click", function(){
    console.log("hi")
    axios
    .get("http://rickandmortyapi.com/api/character/?name=$search")
    .then(
    function(response){
    console.log("response", response)
    res.innerHTML=response.data.results.map(results=>{
    return `
    <div>${results.name}</div>
    <br>
    <div>${results.status} 
    <br>
    <img href=${results.image}>
    `
    
    })
    .join("")
    
    
    }).catch(function(err){
    console.log("err", err)
    
    });




})
