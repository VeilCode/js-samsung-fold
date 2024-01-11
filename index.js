const circlePhantomBlack = document.getElementById("circle-phantom-black");
const circleIcyBlue = document.getElementById("circle-icy-blue");
const circleCream = document.getElementById("circle-cream");

const phoneColorDisplayed = document.querySelector(".phone-color-display");

circlePhantomBlack.addEventListener("click", e=>{
    phoneColorDisplayed.src="images/fold 5.png";
});

circleIcyBlue.addEventListener("click", e=>{
    phoneColorDisplayed.src="images/fold 5-s.png";
});

circleCream.addEventListener("click", e=>{
    phoneColorDisplayed.src="images/fold 5-g.png";
});