function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha").innerText = captcha;
}

function verifyCaptcha() {
    const input = document.getElementById("captchaInput").value;
    const captcha = document.getElementById("captcha").innerText;

    if (input === captcha) {
        document.getElementById("result").innerText = "Captcha Verified!";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "Incorrect Captcha. Try Again!";
        document.getElementById("result").style.color = "red";
    }
}


window.onload = generateCaptcha;
