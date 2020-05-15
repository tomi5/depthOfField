let focusBack = 50;
let focusFront = 1000;

let internalCSS = document.createElement('style');
document.body.appendChild(internalCSS);

window.addEventListener('mousemove', e => {
    let blurBack = Math.abs(focusBack - e.clientY) / 250;
    let blurFront = Math.abs(focusFront - e.clientY) / 350;

    internalCSS.innerHTML =
        `.back { 
        filter: blur(${blurBack}px); 
        transform: scale(${1.00 + blurFront /300});
        }
    .front {
        filter: blur(${blurFront}px)
    }`;
})