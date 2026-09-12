// Smooth reveal animation


const elements = document.querySelectorAll(
".skill-card, .project-card, .certificate-card, .education-card, .research-box"
);



const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";


}


});


},
{

threshold:0.15

}

);




elements.forEach(el=>{


el.style.opacity="0";


el.style.transform="translateY(40px)";


el.style.transition="all .7s ease";


observer.observe(el);


});