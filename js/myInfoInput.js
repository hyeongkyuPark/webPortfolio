(function () {
    const myInput = document.querySelector('#my-intro p');
    const SPEED = 100;
    let state = 'intro';
    let timeout;

    const hangleInput = function (elem, str, ms) {
        const strArr = Hangul.d(str, true);
        elem.innerHTML = '';

        function setTimeoutInput(strArr, index) {
            if (index === strArr.length) {
                return
            } else {
                return setTimeout(function () {
                    elem.innerHTML += Hangul.assemble(strArr[index]);
                    index += 1;
                    timeout = setTimeoutInput(strArr, index)
                }, ms);
            }
        }
        return setTimeoutInput(strArr, 0);
    }

    function init() {
        setTimeout(function () {
            timeout = hangleInput(myInput, '안녕하세요. 웹 프론트앤드를 희망하는 박형규입니다.', SPEED);

        }, 1000)

        window.addEventListener('scroll', function (e) {
            const scrollDistance = window.scrollY;
            const sectionList = document.querySelectorAll('section');
            const gnbList = document.querySelector('.gnb-list');
            const gnbItemList = gnbList.querySelectorAll('.gnb-item');

            if (!(state === gnbList.querySelector('.active').getAttribute('name'))) {
                clearTimeout(timeout);
                timeout = hangleInput(myInput, '안녕하세요. 웹 프론트앤드를 희망하는 박형규입니다.', SPEED);
            };

            sectionList.forEach(function (elem, index) {
                const elemY = window.pageYOffset + elem.getBoundingClientRect().top;

                if (elemY - 1 <= scrollDistance) {
                    state = elem.id;
                }
            });
        });
    };

    init();
})();