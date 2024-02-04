document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.getElementsByClassName('animate');
    Array.from(hiddenElements).forEach((el) => observer.observe(el));

    
});


document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('left-animate');
            } else {
                entry.target.classList.remove('left-animate');
            }
        });
    });

    const hiddenElements2 = document.getElementsByClassName('animate-left');
    Array.from(hiddenElements2).forEach((el) => observer.observe(el));

    
});

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('right-animate');
            } else {
                entry.target.classList.remove('right-animate');
            }
        });
    });

    const hiddenElements3 = document.getElementsByClassName('animate-right');
    Array.from(hiddenElements3).forEach((el) => observer.observe(el));

    
});