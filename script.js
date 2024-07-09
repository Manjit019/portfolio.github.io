
import projects from './myprojects.json' with { type: "json" };

console.log(projects)
// hamberger Element

const headerElem=document.querySelector(".header");
const bar=document.querySelector(".fa-bars");
const close=document.querySelector(".fa-chevron-left");
const contentsWrapper = document.querySelector(".contents-wrapper");
bar.addEventListener("click",()=>{
    contentsWrapper.classList.add("blurred");
    headerElem.classList.add("active");
})

close.addEventListener("click",()=>{
    contentsWrapper.classList.remove("blurred");
    headerElem.classList.remove("active");
})
contentsWrapper.addEventListener('click',(e)=>{
    contentsWrapper.classList.remove("blurred");
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


//Rendering projects

const projectContainer = document.querySelector(".project-section");
const templateContainer = document.querySelector(".template-container");

projects.forEach(project => {
        
        const projectClone = document.importNode(templateContainer.content,true)

        projectClone.querySelector(".project-banner img").src=project.projet_img;

        projectClone.querySelector(".project-title").textContent = project.project_title;

        projectClone.querySelector(".desc").textContent = project.project_desc;

        projectClone.querySelector(".link").href = project.project_link;

        const techContainer= projectClone.querySelector(".tech-container");
        let len = project.tech?.length;
        console.log(len)
        for (let i = 0; i < len; i++) {
            const btnTech = document.createElement("button");
            btnTech.className="tech-btn";
            btnTech.textContent=project.tech[i];
            techContainer.appendChild(btnTech)
        }

        projectContainer.append(projectClone);
    });
  


