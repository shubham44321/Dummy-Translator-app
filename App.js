const translateButton = document.querySelector("#btn-translate");
const txtToTranslate = document.querySelector("#txt-to-translate");
const translatedText = document.querySelector("#txt-translated"); 

translateButton.addEventListener("click",() => {
    let textToTranslate = txtToTranslate.value;
    translatedText.innerText = textToTranslate;
    //console.log(textToTranslate);
});