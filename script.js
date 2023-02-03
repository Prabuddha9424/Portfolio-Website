var btn = document.getElementsByClassName("button")
var sld = document.getElementById("slide")

btn[0].onclick = function(){
    sld.style.transform = "translateX(0%)";
    for(i=0;i<=2;i++){
        btn[i].classList.remove('active');
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    sld.style.transform = "translateX(-33.4%)";
    for(i=0;i<=2;i++){
        btn[i].classList.remove('active');
    }
    this.classList.add("active");
}
btn[2].onclick = function(){
    sld.style.transform = "translateX(-66.7%)";
    for(i=0;i<=2;i++){
        btn[i].classList.remove('active');
    }
    this.classList.add("active");
}
var typed = new Typed(".auto-type", {
    strings: ["Full Stack Developer", "Web Developer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
})




function openmenu(){
    document.getElementById("sidemenu").style.width = "150px";
}
function closemenu(){
    document.getElementById("sidemenu").style.width = "0";
}