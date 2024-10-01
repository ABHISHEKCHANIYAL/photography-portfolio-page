// var home = document.querySelector('#home');
// var about = document.querySelector('#about');
// var contact = document.querySelector('#contact');

// var home1 = document.querySelector('#home1');
// var about1 = document.querySelector('#about1');
// var contact1 = document.querySelector('#contact1');

// home1.style.display = "block";
// home1.style.width = "50%";
// home.addEventListener("click",function(){
//      textnone();
//     home1.style.display = "block";
//     home1.style.width = "50%";
// })
// about.addEventListener("click",function(){
//     textnone();
//     about1.style.display = "block";
//     about1.style.width = "50%";
// })
// contact.addEventListener("click",function(){
//     textnone();
//     contact1.style.display = "block";
//     contact1.style.width = "50%";
// })

// function textnone(){
//     document.querySelectorAll("h3").forEach(function(h3){
//         h3.style.display = "none";
//     })
// }







// var txt = document.querySelector("textarea");
// var count = document.querySelector("#counter");

// txt.addEventListener("input",function(){
//     count.textContent = txt.value.length;
// })
var tl = gsap.timeline()
tl.from("#nav h1" ,{
    y:-40,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.3,
})

tl.from("#main>h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.3,
})

tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5,
})