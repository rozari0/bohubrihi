const selectDom = document.querySelector('#select');
const text = document.querySelector('#textInput');
const form = document.querySelector('form');
const result = document.querySelector('#result');
const rePostCode = /^\d{4}$/
const reEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const rePhone = /^\+8801[0-9]{9}$/i

selectDom.onchange = (e) => {
    result.innerHTML = ""
    console.log(selectDom.value)
    if (selectDom.value == 'email') {
        text.removeAttribute('disabled')
        text.setAttribute('type','email')
        text.setAttribute('placeholder', "Input Your Email.")
    }
    else if (selectDom.value == 'phone') {
        text.removeAttribute('disabled');
        text.setAttribute('type','tel');
        text.setAttribute('placeholder', "Input Your Phone Number.")
    }
    else {
        text.removeAttribute('disabled')
        text.setAttribute('type','number')
        text.setAttribute('placeholder', "Input Your Post Code.")
    }
}

form.onsubmit = (e) => {
    e.preventDefault();
    if (selectDom.value == 'email') {

        if (text.value.match(reEmail)) {
            result.textContent = "This is a Valid Email."
            result.style.color = 'green';
        }
        else {
            result.innerHTML = "This isn't a valid email address. An email address should look like <i>user@name.tld</i>"
            result.style.color = 'red';
        }
    }
    else if (selectDom.value == 'phone') {

        if (text.value.match(rePhone)) {
            result.textContent = "This is a Valid Phone Number."
            result.style.color = 'green';
        }
        else {
            result.innerHTML = "This isn't a valid Phone Number.A Valid BD phone Number Should look like <i>+8801234567890</i>"
            result.style.color = 'red';
        }
    }
    else if (selectDom.value == 'postcode') {
        if (text.value.match(rePostCode)) {
            result.textContent = "This is a Valid Post Code."
            result.style.color = 'green';
        }
        else {
            result.innerHTML = "This isn't a valid Post Code. A valid Post code should look like <i>1256</i>"
            result.style.color = 'red';
        }
    }
}


