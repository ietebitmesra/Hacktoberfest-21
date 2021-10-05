//MAIN DATA IS ALREADY FETCHED
//TO LEARN MORE ABOUT THIS API endpoints VISIT 'https://www.tvmaze.com/api' 
//YOU JUST NEED TO SAVE A PARTICULAR ONE YOU NEED IN A VARIABLE
//RENDER IT ON PAGE AS USER INPUTS A NAMED
//INITIALY ONLY IMAGE AND SERIES NAME IS RENDERED ON SCREEN AS SEARCHES
//TRY TO SHOW MORE DATA AS NEEDED(PROPERLY)
//SOME DATA LIKE SUMMARY AND RATING IS ALREADY SAVED YOU JUST NEED TO APPEND INITIALY
//ADD GOOD FONTS
//MAKE UI BETTER
//IF YOU FIND ANY ISSUE WHICH YOU ARE NOT ABLE TO FIX YOU CAN ALWAYS OPEN YOUR OWN ISSUE ON GITHUB
//SEE CODE PROPERLY YOU'LL GET IDEA OF MOST OF IT
//MAKE PROPER COMMENTS WHERE-EVER NECESSARY


const form = document.querySelector('#searchForm');
const resultDiv = document.querySelector('#main-info')

//FORM SUBMISSION EVENT LISTENER
form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    // API CALL
    const searchTerm = document.querySelector('#searchText').value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    console.log(res)
    const bestMatch = res.data[0].show

    // ALL API DATA
    const id = bestMatch.id;
    const image = bestMatch.image.medium
    // const premeired = bestMatch.image.medium
    const name = bestMatch.name 
    const cast_response = await fetch(`https://api.tvmaze.com/shows/${id}/cast`)
    const cast_data = await cast_response.json();
    let cast_names = 'Cast : '
    cast_data.map(getNames)
    function getNames(value){
        cast_names = cast_names+value.person.name+", ";
    }
    cast_names = cast_names.substring(0,cast_names.length-2)

    let rating = "Ratings: "+bestMatch.rating.average;
    let starsLength = Math.floor(bestMatch.rating.average);
   let i=starsLength-1;
   let j=10-starsLength;

   for (i; i >= 0; --i) 
   rating= rating + " ⭐️";

   for(j;j>=1;--j)
   rating=rating +" ✰"
    const summary = bestMatch.summary
    let strippedString = summary.replace(/(<([^>]+)>)/gi, "");
    let strippedString2 = rating.replace(/(<([^>]+)>)/gi, "");

    // Hiding popular shows section
        pop_show_hide();

 
    // CREATE DOM ELEMENTS HERE
    const img = document.createElement('IMG');    
    img.src = image;
    const h1 = document.createElement('H1');
    h1.innerText = name;
    const p1 = document.createElement('p');
    p1.innerText = strippedString;
    const p2 = document.createElement('p');
    p2.innerText = strippedString2;
    const cast = document.createElement('cast');
    cast.innerText = cast_names;
    // STYLE CREATED ELEMENTS HERE
    h1.style.fontSize = '50px';

    p1.style.fontFamily= 'Courgette, cursive';
    p1.style.fontSize= '22px';
    p1.style.fontWeight= '100'

    p2.style.fontSize = '20px';

    cast.style.fontFamily = 'Arial, Helvetica, sans-serif'
    cast.style.fontWeight = '100'
    cast.style.fontSize = '20px';
    cast.style.display = 'block'
    cast.style.fontColor = "white"


    // APPEND ELEMENTS TO WEB PAGE
    resultDiv.append(img)
    resultDiv.append(h1)
    resultDiv.append(p1)
    resultDiv.append(p2)
    resultDiv.append(cast)
    showSecInfo();
    form.reset();
})

const popShowSection = document.querySelector("#popular-shows")
const secInfo = document.querySelector("#sec-info")

const pop_show_hide = ()=>{
    popShowSection.classList.add('hidden');
}

const showSecInfo = ()=>{
    secInfo.classList.remove('hidden')
}
