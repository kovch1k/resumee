document.addEventListener("click",(e)=>{
 console.log(e.target);
})

const switchColorTheme = document.getElementsByClassName("night")[0];
switchColorTheme.addEventListener("click",()=>{
    let div = document.getElementsByClassName("main")[0]
    div.classList.toggle("black-color-theme")
    let texts = document.getElementsByClassName("alltext");
    let links = document.getElementsByTagName("a")
    for (let i = 0; i < texts.length; i++) {
        texts[i].classList.toggle("white-text");
        
    }
    for (let i = 0; i < links.length; i++) {
        links[i].classList.toggle("white-links");
        
    }

})