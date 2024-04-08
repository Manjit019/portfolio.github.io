// hamberger Element

const headerElem=document.querySelector(".header");
const bar=document.querySelector(".fa-bars");
const close=document.querySelector(".fa-xmark");

bar.addEventListener("click",()=>{
    headerElem.classList.add("active");
})

close.addEventListener("click",()=>{
    headerElem.classList.remove("active");
})
