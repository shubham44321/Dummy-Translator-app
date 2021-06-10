const translateButton = document.querySelector("#btn-translate");
const txtToTranslate = document.querySelector("#txt-to-translate");
const translatedText = document.querySelector("#txt-translated"); 
//const serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
const serverUrl = "https://api.funtranslations.com/translate/yoda.json";


translateButton.addEventListener("click",async () => {
    let textToTranslate = txtToTranslate.value;
    const transalted = await getData(textToTranslate);
    translatedText.innerText = transalted;
    //console.log(textToTranslate);
});

function appendtextToUrl(text){
    return serverUrl+"?text="+text;
}

function errorHandler(ex){
    console.log(`Error in fetching data : ${ex}`);
}

async function getData(text){
    const url = encodeURI(appendtextToUrl(text));
    //console.log(url);
    const transaletedText = fetch(url)
    .then(response => response.json())
    .then(json => json.contents.translated)
    .catch(errorHandler);
    return await transaletedText;
}