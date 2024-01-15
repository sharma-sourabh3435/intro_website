function updateProgrammingTime() {
    const startTime = new Date('2020-09-01');
    const currentTime = new Date();
    const differenceInSeconds = Math.floor((currentTime - startTime) / 1000);
    
    document.getElementById('codingTime').textContent = differenceInSeconds.toLocaleString('en-US');
}

// Update the time every second
setInterval(updateProgrammingTime, 1000);

// Initialize
updateProgrammingTime();
/*
window.onload = function() {
    // Show 'Hi,' after the page loads
    document.getElementById('hi').style.opacity = 1;

    // Show 'Welcome' after 1 second
    setTimeout(function() {
        document.getElementById('welcome').style.opacity = 1;
    }, 1000);

    // Show 'This is my portfolio' after 1 seconds
    setTimeout(function() {
        document.getElementById('portfolio').style.opacity = 1;
    }, 2000);

    // Hide the animation and show main content after 3 seconds
    setTimeout(function() {
        document.getElementById('animation-container').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000);
}; */

window.onload = function() {
    // Initial setup
    document.getElementById('hi').style.opacity = 0;
    document.getElementById('welcome').style.opacity = 0;
    document.getElementById('portfolio').style.opacity = 0;
    document.getElementById('main-content').style.opacity = 0;

    // Show 'Hi,' after the page loads
    setTimeout(function() {
        document.getElementById('hi').style.opacity = 1;
    }, 0);

    // Show 'Welcome' after 1 second
    setTimeout(function() {
        document.getElementById('welcome').style.opacity = 1;
    }, 1000);

    // Show 'This is my portfolio' after 2 seconds
    setTimeout(function() {
        document.getElementById('portfolio').style.opacity = 1;
    }, 2000);

    // Show main content after 3 seconds
    setTimeout(function() {
        document.getElementById('main-content').style.opacity = 1;
    }, 3000);

    // Hide 'Welcome' after 3.5 seconds (adjust timing as needed)
    setTimeout(function() {
        document.getElementById('animation-container').style.display = 'none';
    }, 3000);
};

