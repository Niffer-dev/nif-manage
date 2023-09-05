$(".testimonies-body").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    margin: 50,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
      },
      700: {
        items: 2,
        nav: true,
        loop: true,
      },
      1000: {
          items: 3,
          nav: true,
          loop: true,
        }
    },
  });

const openMenu = document.querySelector(".ri-menu-line")
const closeMenu = document.querySelector(".ri-close-fill")
const navMenu = document.querySelector("nav ul")
const navLinks = document.querySelectorAll("nav ul li")

console.log(navLinks)

openMenu.addEventListener("click", function(){
    navMenu.style.top = "35%"
    openMenu.style.display = "none"
    closeMenu.style.display = "block"
})

function closeNav(){
  navMenu.style.top = "-35%"
  closeMenu.style.display = "none"
  openMenu.style.display = "block"
}

closeMenu.addEventListener("click", function(){
    closeNav()
})

navLinks.forEach(function(navLink){
  navLink.addEventListener("click", function(){
    closeNav()
  })
})


  