function linkBorder() {
  let lborder = document.querySelectorAll(".mr-3");
  lborder[2].classList.remove("border1");
  lborder[1].classList.remove("border1");
  lborder[0].classList.add("border1");
  const x = document.querySelector(".hiddenorshow");
  x.style.display = "unset";

  const z = document.querySelector(".Relatedartist");
  z.style.display = "none";
  const xy = document.querySelector(".AboutQueen");
  xy.style.display = "none";
}

function linkBorder2() {
  let lborder = document.querySelectorAll(".mr-3");
  lborder[0].classList.remove("border1");
  lborder[2].classList.remove("border1");
  lborder[1].classList.add("border1");
  const x = document.querySelector(".hiddenorshow");
  x.style.display = "none";

  const y = document.querySelector(".AboutQueen");
  y.style.display = "none";

  const z = document.querySelector(".Relatedartist");
  z.style.display = "unset";
}

function linkBorder3() {
  let lborder = document.querySelectorAll(".mr-3");
  lborder[0].classList.remove("border1");
  lborder[1].classList.remove("border1");
  lborder[2].classList.add("border1");
  const z = document.querySelector(".AboutQueen");
  z.style.display = "unset";

  const x = document.querySelector(".hiddenorshow");
  x.style.display = "none";

  const y = document.querySelector(".Relatedartist");
  y.style.display = "none";
}
function myFunction() {
  // Declare variables
  let input, filter, ul, li, a, txtValue;
  input = document.querySelector("#myInput");
  filter = input.value.toUpperCase();
  ul = document.querySelector("#myUL");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const artist = urlParams.get("artist");
  const name = urlParams.get("name");
  name.replace(/%20/g, " ");
  example(artist);
  example2(name);
};

let example = (query) => {
  const striveapi = fetch(
    `https://deezerdevs-deezer.p.rapidapi.com/artist/${query}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c608fc777fmshd55587c64c83d78p1ebebcjsn20918a48db47",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())

    .then((body) => {
      console.log(body);

      let container = document.querySelector("#workplease");
      let div = document.createElement("div");
      div.classList.add("main-artist");
      container.setAttribute("style", ` margin-left: 0;`);
      // let myMain = document.querySelector("#shade")  ${body.picture_medium} ${body.name}

      div.innerHTML = ` 
        <div id="shade">
        <img src="${body.picture_big}" alt="" width="100%" />
        <div id="shadeBg"></div>
        </div>

      <div class="centered">
        <div>
          <p>33,000,575 MONTHLY LISTENERS</p>
          <h1 id="artistName"><b>${body.name}</b></h1>
          <input class="btn btn-success" type="button" value="Play" />
          <input class="btn btn-primary-outline" type="button" value="Follow" />
          <div class="mt-5">
            <a href="#" class="mr-3 border1" onclick="linkBorder()">OVERVIEW</a>
            <a href="#" class="mr-3" onclick="linkBorder2()">RELATED ARTIST</a>
            <a href="#" class="mr-3" onclick="linkBorder3()">ABOUT</a>
          </div>
        </div> 
      </div>
        
        
          `;
      artistName = body.name;
      container.insertBefore(div, container.firstElementChild);
      //container.appendChild(myMain);
    })

    .catch((err) => {
      console.error(err);
    });
};
// "https://api.deezer.com/artist/13/top?limit=50",

let example2 = (query) => {
  const anotherfetch = fetch(
    `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c608fc777fmshd55587c64c83d78p1ebebcjsn20918a48db47",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
      let myalbums = document.querySelector("#justwork");

      let htmlString = "";
      for (let i = 0; i < body.data.length; i++) {
        htmlString =
          htmlString +
          `
  <div class="col col-12 col-md-4 col-lg-2 text-center">
  <div class="first-image">
    <a href="#">
      <img
        class="img-fluid gradient"
        src="${body.data[i].album.cover_small}"
        style="width: 9rem; height: 9rem"
        alt=""
    /></a>
    <div class="shadebg1"></div>
    <p style="color: white; padding-bottom: 0; margin-bottom: 0">
     ${body.data[i].album.title}
    </p>
    <p style="margin-bottom: 0; color: lightgray"> ${body.data[i].artist.name}</p>
    <div class="library-play-button">
      <i class="fas fa-play"></i>
    </div>
  </div>
</div>`;
      }
      myalbums.innerHTML = htmlString;
    });
};
