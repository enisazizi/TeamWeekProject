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
libraryNav[4].addEventListener('click', function(){
    librarySlider.style.marginLeft = '-400%'
})
