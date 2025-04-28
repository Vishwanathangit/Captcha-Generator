var btn = document.getElementById("btn")
var captcha = document.getElementById("captcha")
var input = document.getElementById("input")
var randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
var generated = ""
for (i = 0; i < 5; i++) {
    generated += randomchar.charAt(Math.floor(Math.random() * randomchar.length))
}
captcha.innerHTML = generated
btn.addEventListener("click", function () {
    if (input.value == "") {
        alert("Please Enter Captcha")
    }
    else if (captcha.textContent == input.value) {
        alert("Captcha Verified Successfully")
    }
    else {
        alert("Captcha Verification Failed, Please try again")
    }
})