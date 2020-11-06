
let libraryNav = document.querySelectorAll('#library-menu ul li')
let librarySlider = document.getElementById('library-slider')

for( let a = 0; a < libraryNav.length; a++){

    let underline = document.createElement('div')
    underline.className = 'underline'

    libraryNav[a].appendChild(underline)
}

libraryNav[0].addEventListener('click', function(){
    librarySlider.style.marginLeft = '0'
    
})
libraryNav[1].addEventListener('click', function(){
    librarySlider.style.marginLeft = '-100%'
})
libraryNav[2].addEventListener('click', function(){
    librarySlider.style.marginLeft = '-200%'
})
libraryNav[3].addEventListener('click', function(){
    librarySlider.style.marginLeft = '-300%'
})


//CREATE NEW ALBUM CARD

let newAlbumImageSource = document.querySelector('.modal-body input:nth-of-type(1)')
let newAlbumName = document.querySelector('.modal-body input:nth-of-type(2)')
let newAlbumArtist = document.querySelector('.modal-body input:nth-of-type(3)')
let newAlbumCard = document.querySelector('.library-card-album')
let addNewAlbum = document.querySelector('.modal-footer button')
let albumPage = document.querySelector('#library-album .row')


let newAlbumList = []

newAlbumList.push(newAlbumCard)
    
let createAlbumCard = function(album){
  
    addNewAlbum.addEventListener('click', function(){
        let destPage = ''
        if(newAlbumImageSource.value === 'queenRemaster.jpg'){
            destPage = 'remaster.html'
        }
        else if(newAlbumImageSource.value==='miracle.jpg'){
            destPage = 'miracle.html'
        }
        else if(newAlbumImageSource.value==='25.jpg'){
            destPage = '25.html'
        }
        else if(newAlbumImageSource.value==='getRich.jpg'){
            destPage = 'getRich.html'
        }
        else if(newAlbumImageSource.value==='trash.jpg'){
            destPage = 'trash.html'
        }
        else{
            destPage = 'album.html'
        }

            // create js object
        let album = {
            title: newAlbumName.value,
            image: './Media/' + newAlbumImageSource.value,
            artist:newAlbumArtist.value,
            ref: destPage
        }
         // push it to array
        newAlbumList.push(album);
        // store to local
        storeIt("newAlbumList",newAlbumList)
        // re populate albums
        populateAlbums()
        window.location.hash = '#library-album'
        window.location.reload(true)
    })

}

const populateAlbums = () => {
    const albumsListContainer = document.getElementById("albums-list") 
    // keep addButton
    const addButton = albumsListContainer.firstElementChild.outerHTML
   // remove container
    albumsListContainer.innerHTML=""
    newAlbumList.forEach(album=>{ 
        // add all albums in the array as columns
        albumsListContainer.innerHTML = `${albumsListContainer.innerHTML} ${AlbumCard(album)}`
    })

    // add add button again at  the beggining of row as first col
    albumsListContainer.innerHTML = `${addButton} ${albumsListContainer.innerHTML}`
 
}


const AlbumCard =  (album) => ` 
    <div
        class="col-12 col-sm-12 col-md-6 col-lg-3 library-card-album">
        <div class="img-library-album">
            <img src="${album.image}" alt="" width="100%" />
        </div>
        <a href=${album.ref}><h6>${album.title}</h6></a>
        <p>${album.artist}</p>
        <!--<div class="library-play-button">
        <i class="fas fa-plus"></i>
        </div>-->
    </div>
    
    `

window.onload=function(){
    newAlbumList  = getFromStore("newAlbumList")
    if(!newAlbumList){ // if there is no newAlbumList in localStorage
        // create it and save it to localStorage 
        // and overwrite newAlbumList variable in global scope
        newAlbumList =storeIt('newAlbumList',[]);
    }
    populateAlbums()
     
}

const storeIt = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value));// you can only stores string
    return value;
}
const getFromStore = (key) => {
    return JSON.parse(localStorage.getItem(key));
}