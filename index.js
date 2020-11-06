
/* -------------------------------------------------------------------------------------------------------- */
let sideToggler = document.querySelector('#toggler-side-nav')
let sideNav = document.querySelector('#spotify-side-nav')
let footer = document.querySelector('footer')


let hide = function(){
    if(sideNav.style.marginLeft !=="0px"){
        sideNav.style.marginLeft = '0'
        document.body.style.marginLeft = '0'
        footer.style.marginLeft = '0'

    }else{
        sideNav.style.marginLeft = '-200px'
        document.body.style.marginLeft = '-200px'
        footer.style.marginLeft = '200px'

    }
    
}



/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */
let playMiracle = document.querySelector('#play-miracle')

let track_art = document.querySelector(".track-art"); 
let track_name = document.querySelector(".track-name"); 
let track_artist = document.querySelector(".track-artist"); 

let playpause_btn = document.querySelector(".playpause-track"); 
let next_btn = document.querySelector(".next-track"); 
let prev_btn = document.querySelector(".prev-track"); 
  
let seek_slider = document.querySelector(".seek_slider"); 
let volume_slider = document.querySelector(".volume_slider"); 
let curr_time = document.querySelector(".current-time"); 
let total_duration = document.querySelector(".total-duration"); 
  
// Specify globally used values 
let track_index = 0; 
let isPlaying = false; 
let updateTimer; 
  
// Create the audio element for the player 
let curr_track = document.createElement('audio'); 
  
// Define the list of tracks that have to be played 
let track_list = [ 
  { 
    imgSong : './Media/queenRemaster.jpg',
    title : 'Procession',
    artist : 'Queen',
    path: "./Media/Music/1.mp3"}, 
  { 
    imgSong : './Media/queenRemaster.jpg',
    title : 'Father to Son',
    artist : 'Queen',
    path: "./Media/Music/2.mp3"}, 
  { 
    imgSong : './Media/queenRemaster.jpg',
    title : 'White Queen (As it Began)',
    artist : 'Queen',
    path: "./Media/Music/3.mp3"}, 
  { 
    imgSong : './Media/queenRemaster.jpg',
    title : 'Sone Day One Day',
    artist : 'Queen',
    path: "./Media/Music/4.mp3"}, 
  { 
    imgSong : './Media/queenRemaster.jpg',
    title : 'The Loser in the End',
    artist : 'Queen',
    path: "./Media/Music/5.mp3"}, 
  { 
    imgSong : './Media/queenRemaster.jpg',
    title : 'Ogre Battle',
    artist : 'Queen',
    path: "./Media/Music/6.mp3"}, 
  { 
    imgSong : './Media/queenRemaster.jpg',
    title : "The Fairy Feller's Master-Stroke",
    artist : 'Queen',
    path: "./Media/Music/7.mp3"}, 
  { 
    imgSong : './Media/queenRemaster.jpg',
    title : 'NeverMore',
    artist : 'Queen',
    path: "./Media/Music/8.mp3"}, 
  { 
    imgSong : './Media/queenRemaster.jpg',
    title : 'The March of the Black Queen',
    artist : 'Queen',
    path: "./Media/Music/9.mp3"}, 
  { 
    imgSong : './Media/queenRemaster.jpg',
    title : 'Funny How Love Is',
    artist : 'Queen',
    path: "./Media/Music/10.mp3"}, 
  { 
    imgSong : './Media/queenRemaster.jpg',
    title : 'Seven Seas of Rhye',
    artist : 'Queen',
    path: "./Media/Music/11.mp3"},
  
    { 
      imgSong : './Media/miracle.jpg',
      title : 'Party',
      artist : 'Queen',
      path: "./Media/Music/The Miracle/1.mp3"},
    { 
      imgSong : './Media/miracle.jpg',
      title : "Khashoggi's Ship",
      artist : 'Queen',
      path: "./Media/Music/The Miracle/2.mp3"},
    { 
      imgSong : './Media/miracle.jpg',
      title : 'The Miracle',
      artist : 'Queen',
      path: "./Media/Music/The Miracle/3.mp3"},
    { 
      imgSong : './Media/miracle.jpg',
      title : 'I Want It All',
      artist : 'Queen',
      path: "./Media/Music/The Miracle/4.mp3"},
    { 
      imgSong : './Media/miracle.jpg',
      title : 'The Invisible Man',
      artist : 'Queen',
      path: "./Media/Music/The Miracle/5.mp3"},
    { 
      imgSong : './Media/miracle.jpg',
      title : 'Breakthru',
      artist : 'Queen',
      path: "./Media/Music/The Miracle/6.mp3"},
    { 
      imgSong : './Media/miracle.jpg',
      title : 'Rain Must Fall',
      artist : 'Queen',
      path: "./Media/Music/The Miracle/7.mp3"},
    { 
      imgSong : './Media/miracle.jpg',
      title : 'Scandal',
      artist : 'Queen',
      path: "./Media/Music/The Miracle/8.mp3"},
    { 
      imgSong : './Media/miracle.jpg',
      title : 'My Baby Does Me',
      artist : 'Queen',
      path: "./Media/Music/The Miracle/9.mp3"},
    { 
      imgSong : './Media/miracle.jpg',
      title : 'Was It All Worth It',
      artist : 'Queen',
      path: "./Media/Music/The Miracle/10.mp3"},
    { 
      imgSong : './Media/miracle.jpg',
      title : 'Hang On in There (B-Side)',
      artist : 'Queen',
      path: "./Media/Music/The Miracle/11.mp3"},
    { 
      imgSong : './Media/miracle.jpg',
      title : 'Chinese Torture',
      artist : 'Queen',
      path: "./Media/Music/The Miracle/12.mp3"},
      { 
        imgSong : './Media/25.jpg',
        title : 'Hello',
        artist : 'Adele',
        path: "./Media/Music/25/1.mp3"}, 
      { 
        imgSong : './Media/25.jpg',
        title : 'Send My Love (To Your New Lover)',
        artist : 'Adele',
        path: "./Media/Music/25/2.mp3"}, 
      { 
        imgSong : './Media/25.jpg',
        title : 'I Miss You',
        artist : 'Adele',
        path: "./Media/Music/25/3.mp3"}, 
      { 
        imgSong : './Media/25.jpg',
        title : 'When We Were Young',
        artist : 'Adele',
        path: "./Media/Music/25/4.mp3"}, 
      { 
        imgSong : './Media/25.jpg',
        title : 'Remedy',
        artist : 'Adele',
        path: "./Media/Music/25/5.mp3"}, 
      { 
        imgSong : './Media/25.jpg',
        title : 'What Under the Bridge',
        artist : 'Adele',
        path: "./Media/Music/25/6.mp3"}, 
      { 
        imgSong : './Media/25.jpg',
        title : "River Lea",
        artist : 'Adele',
        path: "./Media/Music/25/7.mp3"}, 
      { 
        imgSong : './Media/25.jpg',
        title : 'Love in the Dark',
        artist : 'Adele',
        path: "./Media/Music/25/8.mp3"}, 
      { 
        imgSong : './Media/25.jpg',
        title : 'Million Years Ago',
        artist : 'Adele',
        path: "./Media/Music/25/9.mp3"}, 
      { 
        imgSong : './Media/25.jpg',
        title : 'All I Ask',
        artist : 'Adele',
        path: "./Media/Music/25/10.mp3"}, 
      { 
        imgSong : './Media/25.jpg',
        title : 'Sweetest Devotion',
        artist : 'Adele',
        path: "./Media/Music/25/11.mp3"},
        { 
          imgSong : './Media/getRich.jpg',
          title : 'What Up Gangsta',
          artist : '50 Cent',
          path: "./Media/Music/cent/1.mp3"}, 
        { 
          imgSong : './Media/getRich.jpg',
          title : 'Patiently Waiting (feat. Eminem)',
          artist : '50 Cent',
          path: "./Media/Music/cent/2.mp3"}, 
        { 
          imgSong : './Media/getRich.jpg',
          title : 'Many Men (Wish Death)',
          artist : '50 Cent',
          path: "./Media/Music/cent/3.mp3"}, 
        { 
          imgSong : './Media/getRich.jpg',
          title : 'In Da Club',
          artist : '50 Cent',
          path: "./Media/Music/cent/4.mp3"}, 
        { 
          imgSong : './Media/getRich.jpg',
          title : 'High All The Time',
          artist : '50 Cent',
          path: "./Media/Music/cent/5.mp3"}, 
        { 
          imgSong : './Media/getRich.jpg',
          title : 'Heat',
          artist : '50 Cent',
          path: "./Media/Music/cent/6.mp3"}, 
        { 
          imgSong : './Media/getRich.jpg',
          title : "If I Can't",
          artist : '50 Cent',
          path: "./Media/Music/cent/7.mp3"}, 
        { 
          imgSong : './Media/getRich.jpg',
          title : 'Blood Hound (feat. Young Buck)',
          artist : '50 Cent',
          path: "./Media/Music/cent/8.mp3"}, 
        { 
          imgSong : './Media/getRich.jpg',
          title : 'Back Down',
          artist : '50 Cent',
          path: "./Media/Music/cent/9.mp3"}, 
        { 
          imgSong : './Media/getRich.jpg',
          title : 'P.I.M.P',
          artist : '50 Cent',
          path: "./Media/Music/cent/10.mp3"}, 
        { 
          imgSong : './Media/getRich.jpg',
          title : 'Like My Style (feat. Tony Tayo)',
          artist : '50 Cent',
          path: "./Media/Music/cent/11.mp3"}, 
          { 
            imgSong : './Media/getRich.jpg',
            title : 'Poor Lil Rich',
            artist : '50 Cent',
            path: "./Media/Music/cent/12.mp3"}, 
          { 
            imgSong : './Media/getRich.jpg',
            title : '21 Questions (feat. Nate Dogg)',
            artist : '50 Cent',
            path: "./Media/Music/cent/13.mp3"}, 
          { 
            imgSong : './Media/getRich.jpg',
            title : "Don't Push Me (feat. Lloyd and Eminem)",
            artist : '50 Cent',
            path: "./Media/Music/cent/14.mp3"}, 
          { 
            imgSong : './Media/getRich.jpg',
            title : 'Gotta Make It to Heaven',
            artist : '50 Cent',
            path: "./Media/Music/cent/15.mp3"},
            { 
              imgSong : './Media/trash.jpg',
              title : 'Poison',
              artist : 'Alice Cooper',
              path: "./Media/Music/trash/1.mp3"}, 
            { 
              imgSong : './Media/trash.jpg',
              title : 'Spark in the Dark',
              artist : 'Alice Cooper',
              path: "./Media/Music/trash/2.mp3"}, 
            { 
              imgSong : './Media/trash.jpg',
              title : 'House of Fire',
              artist : 'Alice Cooper',
              path: "./Media/Music/trash/3.mp3"}, 
            { 
              imgSong : './Media/trash.jpg',
              title : 'Why Trust You',
              artist : 'Alice Cooper',
              path: "./Media/Music/trash/4.mp3"}, 
            { 
              imgSong : './Media/trash.jpg',
              title : 'Only My Heart Talking',
              artist : 'Alice Cooper',
              path: "./Media/Music/trash/5.mp3"}, 
            { 
              imgSong : './Media/trash.jpg',
              title : 'Bed of Nails',
              artist : 'Alice Cooper',
              path: "./Media/Music/trash/6.mp3"}, 
            { 
              imgSong : './Media/trash.jpg',
              title : "This Maniac's in Love With You",
              artist : 'Alice Cooper',
              path: "./Media/Music/trash/7.mp3"}, 
            { 
              imgSong : './Media/trash.jpg',
              title : 'Trash',
              artist : 'Alice Cooper',
              path: "./Media/Music/trash/8.mp3"}, 
            { 
              imgSong : './Media/trash.jpg',
              title : 'Hell Is Living Without You',
              artist : 'Alice Cooper',
              path: "./Media/Music/trash/9.mp3"}, 
            { 
              imgSong : './Media/trash.jpg',
              title : "I'm Your Gun",
              artist : 'Alice Cooper',
              path: "./Media/Music/trash/10.mp3"},
              
];

function random(){
  track_list = shuffle(track_list)
}

function loadTrack(track_index) { 
    
    clearInterval(updateTimer); 
    resetValues(); 
    
   
    curr_track.src = track_list[track_index].path; 
    curr_track.load(); 

    track_art.src = track_list[track_index].imgSong;
    track_name.innerText = track_list[track_index].title; 
    track_artist.innerText = track_list[track_index].artist; 
  
    updateTimer = setInterval(seekUpdate, 1000); 
    
    
    curr_track.addEventListener("ended", nextTrack); 
    
    
} 
    
  function resetValues() { 
    curr_time.textContent = "00:00"; 
    total_duration.textContent = "00:00"; 
    seek_slider.value = 0; 
  } 
  function playpauseTrack() { 
  
    if (!isPlaying) playTrack(); 
    else pauseTrack(); 
  } 
    
  function playTrack() { 
   
    curr_track.play(); 
    isPlaying = true;
    track_art.style.animation = 'rotation 10s infinite'; 
    
    
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>'; 
  } 
    
  function pauseTrack() { 
    
    curr_track.pause(); 
    isPlaying = false;
    track_art.style.animation = 'none'; 
    
    
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';; 
  } 
    
  function nextTrack() { 
  
    if (track_index < track_list.length - 1) 
      track_index += 1; 
    else track_index = 0; 
   
    loadTrack(track_index); 
    playTrack(); 
  } 
    
  function prevTrack() { 
   
    if (track_index > 0) 
      track_index -= 1; 
    else track_index = track_list.length; 
      
   
    loadTrack(track_index); 
    playTrack(); 
  } 
  function seekTo() { 
   
    seekto = curr_track.duration * (seek_slider.value / 100); 
    
    curr_track.currentTime = seekto; 
  } 
    
  function setVolume() { 
    
    curr_track.volume = volume_slider.value / 100; 
  } 
    
  function seekUpdate() { 
    let seekPosition = 0; 
    
   
    if (!isNaN(curr_track.duration)) { 
      seekPosition = curr_track.currentTime * (100 / curr_track.duration); 
      seek_slider.value = seekPosition; 
    
  
      let currentMinutes = Math.floor(curr_track.currentTime / 60); 
      let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60); 
      let durationMinutes = Math.floor(curr_track.duration / 60); 
      let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60); 
    
  
      if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; } 
      if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; } 
      if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; } 
      if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; } 
    
     
      curr_time.textContent = currentMinutes + ":" + currentSeconds; 
      total_duration.textContent = durationMinutes + ":" + durationSeconds; 
    } 
  } 
  loadTrack(track_index); 

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


/* -------------------------------------------------------------------------------------------------------- */

function myFunction() {
  // Declare variables
  let input, filter, ul, li, a,  txtValue;
  input = document.querySelector('#myInput');
  filter = input.value.toUpperCase();
  ul = document.querySelector("#myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for ( let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */
