let remaster = ' - Remaster 2011'
let albumTrackList = document.querySelector('.album-track-list')
let albumTrack = document.querySelector('.album-track')
let dislike = document.querySelector('.like .far')
let like = document.querySelector('.like .fas')

let remasterTitles = [
    'Procession ',
    'Father to Son ',
    'White Queen (As it Began) ',
    'Some Day One Day ',
    'The Loser in the End ',
    'Ogre Battle ',
    "The Fairy Feller's Master-Stroke ",
    'Nevermore ',
    'The March of the Black Queen ',
    'Funny How Love Is ',
    'Seven Seas of Rhye ',
]

let remasterLenght = [
    '1:13',
    '6:13',
    '4:33',
    '4:22',
    '4:01',
    '4:08',
    '2:40',
    '1:18',
    '6:32',
    '2:49',
    '2:48',
]

let remasterAudio = [
    './Media/Music/1.mp3',
    './Media/Music/2.mp3',
    './Media/Music/3.mp3',
    './Media/Music/4.mp3',
    './Media/Music/5.mp3',
    './Media/Music/6.mp3',
    './Media/Music/7.mp3',
    './Media/Music/8.mp3',
    './Media/Music/9.mp3',
    './Media/Music/10.mp3',
    './Media/Music/11.mp3'
]


for( let a = 0; a < remasterTitles.length; a++){
    let clonedSong = albumTrack.cloneNode(true)
    clonedSong.className = 'album-track'

    let titleSong = document.querySelectorAll('.title-song span:nth-of-type(1) h6')
    let titleAlbum = document.querySelectorAll('.title-song span:nth-of-type(2) h6')
    let songLength = document.querySelectorAll('.album-track .length')

    titleSong[a].innerText = remasterTitles[a]
    titleAlbum[a].innerText = remaster
    songLength[a].innerText = remasterLenght[a]

    albumTrackList.appendChild(clonedSong)

}

like.addEventListener('click', function(){
    if(like.style.opacity !== '0'){
        like.style.opacity = '0'
    }
    else{
        like.style.opacity = '1'
    }
})