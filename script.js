
// hamberger Element

const headerElem=document.querySelector(".header");
const bar=document.querySelector(".fa-bars");
const close=document.querySelector(".fa-chevron-left");

bar.addEventListener("click",()=>{
    headerElem.classList.add("active");
})

close.addEventListener("click",()=>{
    headerElem.classList.remove("active");
})

///
let navContainer=document.querySelector(".right-nav ul");
let links=navContainer.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
   links[i].addEventListener("click",function(){
    let current =document.getElementsByClassName("active-link");
    current[0].className=current[0].className.replace("active-link","");
    this.className+=" active-link";
   });
}

//scroll to top
const scrolltopBtn=document.getElementById("scroll-top");

window.onscroll=function(){
   if(document.body.scrollTop>30 || document.documentElement.scrollTop>30){
    scrolltopBtn.style.bottom="2.5rem";
   }
   else{
    scrolltopBtn.style.bottom="-40%";
   }
}
scrolltopBtn.addEventListener('click',()=>{
    window.scrollTo(0,0);
})


//dark mode 

const modeBtn=document.querySelector(".theme");
modeBtn.addEventListener("click",(e)=>{

    document.body.classList.toggle("lightMode");

    if(e.target.classList.contains("fa-solid")){
        modeBtn.classList.remove("fa-solid");
        modeBtn.classList.add("fa-regular");
    }
    else{
        modeBtn.classList.add("fa-solid");
        modeBtn.classList.remove("fa-regular");
    }
})

