## Ishlatilgan funcsilaraga tarif 

```
function $(select) {
    return document.querySelector(select);
}

function $$(select) {
    return document.querySelectorAll(select);
}


```

1. Ko'p takrorlanuvchi funcsiyalar , yani birhil ishni ko'p marotaba bajaruvchi funcsiyalarni biz utilis funcsiyalar deb ularni unversal holatga olib kelib olganmiz , yuqorida ko'rishligimiz mumkun elamentlarni tanlab olish jarayonini uchun bir funcsiyaga yozib olib uni unversal holatda ishbajara oladigan holtga keltirganmiz.   

<hr>


```
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
```
2. Bu funksiyamiz ham yuqoridaginga o'hshash yani takrorlanuchchan ammalr uchun , bu funksiya yordamida , js  yordamida ihtiyori dinamic elament yartib olishligimiz mumkun , bu f o'ziga 3 argument olib ularga qiyamat sifatida 1 argumentga yaratmoqchi bo'lgan tag nomi kiritiladi 2 qiymat sifatida yaratmoqchi bo'lgan elamentimizga class nomi va ohirgi qiymatiga cantent yozishligimiz mumkun.

<hr>

```
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
```

3. Darkmod ucun yozilgan funcsiya bu funcsiya va bundan kora yaqshirogini ustoz darsda yozib ko'rsatganlar (Eslatma : shuni yahshiroq o'rganib ol 🫡)

<hr>

```

 let loadWrapper = $('.load_wrapper');

 window.addEventListener('DOMContentLoaded',()=>{
     loadWrapper.style.display = 'flex';
     document.body.style.overflow="hidden";
 });

 window.addEventListener('load',()=>{

    loadWrapper.style.display = 'none';
    document.body.style.overflow="visible";

 });

```

4. yuqoridagi funcsiyani bajaradigan vazifasi biznig html sahifamiz to'liq yuklanib bolgungacha  ish  bajarib turadi yani sahifa to'liq yuklanib bo'lmagungacha foydalanuvchiga yuklanish jarayonida ekanligini ko'rsatib turadi va sahifa to'liq yuklanib bo'lgash o'z ishini yakunlaydi.

<hr>

```
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
```

5. Yuqoridagi funcsiya narmalays funcsiya bo'lib  datani (map) yordamida biz istagan holatga keltirib olishimizga yordam beradi.

<hr>

```
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
```

6. Yuqoridagi funcsiya o'ziga qiymat sifatida data(yani malumotlar to'plami) oladi va uni tekshiradi agan sharttdan o'tsa  o'sha datani "forEach" yordamida alanadida catigoriyalarini biz yaratgan  o'zgaruvchiga ([]) qo'shib boradi , bu nafaqat catigoriyalarini balki boshqa qiymatlari bo'ychaham ham ishlashlik imkoni mavjut agar biroz o'zgarish kiritsak .


<hr>

```
categoryData.sort().forEach((el)=>{
   let categorOption = creatElement("option", "", el);
   selectCategory.appendChild(categorOption);
})
```

7. Bu funcsiya ham o'ziga biriktirilgan datani (forEach) yordamida aylanim chiqadi va yqoridagi  2-funcsiya yordamida harmir elament uchun etml elament yaratib tanlab olingan elament ichiga joylashtiradi.

<hr>

```
function renderAllMoves(data , tagWrapper) {
    tagWrapper.innerHTML= ""
    if(data.length){
        data.forEach((el)=>{
            const card = creatElement('div', 'card', `
              <img src="${el.minImage}" alt="smth">
              <div class="card-body">
                  <h2>${el.title.length > 20 ? el.title.substring(0,15)+"..." : el.title}</h2>
                  <ul>
                      <li><strong>Year:</strong> ${el.year}</li>
                      <li><strong>Categories:</strong>${el.category.length > 3 ?el.category[1]+ ', ' + el.category[2] + " ," + el.category[3]: el.category }</li>
                      <li><strong>Rating:</strong>${el.rating}</li>
                      <li><strong>Language:</strong>${el.language}</li>
                  </ul>

                  <div class="flex btn-wrappeer items-center gap-x-3">
                   
                      <button 
                          id="${el.id}"
                          data-like=${el.id}
                          class="liked grid hover:bg-red-700 hover:text-white duration-500 text-red-700 place-content-center p-4 border w-12 h-12 rounded-full">
                          <i data-like=${el.id} class="liked bi bi-suit-heart-fill "></i>
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

```

8. Bu funcsiyamizham yuqoridagi funcsiyaga ohshash bo'lin o'ziga ikkita qiymat oladi birinchi qiymat sifatida qandaydur data va ikkinchi qiymat sifatida bajarib bolingan natijani qaysi elament ichiga joylashligi kerakligini ko'rsatuvshi malumotni o'ziga oladi , bunda qiymat siftida berilgan datani (forEach) yordamida aylanim chiqadi va yqoridagi  2-funcsiya yordamida harmir elament uchun bittadan card yasaydi va o'ziga ikkinchi qiymat sifatida berilgan o'zgruvchiga joylab chiqadi

<hr>

```
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
```

9. Yuqoridagi ikki funcsiyamiz o'z aro bir biriga bogliq bo'lib birida iniputdan kiritgan malumotimizni olib olishligimiz ko'rsatilgan birida esa osha malumot yordamida yuqorida yaratib olgan dinamic cardlarimiz ichida biz olgan malumotimiz qatnashqanlarini izlayda topsa ularni rendirga beradi aksi bo'lsa malumot topilmaganligi haqida hamar beradi.

<hr>

```
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
```

10. Bu funcsiyamizni ham bajaradigan vazifasi yuqoridagi funcsiyamiz bilan diyarli birhil farqi , yuqoridagi funcsiyamizda faqatgin nomi boyicha izlagan bolsak bunda qatiyroq izlanadi yani ham nomi , catigoriyasi va retingi bo'yicha izlanadi.

<hr>

```
moviesWrapper.addEventListener("click", (e)=>{
    
   if(e.target.classList.contains('liked')){
      
     let id = e.target.getAttribute('data-like');
     let titilFilm = allMovies.filter((el)=>el.id === id)[0];
     if(!tanlanganFillimlar.includes(titilFilm.id)){
        tanlanganFillimlar.push(titilFilm.id);
        toast('success', `${titilFilm.title.slice(0,21)+'...'} film added`, 1500 );
        localStorage.setItem("movies" , JSON.stringify(tanlanganFillimlar))
      
     }else{
        toast('arrov', `${titilFilm.title.slice(0,21)+'...'} film  delet`, 1500 )
        
     }
     
   }
})


function toast(type, message, timeout) {
   toastMessege.innerHTML=message;
   if(type=="success"){
    toastIcons.innerHTML=`<i class="bi bi-check2-all"></i>`
    toastElement.classList.remove('hov');
    toastElement.classList.add('shov');
    setTimeout(()=>{
        toastElement.classList.remove('shov');
        toastElement.classList.add('hov');
    },timeout)
   }else if(type=="arrov") {
    toastIcons.innerHTML=`<i class="bi bi-x-octagon"></i>`
    toastElement.classList.remove('hov');
    toastElement.classList.add('shov2');
    setTimeout(()=>{
        toastElement.classList.remove('shov2');
        toastElement.classList.add('hov');
    },timeout)
   }
}
```

11. Yuqoridagi funcsiyamiz nisabatan tushuntirishga murakkabroq bo'lib uni ishlash ketmaketligini tahlil qilib chiqsak valida "moviesWrapper" yani biz dinamic cardlarimiznig parent elamentini kuzatadi  unga click bo'lganda  bosilgan elamentinig claslar ro'yhatida "liked" bor bo'lganini qina oladi , so'ngra "getAttribute" yordamida esha elamentnig so'ralgan atribut qiymatini olib o'zgaruvchiga temnglaydi , songra osha qiymat biznig datamizdagi malumotlarnig yunik aydisiga teng bo'lsa o'shani "filter" yordamida oladi , va osha olingan malumotni idsi yuqorida elon qilingan elamentimiz "[]" ichida bor yo'qligini tekshiradi agar yo'q bo'lsa qoshadi va qoshilganligi haqida habar beruvchi boshqa bir funcsiyani yani "toast f" col qiladi va locolstorage ga ham buni qo'shib boradi , agar  yo'qligini elon qilingan elamentimiz "[]" ichida bor borbo'sa buhaqida ham habar beruvchi funcsiyani ishga tushuradi. 