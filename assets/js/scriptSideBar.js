const openBar = document.getElementById("openBar");
const closeBar = document.getElementById("closeBar");
const sideBarWrap = document.querySelector(".sideBarWrap");

openBar.addEventListener("click", (e) => {
    e.stopPropagation();
    sideBarWrap.classList.add("sideBarOpen");
});
closeBar.addEventListener("click", (e) => {
    e.stopPropagation();
    sideBarWrap.classList.remove("sideBarOpen");
});

// close the sidebar when clicking outside of it

document.addEventListener("click", (e) => {
    if(!sideBarWrap.contains(e.target) && e.target !== openBar){
        sideBarWrap.classList.remove("sideBarOpen");
    }
})


// stopPropagation() is used to prevent a click or other event from affecting parent elements.
// Prevents clicks on the open/close buttons from closing the sidebar immediately.