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


//scroll to top
const scrolltopBtn=document.getElementById("scroll-top");

window.onscroll=function(){
   if(document.body.scrollTop>30 || document.documentElement.scrollTop>30){
    scrolltopBtn.style.bottom="2rem";
   }
   else{
    scrolltopBtn.style.bottom="-30%";
   }
}
scrolltopBtn.addEventListener('click',()=>{
    window.scrollTo(0,0);
})
