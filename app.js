const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(h1.style.color === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.stlye.color = newColor;
}

h1.addEventListener("click", handleTitleClick);