//Function to get the size of the clients device
function checksize(){
    var x = document.body.clientWidth;
    return x;
}


//Function to smooth scroll to certain section or place
function scrollfunc(place){

    if(place==1 && checksize() < 992){
        window.scrollTo(0, 10);
    }
    else if(place==1 && 992 < checksize()){
        window.scrollTo(0, 10);
    }

    else if(place==2 && checksize() < 992){
        window.scrollTo(0, 690);
    }
    else if(place==2 && 992 < checksize()){
        window.scrollTo(0, 690);
    }

    else if(place==3 && checksize() < 992){
        window.scrollTo(0, 1700);
    }
    else if(place==3 && 992 < checksize()){
        window.scrollTo(0, 1000);
    }

}


//Function to turn the footer on dark colors
function dark_footer(){
    var fuuter = document.getElementById("contact");
    fuuter.style.background = "#1d1c1c";
    fuuter.style.color = "#ffffff";
}

//Function to turn the footer on light colors
function white_footer(){
    var fuuter = document.getElementById("contact");
    fuuter.style.background = "#ffffff";
    fuuter.style.color = "#1d1c1c";
    setTimeout(dark_footer,400)
}


