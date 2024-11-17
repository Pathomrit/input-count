const count = document.querySelector(".count");
const input = document.querySelector(".inputText");

input.addEventListener("keyup",(e)=>{
    // console.log(input.value.length);
    count.innerHTML = `${input.value.length}`;
});