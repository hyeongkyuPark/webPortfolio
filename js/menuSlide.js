(function() {
    const menuButton = document.querySelector('button.menu-btn');
    const menuTexts = menuButton.querySelectorAll('em');
    const gnb = document.querySelector('.gnb');
    const gnbList = gnb.querySelectorAll('ul');

    let isOpend = false;

    const styledToggle = function(elem, isOpend) {
        if(!isOpend) {
            elem.style.padding = '0 3rem';
        } else {
            elem.style.padding = '0 1.5rem';
        }
    }

    const slideText = function(elem, isOpend) {
        if(!elem) return;

        if(!isOpend) {
            elem.style.transform = 'translateY(-100%)';
        } else {
            elem.style.transform = 'translateY(0)';
        }
    }

    const menuToggleHandler = function(e) {
        styledToggle(this, isOpend);
        menuTexts.forEach(function(menuText) {
            slideText(menuText, isOpend);
        });
        slideText()
        isOpend = !isOpend;
    }
    
    const init = function() {
        menuButton.addEventListener('click', menuToggleHandler);
    }

    init();
})();