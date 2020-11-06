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
       
  ];

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

