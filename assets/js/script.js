var contact_btn = document.querySelector("#ContactLink");
var footer = document.querySelector("#Contacts")


contact_btn.addEventListener("click", () => {
    setTimeout(()=>{
        footer.setAttribute("style","background-color:#cecece")
    },500)
    setTimeout(()=>{
        footer.setAttribute("style","")
    },900)
})