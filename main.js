// let btn = document.querySelector("button");
// let crcl = document.querySelector(".circle");
// let i = 0;
// let mn = document.querySelector(".main")
// let hvr = document.querySelector(".hover")

// mn.addEventListener("mousemove", function(dets){
//     hvr.style.left = dets.x + "px"
//     hvr.style.top = dets.y + "px"
// });

// btn.addEventListener("click", function(){
//     if(i == 0){
//         crcl.style.backgroundColor = "transparent";
//         i = 1;
//     }
//     else{
//         crcl.style.backgroundColor = "yellow";
//         i = 0;
//     }
    
// });

let arr = [
    {   dp: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {   dp: "https://images.unsplash.com/photo-1587385789097-0197a7fbd179?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:" https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {   dp: "https://images.unsplash.com/photo-1565787154274-c8d076ad34e7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {   dp: "https://images.unsplash.com/photo-1624897174291-1bd715e371d5?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1631194758628-71ec7c35137e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
]

var cardItem = ""
let item =  document.querySelector(".card-list");
arr.forEach(function(e, i){
    cardItem += `<div class="card-item">
    <img id="${i}" src="${e.dp}" alt="">
</div>`
});

item.innerHTML = cardItem;
item.addEventListener("click", function(d){
    document.querySelector(".full-width-img").style.display = "initial"
    document.querySelector(".full-width-img").style.backgroundImage = `url(${arr[d.target.id].story})`

    setTimeout(function(){
        document.querySelector(".full-width-img").style.display = "none"
    }, 3000)
});