// header
((DOC, WIN) => {
    DOC.addEventListener('DOMContentLoaded', () => {
        const header = DOC.querySelector('#header');

        function setHeaderStyle(e) {
            if (pageYOffset === 0) {
                header.classList.contains('fix') && (header.classList.remove('fix'));
            }
            else if (pageYOffset > 0) {
                !header.classList.contains('fix') && (header.classList.add('fix'));
            }
        }

        WIN.onscroll = setHeaderStyle;
        WIN.onload = setHeaderStyle;
    });
})(document, window);

// subnav
((DOC, WIN) => {
    DOC.addEventListener('DOMContentLoaded', () => {
        let activeSubnav = null;
        const linksWithSubnav = DOC.querySelectorAll('.nav__link--subnav');

        [...linksWithSubnav].forEach((el) => {
            let subnav = el.parentNode.querySelector('.subnav');

            if (WIN.screen.width > 767) {
                el.onmouseover = () => {
                    subnav.classList.add('active');
                    if (activeSubnav && activeSubnav !== subnav) {
                        activeSubnav.classList.remove('active');
                    }
                    activeSubnav = subnav;
                }
            }
            else {
                el.onclick = (e) => {
                    if (activeSubnav) {
                        activeSubnav.classList.remove('active');
                        activeSubnav = null;
                    }
                    else {
                        subnav.classList.add('active');
                        activeSubnav = subnav;
                    }
                }
            }

        });

        if (WIN.screen.width > 767) {
            DOC.onmousemove = (e) => {
                if (activeSubnav && !e.target.closest('.header')) {
                    activeSubnav.classList.remove('active');
                    activeSubnav = null;
                }
            }
        }
    });
})(document, window);

// burger
((DOC, WIN) => {
    DOC.addEventListener('DOMContentLoaded', () => {
        const burger = DOC.querySelector('#burger');
        const navUl = DOC.querySelector('#navul');
        const header = DOC.querySelector('#header');

        let navUlIsActive = false;

        const init = () => {
            if (WIN.screen.width < 768) {
                DOC.onclick = (e) => {
                    if (e.target.id === 'burger') {
                        if (!navUlIsActive) {
                            navUl.classList.add('visible');
                            header.classList.add('active');
                            navUlIsActive = true;
                        }
                        else {
                            navUl.classList.remove('visible');
                            header.classList.remove('active');
                            navUlIsActive = false;
                        }
                    }
                    else if (
                        (e.target.id !== 'burger' && !e.target.closest('#nav')) ||
                        e.target.classList.contains('subnav__link')
                    ) {
                        navUl.classList.remove('visible');
                        header.classList.remove('active');
                        navUlIsActive = false;
                    }
                }
            }
        }

        init();
        WIN.onresize = init;
    });
})(document, window);
