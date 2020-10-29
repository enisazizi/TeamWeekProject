function linkBorder(){
    let lborder = document.querySelectorAll(".mr-3")
    lborder[2].classList.remove("border1");
    lborder[1].classList.remove("border1");
    lborder[0].classList.add("border1");
    const x=document.querySelector(".hiddenorshow")
    x.style.display="unset";
   
    const z = document.querySelector(".Relatedartist")
    z.style.display="none";
    const xy = document.querySelector(".AboutQueen")
    xy.style.display="none";

}

function linkBorder2(){
    let lborder = document.querySelectorAll(".mr-3")
    lborder[0].classList.remove("border1");
    lborder[2].classList.remove("border1");
    lborder[1].classList.add("border1");
    const x=document.querySelector(".hiddenorshow")
     x.style.display="none";

    const y = document.querySelector(".AboutQueen")
    y.style.display="none";
        
       const z = document.querySelector(".Relatedartist")
       z.style.display="unset";

    }


function linkBorder3(){
    let lborder = document.querySelectorAll(".mr-3")
    lborder[0].classList.remove("border1");
    lborder[1].classList.remove("border1");
    lborder[2].classList.add("border1");
    const z= document.querySelector(".AboutQueen");
    z.style.display="unset";

    const x=document.querySelector(".hiddenorshow")
    x.style.display="none";

    const y = document.querySelector(".Relatedartist")
       y.style.display="none";


        
}
