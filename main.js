let number = document.getElementById("number")

number.innerHTML = Math.round(Math.random() *100)



let btn = document.getElementById("btn")

btn.addEventListener("click" , function () {
    let userText = prompt("Text kirit")
})




let box = document.getElementById("rotateBox");

document.querySelector(".aylana button").addEventListener("click", () => {
    box.style.transform = "rotate(360deg)";
});



let img = document.getElementById("img");

document.querySelector(".tugma button").addEventListener("click", () => {
    img.src = "https://picsum.photos/250?" + Math.random();
});






setInterval(vaqt, 1000);

function vaqt() {

    let hozir = new Date();
    console.log(hozir)
    let soat = hozir.getHours();
    let minut = String(hozir.getMinutes())
    let sekund = String(hozir.getSeconds())

    document.getElementById("clock").innerHTML =
        `${soat}:${minut}:${sekund}`;
}
let count = document.getElementById("count")

let num = 0;


function hisobla(k){
    console.log(k)
num = num+k
count.innerHTML = num
}


let colorPanel = document.getElementById("colorPanel")
let kvadrat = document.getElementById("square")
console.log(colorPanel.children[0].id)
console.log(colorPanel.children)
let ranglarArr = colorPanel.children

for(let i=0; i<ranglarArr.length;i++){

   ranglarArr[i].addEventListener("click" , function(){
    kvadrat.style.backgroundColor = ranglarArr[i].id
})

}



