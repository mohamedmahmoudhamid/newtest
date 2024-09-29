let btn = document.getElementById("btn")

window.onscroll =  () =>{
    if (scrollY >=300){
        btn.style.display="block"
    }
    else{
        btn.style.display="none"

    }
}
btn.onclick = ()=>{
    scroll({
        left:0, 
        top:0,
        behavior:"smooth"
    })
}