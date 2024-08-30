export function makeTextShorter (text = "", length = 10){
    if (text.length > length){
        return text.slice(0, length)+"...";
    }
    else {
        return text;
    }
}


export function makeFirstCharUpperCase (text = "") {
    return `${text.slice(0, 1).toUpperCase()}${text.slice(1).toLowerCase()}`
}

export function getIdFromSlug(slug){
    const arr =  slug.split("-");
    return arr[arr.length - 1];
}