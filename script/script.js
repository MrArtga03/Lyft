//accordion event

const point = document.getElementsByClassName("shish");
const pointBack = document.getElementsByClassName("point-2");
const textAccord = document.querySelectorAll(".text-accord");

//opening text blocks
for (let i = 0; i < point.length; i++) {
    point[i].addEventListener("click", function() {
        this.classList.toggle("active");
        textAccord[i].style.display = "block";
        point[i].style.display = "none";
        pointBack[i].style.display= "flex";

    });
}

for (let i = 0; i < point.length; i++) {
    pointBack[i].addEventListener("click", function() {
        this.classList.toggle("active");
        textAccord[i].style.display = "none";
        point[i].style.display = "block";
        pointBack[i].style.display = "none";
    });
}
