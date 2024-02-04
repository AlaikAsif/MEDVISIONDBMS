//login popup

var loginButton = document.getElementById('loginbtn');
var closeButton = document.getElementById('closepopup');
var popup = document.getElementById('popup');

loginButton.addEventListener('click', function() {
    popup.style.opacity = '0';
    popup.style.transform = 'translateY(-100%)';
    popup.style.display = 'flex';
    setTimeout(() => {
        popup.style.opacity = '1';
        popup.style.transform = 'translateY(0)';
    }, 400);
});
console.log("login",loginButton,closeButton,popup);

closeButton.addEventListener('click', function() {
    popup.style.opacity = '0';
    popup.style.transform = 'translateY(-100%)';
    setTimeout(() => {
        popup.style.display = 'none';
        popup.style.opacity = '1';
        popup.style.transform = 'translateY(0)';
    }, 1200);
}); 


//signup



document.addEventListener('DOMContentLoaded', function () {
    const signupLink = document.querySelector('.signup-link');
    const layer = document.getElementById('layer');
    const signupSide = document.getElementById('signup-side');
    const loginSide = document.getElementById('login-side');
    const closepopup = document.getElementById('closepopup');

    let layerVisible = false;

    signupLink.addEventListener('click', function () {
        updateLayerState();

        layerVisible = !layerVisible;

        if (layerVisible) {
            signupLink.textContent = 'Already have an account?';
            if (window.matchMedia("(max-width: 768px)").matches) {
                layer.style.transform = 'translateX(100%)';
            } else {
                layer.style.transform = 'translateX(82%)';
            }
            hideSide(loginSide);
            showSide(signupSide);
        } else {
            signupLink.textContent = 'Click here to sign up';
            layer.style.transform = 'none';
            hideSide(signupSide);
            showSide(loginSide);
        }
    });

    function hideSide(side) {
        side.style.transition = 'opacity 1s';
        side.style.opacity = '0';
        side.style.pointerEvents = 'none';
    }

    function showSide(side) {
        side.style.transition = 'opacity 1s';
        side.style.opacity = '1';
        side.style.pointerEvents = 'initial';
    }

    function updateLayerState() {
        layer.classList.toggle('moverlayer', layerVisible);
        closepopup.classList.toggle('move-transition', layerVisible);
        closepopup.style.justifyContent = layerVisible ? 'flex-start' : 'flex-end';
    }
});
