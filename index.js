"use strict"
//--MOVIES DATA MINIMAL---
movies.splice(100);

//-----------------------HTML Elamentlari tanlab olingan----------------------

let selectCategory = $("#category");
let searchName = $("#name");
let filmRating= $("#number");
let formFilter = $("#filter-form");

let moviesWrapper = $(".movies");
let searchInput = $("#search-input");
//--darc
let darcModeBtn = $("#darcmode-btn");
let header =$("header");
let aside =$("#aside");
let inputs = $$ ("input");
let footer = $("footer");
let p = $$("p");

let searchMoviesTaitil = $("#search-movies");




//--------------------------GLABAL VERAYBLIS START------------------
let  categoryData = [];

let changMovies = JSON.parse(localStorage.getItem("movies")) || [];











//---------------------------DARC MODE START---------------------
 let isDarkMode = false;
darcModeBtn.onclick = function () {
    if (isDarkMode==false){
        darcModeBtn.innerHTML=`<i class="bi bi-sun-fill"></i>`;
        document.body.style.transition = "ail 0.1s lener";
        document.body.style.backgroundColor = "#030712";
        document.body.style.color = "#FFF";
        header.style.backgroundColor = "#030712";
        header.style.color = "#FFF";
        searchInput.style.backgroundColor = "#030712";
        searchInput.style.color = "#FFF";
        aside.style.backgroundColor = "#030712";
        aside.style.color = "#FFF";
        selectCategory.style.backgroundColor = "#030712";
        selectCategory.style.color = "#FFF";
        inputs.forEach((el)=>(el.style.backgroundColor = "#030712",  el.style.color = "#FFF"));
        footer.style.backgroundColor = "#030712";
        footer.style.color = "#FFF";
        p.forEach((el)=> (el.style.color = "#FFF"));

    }else{
        darcModeBtn.innerHTML=`<i class="bi bi-moon-stars-fill"></i>`;
        document.body.style.transition = "ail 0.1s lener";
        document.body.style.backgroundColor = "#FFF";
        document.body.style.color = "black";
        header.style.backgroundColor = "#FFF";
        header.style.color = "black";
        searchInput.style.backgroundColor = "#FFF";
        searchInput.style.color = "#000";
        aside.style.backgroundColor = "#FFF";
        aside.style.color = "#000";
        selectCategory.style.backgroundColor = "#FFF";
        selectCategory.style.color = "#000";
        inputs.forEach((el)=>(el.style.backgroundColor = "#FFF",  el.style.color = "#000"));
        footer.style.backgroundColor = "#FFF";
        footer.style.color = "black";
        p.forEach((el)=> (el.style.color = "#000"));

    }
    isDarkMode = !isDarkMode;
}
//---------------------------DARC MODE END---------------------








//----------------------NARMALAEZ DATA START-----------------------------
const allMovies = movies.map((el) => {
    return{
        title: el.title,
        year: el.year,
        category: el.categories,
        id: el.imdbId,
        rating: el.imdbRating,
        time : `${Math.trunc(el.runtime/60)} H ${Math.trunc(el.runtime%60)} m`,
        language: el.language,
        youtube: `https://www.youtube.com/emdeb/${el.youtubeId}`,
        summary: el.summary,
        minImage: el.smallThumbnail,
        maxImage: el.bigThumbnail
    }
})
//----------------------NARMALAEZ DATA END-----------------------------








//--------------------MOVIES COTIGORY START------
function getCotigory(data) {
    

    if(data.length){

        data.forEach((el) => {
            
            el.category.forEach((e)=>{

                if(!categoryData.includes(e)){
                    categoryData.push(e)
                }
            })
        });
    }
}
getCotigory(allMovies)
//--------------------MOVIES COTIGORY END------










//--------------------------RENDER COTEGORY START---------

categoryData.sort().forEach((el)=>{
   let categorOption = creatElement("option", "", el);
   selectCategory.appendChild(categorOption);
})
//--------------------------RENDER COTEGORY END---------









//------------------REDER ALL MOVIES  (DINAMIC CARD) START----------------

function renderAllMoves(data , tagWrapper) {
    tagWrapper.innerHTML= ""
    if(data.length){
        data.forEach((el)=>{
            const card = creatElement('div', 'card', `
              <img src="${el.minImage}" alt="smth">
              <div class="card-body">
                  <h2>${el.title.length > 20 ? el.title.substring(0,17)+"..." : el.title}</h2>
                  <ul>
                      <li><strong>Year:</strong> ${el.year}</li>
                      <li><strong>Categories:</strong>${el.category}</li>
                      <li><strong>Rating:</strong>${el.rating}</li>
                      <li><strong>Language:</strong>${el.language}</li>
                  </ul>

                  <div class="flex btn-wrappeer items-center gap-x-3">
                   
                      <button 
                          id=${el.id}
                          class="grid hover:bg-red-700 hover:text-white duration-500 text-red-700 place-content-center p-4 border w-12 h-12 rounded-full">
                          <i class="bi bi-suit-heart-fill "></i>
                      </button>

                      <a href="${el.youtube}" target="_blank" class="flex hover:bg-black hover:text-white duration-500  justify-center gap-x-2 text-xl items-center border min-w-24 px-3 h-12 rounded-full"> 
                          <i class="bi bi-play-circle-fill"></i>
                          <span>watch movie</span>
                      </a>
                  </div>

              </div> 
            `)

            tagWrapper.appendChild(card)
        })
    }
    
}
renderAllMoves(allMovies , moviesWrapper)
//------------------REDER ALL MOVIES  (DINAMIC CARD) END----------------









//-------------------------SEARCH INPUT HEADER START----------------
function searchMovies(searchTerm) {
    const searchResult = allMovies.filter((el)=> el.title.toLowerCase().includes(searchTerm.toLowerCase()));
    if(searchResult.length){
        searchMoviesTaitil.innerHTML=`${searchResult.length}   movies found`
        renderAllMoves(searchResult , moviesWrapper)
    }else{
        searchMoviesTaitil.innerHTML=''
        moviesWrapper.innerHTML=`
        <h1 class="text-red-600 text-[32px] w-[700px] relative top-[200px] left-[300px] ">The movie you searched for was not found !!</h1>
        `
    }
}

searchInput.addEventListener("keyup", (e)=>{
    
    if(e.keyCode ==13){//inputda yozilganda faqat entirni bosganda ishlashligi ucun enter mi keycodi 13 ga teng
        searchMoviesTaitil.innerHTML=''
        moviesWrapper.innerHTML=`<span class="loader"></span>`
        setTimeout(()=>{
            searchMovies(e.target.value)
        },1000)
    }
})
//-------------------------SEARCH INPUT HEADER START END----------------










//-------------------------SEARCH FORM ASIDBAR START----------------
function multiSearch() {
     const name = searchName.value;
     const reting = filmRating.value;
     const cotigor = selectCategory.value;

    console.log(name , reting , cotigor);
    const searchResult = allMovies.filter((el)=> {
        return el.title.toLowerCase().includes(name.toLowerCase()) && el.category.includes(cotigor) && el.rating >= reting;
    });
    if(searchResult.length){
        searchMoviesTaitil.innerHTML=`${searchResult.length}   movies found`
        renderAllMoves(searchResult , moviesWrapper)
    }else{
        searchMoviesTaitil.innerHTML=''
        moviesWrapper.innerHTML=`
        <h1 class="text-red-600 text-[32px] w-[700px] relative top-[200px] left-[300px] ">The movie you searched for was not found !!</h1>
        `
    }
}
formFilter.addEventListener("submit" ,(e)=>{
    e.preventDefault();

    searchMoviesTaitil.innerHTML=''
    moviesWrapper.innerHTML=`<span class="loader"></span>`
    
    setTimeout(()=>{
        multiSearch();
    },1000)

    
})
//-------------------------SEARCH FORM ASIDBAR END----------------






//--------------------------------TANLANGAN FILIMLR----------------


// moviesWrapper.addEventListener("click" , (el) => {
//     let idName =el.target.id
//     console.log(idName);

//     let chengCard = allMovies.find((el)=>el.id === idName);
//     changMovies = JSON.parse(localStorage.getItem("movies")) || [];
//     if(!changMovies.find((el)=> el.id === idName)){
//         changMovies.push(chengCard);
//         localStorage.setItem("movies" , JSON.stringify(changMovies))
//     }else{
//         alert("Bu filim avval tanlangan !");
//     }

// })




