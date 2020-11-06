


//Save Album Options
let albumOptions = document.querySelector('.save-album-options i')
let optionList = document.querySelector('.save-album-options ul')
let saveAlbum = document.querySelector('.save-album-options ul li:nth-of-type(1)')

albumOptions.addEventListener('click', function(){
    if(optionList.style.opacity !== '1'){
        optionList.style.opacity = '1'
        optionList.style.transition = 'opacity 1s ease, margin-left .3s ease'
        optionList.style.marginLeft = '0'

    }
    else{
        optionList.style.opacity = '0'
        optionList.style.transition = 'opacity .4s ease, margin-left .3s ease'
        optionList.style.marginLeft = '-20px'
    }
    
})


//TRACKLIST ELEMENTS
let albumTrackList = document.querySelector('.album-track-list')
let albumTrack = document.querySelector('.album-track')

//OPTIONS ELEMENTS
let dislike = document.querySelector('.like .far')
let like = document.querySelector('.like .fas')
let favAdded = document.querySelector('.album-options p')

//Add Album

//Image Album
let albumCont = document.querySelector('.img-album')

//Album Infos
let titleAlbum = document.querySelector('.title-album h4')
let artistAlbum = document.querySelector('.title-album p')
let albumDetails = document.querySelector('.album-details')
let artistSong = document.querySelector('.title-artist p')
let albumImg = document.querySelector('.img-album img')

//Album button
let addImg = document.querySelector('.fa-plus')

//Available albums
let availableAlbums = document.querySelectorAll('.modal-body ul li')
let availableTitle = document.querySelectorAll('.available-title')
let availableArtist = document.querySelectorAll('.available-artist')
let availableDetails = document.querySelectorAll('.available-details')

//AVAILABLES COVER
let albumBg = [
    './Media/queenRemaster.jpg',
    './Media/miracle.jpg',
    './Media/25.jpg',
    './Media/getRich.jpg',
    './Media/trash.jpg'
]

//SONG SOURCE
let remasterTracks = [
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
    './Media/Music/11.mp3',
]

//SONG TITLES
let songTitles = []

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

let miracleTitles = [
    'Party',
    "Khashoggi's Ship",
    "The Miracle",
    "I Want It All",
    "The Invisible Man",
    "Breakthru",
    "Rain Must Fall",
    "Scandal",
    "My Baby Does Me",
    "Was It All Worth It",
    "Hang On in There (B-Side)",
    "Chinese Torture"
]

let adele = [
    'Hello',
    'Send My Love (To Your New Lover',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion',
]

let cent = [
    'What Up Gangsta',
    'Patiently Waiting (feat. Eminem)',
    'Many Men (Wish Death)',
    'In Da Club',
    'High All the Time',
    'Heat',
    "If I Can't",
    'Blood Hound (feat. Young Buck)',
    'Back Down',
    'P.I.M.P.',
    'Like My Style (feat. Tony Tayo)',
    'Poor Lil Rich',
    '21 Questions (feat. Nate Dogg)',
    "Don't Push Me (feat. Lloyd Banks and Eminem)",
    'Gotta Make It to Heaven',
]

let cooper = [
    'Poison',
    'Spark in the Dark',
    'House of Fire',
    'Why Trust You',
    'Only My Heart talking',
    'Bed of Nails',
    "This Maniac's in Love with You",
    'Trash',
    'Hell Is Living Without You',
    "I'm Your Gun",
]

songTitles.push(remasterTitles)
songTitles.push(miracleTitles)
songTitles.push(adele)
songTitles.push(cent)
songTitles.push(cooper)


//SONGS LENGTH
let tracksLength = []

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

let miracleLenght = [
    '2:24',
    '2:47',
    '5:02',
    '4:41',
    '3:55',
    '4:07',
    '4:20',
    '4:42',
    '3:22',
    '5:45',
    '3:46',
    '1:46',
]

let adeleLenght = [
    '4:55',
    '3:43',
    '5:48',
    '4:51',
    '4:05',
    '4:00',
    '3:45',
    '4:46',
    '3:46',
    '4:32',
    '4:12',
]

let centLenght = [
    '2:59',
    '4:48',
    '4:16',
    '3:13',
    '4:29',
    '4:14',
    '3:16',
    '4:00',
    '4:03',
    '4:09',
    '3:13',
    '3:19',
    '3:44',
    '4:08',
    '4:00',
]

let cooperLenght = [
    '4:29',
    '3:52',
    '3:47',
    '3:12',
    '4:47',
    '4:20',
    '3:48',
    '4:01',
    '4:11',
    '3:47',
]

tracksLength.push(remasterLenght)
tracksLength.push(miracleLenght)
tracksLength.push(adeleLenght)
tracksLength.push(centLenght)
tracksLength.push(cooperLenght)

//Album Title (SONG DETAIL)

let albumTitleSD = []

let remaster = ' - Remaster 2011'
let miracle = ' - The Miracle'
let adele25 = ' - 25'
let getRich = ' - Get Rich or Die Tryin'
let trash = ' - Trash'

albumTitleSD.push(remaster)
albumTitleSD.push(miracle)
albumTitleSD.push(adele25)
albumTitleSD.push(getRich)
albumTitleSD.push(trash)



//ALBUM LIST

let allAlbum = []

//CREATE ALBUM PAGE
for(let b = 0; b < availableAlbums.length; b++){

    //CREATE TRACKLIST
    let createTrack = function(){
    
        for( let a = 0; a < songTitles[b].length; a++){
            let clonedSong = albumTrack.cloneNode(true)
            clonedSong.className = 'album-track'
        
            let titleSong = document.querySelectorAll('.title-song span:nth-of-type(1) h6')
            let titleAlbum = document.querySelectorAll('.title-song span:nth-of-type(2) h6')
            let songLength = document.querySelectorAll('.album-track .length')
        
            titleSong[a].innerText = songTitles[b][a]
            titleAlbum[a].innerText = albumTitleSD[b]
            songLength[a].innerText = tracksLength[b][a]

            albumTrackList.appendChild(clonedSong)
            
        }
    }
        
    //CREATE ALBUM PAGE
    availableAlbums[b].addEventListener('click', function(){
        albumImg.src = albumBg[b]
        titleAlbum.innerText = availableTitle[b].innerText
        artistAlbum.innerText = availableArtist[b].innerText
        artistSong.innerText = availableArtist[b].innerText
        albumDetails.innerText = availableDetails[b].innerText
        albumCont.removeChild(addImg)
        createTrack()
        
    })
    //PUSH ALBUM ON THE ARRAY
    let completedALbum = document.querySelector('.album-page')
    completedALbum.classList.add('newAlbum'+ b)
    allAlbum.push(completedALbum)

}






//LIKE BUTTON
like.addEventListener('click', function(){
    if(like.style.opacity !== '0'){
        like.style.opacity = '0'
    }
    else{
        like.style.opacity = '1'
        favAdded.style.display = 'block'
        setTimeout(function(){favAdded.style.display = 'none'}, 300)
    }
})

