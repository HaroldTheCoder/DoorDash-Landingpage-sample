// Navbar
const navbar = document.querySelector('#top-header');
const navDropdown = document.querySelectorAll('.nav-dropdown');
const navArrow = document.querySelectorAll('.fa-chevron-down');
const dropdownLink = document.querySelectorAll('.dropdown-open');
const mainPage = document.querySelector('#page-content');

// Dropdown Functions
dropdownLink[0].addEventListener('click', ()=> {
    navArrow[0].classList.toggle('arrow-active');
    navDropdown[0].classList.toggle('dropdown-active');

    // Closes other dropdowns if open
        navArrow[1].classList.remove('arrow-active');
        navDropdown[1].classList.remove('dropdown-active');
});


dropdownLink[1].addEventListener('click', ()=> {
    navArrow[1].classList.toggle('arrow-active');
    navDropdown[1].classList.toggle('dropdown-active');

    // Closes other dropdowns if open
    navArrow[0].classList.remove('arrow-active');
    navDropdown[0].classList.remove('dropdown-active');
});

mainPage.addEventListener('click', ()=> {
    navArrow.forEach((n) => n.classList.remove('arrow-active'));
    navDropdown.forEach((d) => d.classList.remove('dropdown-active'));
})

// ---------------------------------------------------------------------------->

// On Window Scroll Functions
const supportButton = document.querySelector('#support-button-container');
window.addEventListener('scroll', ()=> {

    // Fixed Navbar
    if(window.scrollY > 0) {
        navbar.classList.add('fixed-navbar');
        supportButton.classList.add('fade-in');

    } else {
        navbar.classList.remove('fixed-navbar');
    }
})

// ---------------------------------------------------------------------------->

// Form Validation 
const form = document.querySelector('#main-form');
const businessName = document.querySelector('#business-name');
const businessEmail = document.querySelector('#business-email');
const businessAddress = document.querySelector('#business-address');
const businessType = document.querySelector('#business-type');
const invalidMessage = document.querySelectorAll('.invalid-message');
const pattern = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';

form.addEventListener('submit', (e)=> {

    // Business Name Validation Check
    if(businessName.value.length <= 1) {
        e.preventDefault()
        invalidMessage[0].style.display = 'block';
        invalidMessage[0].style.color = "hsl(0, 100%, 50%)";
        businessName.style.border = "1.5px solid hsl(0, 100%, 50%)";
        businessName.style.backgroundColor = "#ffe9e9";
    } 
    else if (businessName.value.length > 4) {
        invalidMessage[0].style.display = 'none';
        businessName.style.backgroundColor = "#fff";
        businessName.style.border = "1.5px solid #C4C4C4";
    }
    else {
        invalidMessage[0].style.display = 'none';
    }

    // Business Email Validation Check
	if(businessEmail.value.match(pattern)) { 
		invalidMessage[1].style.display = "none";
        businessName.style.backgroundColor = "#fff";
        businessName.style.border = "1.5px solid #C4C4C4";
		
	}  
    else {
		e.preventDefault()
        invalidMessage[1].style.display = 'block';
        invalidMessage[1].style.color = "hsl(0, 100%, 50%)";
        businessEmail.style.border = "1.5px solid hsl(0, 100%, 50%)";
        businessEmail.style.backgroundColor = "#ffe9e9";
	}

    // Business Address Validation Check
    if(businessAddress.value.length <= 1) {
        e.preventDefault()
        invalidMessage[2].style.display = 'block';
        invalidMessage[2].style.color = "hsl(0, 100%, 50%)";
        businessAddress.style.border = "1.5px solid hsl(0, 100%, 50%)";
        businessAddress.style.backgroundColor = "#ffe9e9";
    } 
    else if (businessAddress.value.length > 4) {
        invalidMessage[2].style.display = 'none';
        businessAddress.style.backgroundColor = "#fff";
        businessAddress.style.border = "1.5px solid #C4C4C4";   
    }
     else {
        invalidMessage[2].style.display = 'none';
    }

    // Business Type Validation Check
    if(businessType[0].selected) {
        e.preventDefault()
        invalidMessage[3].style.display = 'block';
        invalidMessage[3].style.color = "hsl(0, 100%, 50%)";
        businessType.style.border = "1.5px solid hsl(0, 100%, 50%)";
        businessType.style.backgroundColor = "#ffe9e9";
    } 
    else {
        invalidMessage[3].style.display = 'none';
        businessType.style.backgroundColor = "#fff";
        businessType.style.border = "1.5px solid #C4C4C4";
    }
});
