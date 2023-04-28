const but = document.querySelector(".green-btn");
console.log(but);
const pass = document.querySelector(".password");

but.addEventListener("click",function(){
    const pass = document.querySelector(".password");
    const confirmpass = document.querySelector(".confirm-password");
    if(pass.value != confirmpass.value)
    {
        alert("password do not match")
    }
})