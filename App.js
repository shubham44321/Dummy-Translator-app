const translateButton = document.querySelector("#btn-translate");
const txtToTranslate = document.querySelector("#txt-to-translate");
const translatedText = document.querySelector("#txt-translated"); 
const clearButton = document.querySelector("#btn-clear"); 

const serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
//const serverUrl = "https://api.funtranslations.com/translate/yoda.json";


translateButton.addEventListener("click",async () => {
    let textToTranslate = txtToTranslate.value;
    if(textToTranslate !== "" && textToTranslate.trim().length > 0){
        const transalted = await getData(textToTranslate);
        translatedText.innerText = transalted;
    }
    else{
        alert("Please enter text to be translated.")
    }
});

clearButton.addEventListener("click",() => {
    txtToTranslate.value = "";
    translatedText.innerText = "";
});

function appendtextToUrl(text){
    return serverUrl+"?text="+text.trim();
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