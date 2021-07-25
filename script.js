
document.getElementById("searchBtn").addEventListener("click",function(){
    let searchTerm = document.getElementById("searchInput").value;
    if(searchTerm)
    searchAnime(searchTerm);
})


async function searchAnime(searchTerm){
   //getSearchMethod(searchTerm);
    try{
    let resp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${searchTerm}&page=1`)
    let data = await resp.json();
    //console.log(data);
    UpdateDom(data);
    }catch(error){
        console.log(error);
    }
}



/*
this code is for with out using DOM elements.
function UpdateDom(data){
    const searchresults = document.getElementById("search-results");

    searchresults.innerHTML=data.results.map(anime =>{
        return `
        <div class="container">
        <div class="card">
          <div class="card-image">
            <img src="${anime.image_url}">
            <div class = "card-type">Type of series: "${anime.type}"</div><br>
            <div class="card-rating">Rating of series: "${anime.rated}"</div>
          </div>
          <div class = "card-dates">
          <p class="class-from">"FromDate : ${anime.start_date}"</p>
          <p class="class-to">"ToDate : ${anime.end_date}"</p>
          </div>
        </div>
      </div>
    </div>
        `
    });
}*/

//Using DOM elements

function UpdateDom(data){
    data.results.forEach(element => {
        
        let row = document.getElementById("row");
        let col = document.createElement("div");
        col.setAttribute("class","col-4");

        let card = document.createElement("div");
        card.setAttribute("class","card h-100");

        let cardImg = document.createElement("img");
        cardImg.setAttribute("class","card-image");
        cardImg.setAttribute("src",element.image_url);

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body");

        let cardtype = document.createElement("h4");
        cardtype.setAttribute("class","h4");
        cardtype.innerHTML="Type: "+ element.type;

        let cardrating = document.createElement("p");
        cardrating.setAttribute("class","card-rating");
        cardrating.innerHTML="Rating: " + element.rated;

        let cardFrom = document.createElement("p");
        cardFrom.setAttribute("class","card-from");
        cardFrom.innerHTML="Start_Date: " + element.start_date;

        let cardTo = document.createElement("p");
        cardTo.setAttribute("class","card-to");
        cardTo.innerHTML="End_Date: " + element.end_date;

        cardBody.append(cardtype,cardrating,cardFrom,cardTo);
        card.append(cardImg,cardBody);
        col.append(card);
        row.append(col);

    });
}





