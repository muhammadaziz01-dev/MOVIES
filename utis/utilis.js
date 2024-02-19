//------------------------TAKRORLANUVSHI FUNCSIYALAR----------------


//-----ELEMENTLARNI TANLAB OLIVCHI FUNCSIYALAR---------

function $(select) {
    return document.querySelector(select);
}

function $$(select) {
    return document.querySelectorAll(select);
}


//-----------DINAMIC TEG YARATUVSHI FUNCSIYA-------------------------

function creatElement(tegName, clasName , htmlContent) {
    let tag = document.createElement(tegName);
    if(clasName){
        tag.setAttribute('class', clasName);
    }

    if(htmlContent){
        tag.innerHTML= htmlContent;
    }

    return tag
}