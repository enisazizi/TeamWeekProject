let libraryNav = document.querySelectorAll("#library-menu ul li");
let librarySlider = document.getElementById("library-slider");

for (let a = 0; a < libraryNav.length; a++) {
  let underline = document.createElement("div");
  underline.className = "underline";

  libraryNav[a].appendChild(underline);
}

libraryNav[0].addEventListener("click", function () {
  librarySlider.style.marginLeft = "0";
});
libraryNav[1].addEventListener("click", function () {
  librarySlider.style.marginLeft = "-100%";
});
libraryNav[2].addEventListener("click", function () {
  librarySlider.style.marginLeft = "-200%";
});
libraryNav[3].addEventListener("click", function () {
  librarySlider.style.marginLeft = "-300%";
});
libraryNav[4].addEventListener("click", function () {
  librarySlider.style.marginLeft = "-400%";
});

async function deezerSearchAsync(query) {
  try {
    const response = await fetch(
      `https://rapidapi.p.rapidapi.com/search?q=${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "1dcc396338msh6f366ceba8825ecp154c05jsn402389ded4c0",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function searchBtn() {
  //TO CHECK IF NAV IS CREATED, DONT WANT TWO NAV IF YOU CLICK SEARCH AGAIN
  let libraryMenu = document.querySelectorAll("#library-menu ul li");
  let libraryPages = document.querySelectorAll(".library-page");
  if (libraryMenu.length === 6) {
    libraryMenu[5].remove();
    libraryPages[5].remove();
  }
  //GET INPUT VALUE
  const input = document.querySelector("#search");
  const { data } = await deezerSearchAsync(input.value);
  //ADD NAV
  const ul = document.querySelector("#library-menu ul");
  let li = document.createElement("li");
  li.addEventListener("click", function () {
    librarySlider.style.marginLeft = "-500%";
  });
  li.innerHTML = input.value;
  let underlineDiv = document.createElement("div");
  underlineDiv.classList.add("underline");
  li.appendChild(underlineDiv);
  ul.appendChild(li);
  librarySlider.style.marginLeft = "-500%";
  //ADD PAGE
  let libraryPage = document.createElement("div");
  libraryPage.classList.add("library-page");
  //   let title = document.createElement("h3");
  //   title.innerHTML = input.value;
  let row = document.createElement("div");
  row.classList.add("row");

  //TRYING TO USE REDUCE FUNCTION

  let cards = data.reduce(
    (accumulator, element) =>
      accumulator +
      `<div class="col-12 col-sm-12 col-md-6 col-lg-3 library-card-album text-truncate" id="${element.album.id}" onmouseover="playMusic(this)" onmouseout="pauseMusic(this)"">
            <div class="img-library-album">
            <img src="${element.album.cover_medium}" alt="" width="100%" />
            </div>
            <a href="album.html"><h4>${element.album.title}</h4></a>
            <a href="artist.html?artist=${element.artist.id}&name=${element.artist.name}"><p>${element.artist.name}</p></a>
            <div class="library-play-button">
            <i class="fas fa-play"></i>
            </div>
        </div>
        <audio id="${element.album.id}Audio">
            <source src="${element.preview}" type="audio/mp3">
        </audio>
        `,
    ""
  );
  row.innerHTML = cards;
  libraryPage.appendChild(row);
  //libraryPage.appendChild(title);
  librarySlider.style.width = "600%";
  librarySlider.appendChild(libraryPage);
}

const playMusic = function (card) {
  let audio = document.querySelectorAll("audio");
  audio.forEach((element) => {
    if (element.id.slice(0, element.id.length - 5) === card.id) {
      element.play();
    }
  });
};

const pauseMusic = function (card) {
  let audio = document.querySelectorAll("audio");
  audio.forEach((element) => {
    if (element.id.slice(0, element.id.length - 5) === card.id) {
      element.pause();
    }
  });
};
