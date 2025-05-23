/*  =========================================toggle style switcher===========================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("mouseover", ()  => {
    document.querySelector(".style-switcher").classList.toggle("open");
}) 

//hide style switcher on scroll
window.addEventListener("scroll",() => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/*  =========================================theme colors===========================*/

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
/*  =========================================theme light and dark mode===========================*/
const dayNiight = document.querySelector(".day-night");
dayNiight.addEventListener("click", () => {
    dayNiight.querySelector("i").classList.toggle("fa-sun");
    dayNiight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>  {
    if(document.body.classList.contains("dark"))
    {
        dayNiight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNiight.querySelector("i").classList.add("fa-moon");
    }
})