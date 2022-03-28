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

// Mobile Navbar and Dropdown
const mobileNavbar = document.querySelector('#mobile-nav');
const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const mobileLink = document.querySelectorAll('.mobile-link');

openButton.addEventListener('click', ()=> {
    mobileNavbar.classList.add('active');
})

closeButton.addEventListener('click', ()=> {
    mobileNavbar.classList.remove('active');
})

mobileLink.forEach((m) => m.addEventListener('click', ()=> {
    mobileNavbar.classList.remove('active');
}))


dropdownLink[2].addEventListener('click', ()=> {
    navArrow[2].classList.toggle('arrow-active');
    navDropdown[2].classList.toggle('dropdown-active');

    // Closes other dropdowns if open
    navArrow[3].classList.remove('arrow-active');
    navDropdown[3].classList.remove('dropdown-active');
});

dropdownLink[3].addEventListener('click', ()=> {
    navArrow[3].classList.toggle('arrow-active');
    navDropdown[3].classList.toggle('dropdown-active');

    // Closes other dropdowns if open
    navArrow[2].classList.remove('arrow-active');
    navDropdown[2].classList.remove('dropdown-active');
});

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

// ---------------------------------------------------------------------------->

// Support chatbot
const chatbot = document.querySelector('#chatbot');
const chatCloseButton = document.querySelector('.chat-close-button');


supportButton.addEventListener('click', ()=> {
    chatbot.classList.add('active');
})

chatCloseButton.addEventListener('click', ()=> {
    chatbot.classList.remove('active');
});

// Chatbot messages
const messagesDisplay = document.querySelector('#chatbot-body');
const textArea = document.querySelector('#textbox');
const sendButton = document.querySelector('#send-button');



// AutoBot greetings message
let firstMessage = document.createElement('p');
let secondMessage = document.createElement('p');

firstMessage.innerHTML = "Hello!";
secondMessage.innerHTML = "How can I help you today?";
messagesDisplay.appendChild(firstMessage);
messagesDisplay.appendChild(secondMessage);


sendButton.addEventListener('click', ()=> {
    let newMessage = document.createElement('p');
    newMessage.innerHTML = textArea.value;
    messagesDisplay.appendChild(newMessage);
    textArea.value = ""


    newMessage.style.textAlign= "right";
    newMessage.style.background = "linear-gradient(to right, #f74033, #f7724a)";
    newMessage.style.color = "#fff";
    newMessage.style.margin = "0.5em 0 0.5em auto"


    let autBotMessage;
    switch(newMessage.innerHTML) {
        case "How are you?":
            autBotMessage = document.createElement('p');
            autBotMessage.innerHTML = "I am doing good thank you!";
            messagesDisplay.appendChild(autBotMessage);
        break;

        case "I need help":
            autBotMessage = document.createElement('p');
            autBotMessage.innerHTML = "Please tell me more about your issue.";
            messagesDisplay.appendChild(autBotMessage);
        break;

        case "How can I become a partner?":
            autBotMessage = document.createElement('p');
            autBotMessage.innerHTML = "To become a DoorDash partner, first you need to register your business using the form at the top of the page. We will send you an email to let you know if your business was approved or not.";
            messagesDisplay.appendChild(autBotMessage);
        break;

        case "The page is not working":
            autBotMessage = document.createElement('p');
            autBotMessage.innerHTML = "Try to reload the page or close and open this window again.";
            messagesDisplay.appendChild(autBotMessage);
        break;

        case "I can't find a link":
            autBotMessage = document.createElement('p');
            autBotMessage.innerHTML = "Links are located at the top of the page.";
            messagesDisplay.appendChild(autBotMessage);
        break;

        case "I want more info":
            autBotMessage = document.createElement('p');
            autBotMessage.innerHTML = "For more contact and more info about DoorDash click on the `COntact` link at the top of the page";
            messagesDisplay.appendChild(autBotMessage);
        break;

        case "Who can I contact?":
            autBotMessage = document.createElement('p');
            autBotMessage.innerHTML = "For more contact and more info about DoorDash click on the `COntact` link at the top of the page";
            messagesDisplay.appendChild(autBotMessage);
        break;

        case "It works!":
            autBotMessage = document.createElement('p');
            autBotMessage.innerHTML = "Awesome, is there anything else I can do you today?";
            messagesDisplay.appendChild(autBotMessage);
        break;

        case "I found it!":
            autBotMessage = document.createElement('p');
            autBotMessage.innerHTML = "Awesome, is there anything else I can do you today?";
            messagesDisplay.appendChild(autBotMessage);
        break;

        case "That is all":
            autBotMessage = document.createElement('p');
            autBotMessage.innerHTML = "Awesome";
            messagesDisplay.appendChild(autBotMessage);
        break;

        case "That is all, thank you!":
            autBotMessage = document.createElement('p');
            autBotMessage.innerHTML = "Awesome, have a great day!";
            messagesDisplay.appendChild(autBotMessage);
        break;

        case "Thank you!":
            autBotMessage = document.createElement('p');
            autBotMessage.innerHTML = "You are welcome!";
            messagesDisplay.appendChild(autBotMessage);
        break;

        case "Bye, thank you!":
            autBotMessage = document.createElement('p');
            autBotMessage.innerHTML = "My pleasure to help. Have a great day!";
            messagesDisplay.appendChild(autBotMessage);
        break;
    };

});

