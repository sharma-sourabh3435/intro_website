window.onload = function() {
    // Show 'Hi,' after the page loads
    document.getElementById('hi').style.opacity = 1;

    // Show 'Welcome' after 1 second
    setTimeout(function() {
        document.getElementById('welcome').style.opacity = 1;
    }, 1000);

    // Show 'This is my portfolio' after 2 seconds
    setTimeout(function() {
        document.getElementById('portfolio').style.opacity = 1;
    }, 2000);

    // Hide the animation and show main content after 4 seconds
    setTimeout(function() {
        document.getElementById('animation-container').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 4000);
};

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
