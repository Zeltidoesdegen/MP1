// Auto Switching Images function
function bannerSwitcher() {
  next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
  // finds the currently checked radio button or checkbox with the 
  // class "sec-1-input" and then selects the next sibling element with the same class 
  if (next.length) next.prop('checked', true);
  // checks if there is a next banner available If a next banner exists, 
  // it sets its "checked" property to true, making it the active banner.
  else $('.sec-1-input').first().prop('checked', true);
  // If there is no next banner available it rotates to the first banner
  // available which makes the looping possible
}

var bannerTimer = setInterval(bannerSwitcher, 5000);
// timer for the banner switch

$('nav .controls label').click(function() {
  clearInterval(bannerTimer);
  bannerTimer = setInterval(bannerSwitcher, 5000)
});

// End of Auto Switch function

// media query navbar
const menuButton = document.querySelector(".button-media")
const nav = document.querySelector(".nav")

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  // for activation of the navbar
  nav.classList.toggle("active");
  // closing of the navbar
});  

///// Anchor Smooth Scroll /////
//   $('.main-menu a, .learn-more-button a').click(function(e){
    
//     e.preventDefault();
        
//     var target = $(this).attr('href');
        
//     $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
//     return false;
//   });
