const fontSizeControl = document.querySelector('#font-size-control');

const textElement = document.querySelector('#text');

fontSizeControl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    const fontSize = event.target.value + 'px';
    textElement.style.fontSize = fontSize;
};

// fontSizeControl.addEventListener('input', (event) => {
//     const fontSize = event.target.value;
//     textElement.style.fontSize = `${fontSize}px`;
// });