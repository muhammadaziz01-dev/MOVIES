"use strict"
//--MOVIES DATA MINIMAL---
movies.splice(100);

//-----------------------HTML Elamentlari tanlab olingan----------------------

let selectCategory = $("#category");

let moviesWrapper = $(".movies");

let searchInput = $("#search-input");

let darcModeBtn = $("#darcmode-btn");

let header =$("header");

let aside =$("#aside");

let inputs = $$ ("input");

let footer = $("footer");

let p = $$("p");


//--------------------------GLABAL O'zgaruvchilar------------------
let  categoryData = [];

let changMovies = JSON.parse(localStorage.getItem("movies")) || [];

//---------------------------DARC MODE---------------------

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


//----------------------NARMALAEZ DATA-----------------------------
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

console.log(allMovies);



//--------------------MOVIES COTIGORY------

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



//--------------------------RENDER COTEGORY---------

categoryData.sort().forEach((el)=>{
   let categorOption = creatElement("option", "", el);
   selectCategory.appendChild(categorOption);
})

//------------------REDER ALL MOVIES  (DINAMIC CARD)----------------

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


//-------------------------SEARCH INPUT HEADER----------------

searchInput.addEventListener("input" , (el) => {
    let searchMovis = el.target.value;
    let foundMovis = allMovies.filter((el) => el.title.toLowerCase().includes(searchMovis.toLowerCase()));
    if(foundMovis.length){
        renderAllMoves(foundMovis , moviesWrapper)
    }else{
        moviesWrapper.innerHTML=`<h1 class="text-red-600 text-[32px] w-full ">Siz qidirgan malumot topilmadi !!</h1>`
    }
})

//--------------------------------TANLANGAN FILIMLR----------------






// moviesWrapper.addEventListener("click" , (el) => {
//     let idName =el.target.id
//     console.log(id);
//     let chengCard = allMovies.find((el)=>el.id === idName);
//     changMovies = JSON.parse(localStorage.getItem("movies")) || [];
//     if(!changMovies.find((el)=> el.id === idName)){
//         changMovies.push(chengCard);
//         localStorage.setItem("movies" , JSON.stringify(changMovies))
//     }else{
//         alert("Bu filim avval tanlangan !");
//     }

// })




