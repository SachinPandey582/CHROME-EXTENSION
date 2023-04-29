// let inp=document.querySelector("#naming")
// inp.addEventListener("change",()=>{
//     let gret=document.getElementById("greet")
//     gret.innerText=`hi this is ${inp.value}`
//     console.log(inp.value,gret)
// })

// let inp=document.querySelector("#naming")
// let gret=document.getElementById("greet")
// inp.addEventListener("keyup",(e)=>{
//     e.preventDefault()
//     gret.innerText=""
//     gret.innerText=`hi this is ${inp.value}`
//     location.reload()
//     console.log(inp.value,gret)
// })


    let nameing = document.querySelector("#name");
    let greet = document.querySelector("#greet");
    
    nameing.addEventListener("input", function() {
      greet.textContent = "Hello " + nameing.value;
    });