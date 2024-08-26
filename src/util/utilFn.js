export function makeTextShorter (text = "", length = 10){
    if (text.length > length){
        return text.slice(0, length)+"...";
    }
    else {
        return text;
    }
}