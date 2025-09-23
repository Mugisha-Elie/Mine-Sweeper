const colorBtn = document.getElementById("color-button");
const colorPalette = document.getElementById("color-palette");

colorBtn.addEventListener("click", ()=>{
    colorPalette.classList.toggle("opacity-0");
    colorPalette.classList.toggle("invisible")
});