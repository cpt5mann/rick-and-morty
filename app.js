let btn=document.querySelector("#btn");
let res=document.querySelector("#result");
let search= document.querySelector("#text");


btn.addEventListener("click", function(){
    console.log("hi")
    
    let searchValue = search.value;
    //.split(' ').join('+');
console.log('The search value was', searchValue);
 axios.get(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
    .then(
    function(response){
    console.log("response", response)
    res.innerHTML=response.data.results.map(results=>{
    return `
    <div id="lolres">
    <div>Name: ${results.name}</div>
    <br>
    <div>Status: ${results.status}</div> 
    <br>
    <div>Origin:${results.origin.name}</div>
    <img src=${results.image}>
    </div>
    `
    })
    .join("")
     }).catch(function(err){
    console.log("err", err)
    
    
    });
})





// //grabs the variables
// let btn = document.querySelector('#btn');
// let result = document.querySelector('#result');
// let text = document.querySelector('#text');
 
// btn.addEventListener('click' , function(){
//     let sBar = text.value;
//     console.log('text.value', text.value);
//     axios.get(`https://rickandmortyapi.com/api/character/?name=${sBar}`) 
//     .then(
//         function(response){
//          console.log('response', response);
//          result.innerHTML = response.data.results.map(results =>{
//              //console.log('results.image', results.image);
//             return `
//             <div>name: ${results.name}</div>
//             <div>status: ${results.status}</div>
//             <div>origin name: ${results.origin.name}</div>
//             <div>species: ${results.species}</div>
//             <br>
//             <img src = ${results.image}>
//             `
//         })
//         .join('');
//     })
//     .catch(
//         function(rip){
//         console.log('rip',rip);
//         });
// });


