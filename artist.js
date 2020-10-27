function linkBorder(){
    let lborder = document.querySelectorAll(".mr-3")
    lborder[2].classList.remove("border1");
    lborder[1].classList.remove("border1");
    lborder[0].classList.add("border1");
}

function linkBorder2(){
    let lborder = document.querySelectorAll(".mr-3")
    lborder[0].classList.remove("border1");
    lborder[2].classList.remove("border1");
    lborder[1].classList.add("border1");
}
function linkBorder3(){
    let lborder = document.querySelectorAll(".mr-3")
    lborder[0].classList.remove("border1");
    lborder[1].classList.remove("border1");
    lborder[2].classList.add("border1");
}