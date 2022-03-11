
function scrollfunc(xcord,ycord){
    window.scrollTo(xcord,ycord);
    return null;
}

function dark_footer(){
    var fuuter = document.getElementById("contact");
    fuuter.style.background = "#1d1c1c";
    fuuter.style.color = "#ffffff";
}

function white_footer(){
    var fuuter = document.getElementById("contact");
    fuuter.style.background = "#ffffff";
    fuuter.style.color = "#1d1c1c";
    setTimeout(dark_footer,400)
}


