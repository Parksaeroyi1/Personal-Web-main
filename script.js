// Array of image paths //
const images = ['images/russell.jpg', 'images/homers.png', 'images/rockpap.jpg'];

// Selects a random image from the array //
const randomImage = images[Math.floor(Math.random() * images.length)];

// Queries the image element and sets its source to the random image //
const randomProjectImg = document.querySelector(".random_image");
randomProjectImg.src = randomImage;

// JSON string containing profile information //
const jsonAbout = ` { 
    "title": "Elijah Suyat",
    "about": "I’m currently on my journey to becoming a software developer. Passionate about coding and eager to learn, I am open to new job opportunities where I can grow and contribute to exciting projects. During my free time I like to play sports. I play almost all the sports in the world.",
    "cover_image": "images/me.jpg"
}`;

// Parses the JSON string into an object //
const parsedAbout = JSON.parse(jsonAbout);

// Function to display the profile information on the webpage //
const displayAbout = () => {
    const aboutSection = document.querySelector('.about_me_content');

    // Sets the profile image source and alt text
    const profileImage = aboutSection.querySelector('.profile_image');
    profileImage.src = parsedAbout.cover_image;
    profileImage.alt = `Cover image of ${parsedAbout.title}`;

    // Sets the about text content
    const textAbout = aboutSection.querySelector('.text_about p');
    textAbout.innerHTML = parsedAbout.about;
};

// Calls the displayAbout function to update the profile information

displayAbout();

// Function to toggle the visibility of the "text_about" section

const myProfile = () => {
    let x = document.getElementsByClassName("text_about");
    if (x.length > 0) {
        if (x[0].style.display === "none") {
            x[0].style.display = "block";
        } else {
            x[0].style.display = "none";
        }
    }
};

// Queries the hamburger menu element and the navigation links container //

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.header_nav');

// Adds a click event listener to the hamburger menu to toggle the 'show' class on the navigation links //

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


// Pop up message for redericting to projects //

const projectLinks = document.querySelectorAll('.project_link')

projectLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        alert('You are being redirected!');
        window.location = link.href;
    })
})

// Feedback //

// Toggle visibility of feedback modal //
const toggle_visibility = () => {
    const feedback = document.getElementById('feedback-main');
    const overlay = document.getElementById('overlay');
    const tally = document.querySelector('.tally')
    if (tally) {
        const likes = window.localStorage.getItem("likes") || 0
        const dislikes = window.localStorage.getItem("dislikes") || 0
        tally.innerHTML = "likes " + likes + " dislikes " + dislikes;
    }
    if (feedback && overlay) {
        if (feedback.style.display === 'block') {
            feedback.style.display = 'none';
            overlay.style.display = 'none';
        } else {
            feedback.style.display = 'block';
            overlay.style.display = 'block';
        }
    } else {
        console.error('Element not found');
    } 
};

// Handle Thumbs Up click
const handleThumbsUp = () => {
    const currentLikes = window.localStorage.getItem("likes");
    if (currentLikes) {
        window.localStorage.setItem("likes", parseInt (currentLikes) + 1);
    }
    else {
        window.localStorage.setItem("likes", 1);
    }
    toggle_visibility();  // Hide feedback after voting
}

// Handle Thumbs Down click
const handleThumbsDown = () => {
    const currentDisLikes = window.localStorage.getItem("dislikes");
    if (currentDisLikes) {
        window.localStorage.setItem("dislikes", parseInt (currentDisLikes) + 1);
    }
    else {
        window.localStorage.setItem("dislikes", 1);
    }

    toggle_visibility();  // Hide feedback after voting
}


// i would like to create a server in the future where data of the feedback is stored

/*fetch('http://127.0.0.1:8000/bio').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    console.log(data);
  }).catch(err => {
    // Do something for an error here
  });
  */