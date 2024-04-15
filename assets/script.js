// let menubar = doucment.querySelector('#menubar');
// let mynav = document.querySelector('.navbar');

// menubar.onclick = () => {
//     menubar.classList.toggle('fa-times')
//     mynav.classList.toggle('active')
// }

//  Increase the number of the value

let valueDisplays = document.querySelectorAll(".num");

let interval = 5000;
console.log(valueDisplays);
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    // console.log(endValue);
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});





