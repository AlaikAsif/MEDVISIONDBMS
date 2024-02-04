var abouts = document.getElementsByClassName('about-button');
var about = abouts[0];

about.addEventListener('click', function() {
    var link = '#';
    window.location.href = link;
});


var explores = document.getElementsByClassName('explore-button');
var explore = explores[0];

explore.addEventListener('click', function (event) {
    event.preventDefault();

    var targetSection = document.querySelector('#body-one');
    if (targetSection) {
        var scrollOptions = {
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest', 
        };
        targetSection.scrollIntoView(scrollOptions);
    }
});









