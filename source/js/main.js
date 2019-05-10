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

((DOC, WIN) => {
    DOC.addEventListener('DOMContentLoaded', () => {
        let activeSubnav = null;
        const linksWithSubnav = document.querySelectorAll('.nav__link--subnav');
        [...linksWithSubnav].forEach((el) => {
            let subnav = el.parentNode.querySelector('.subnav');
            el.onmouseover = () => {
                subnav.classList.add('active');
                if (activeSubnav && activeSubnav !== subnav) {
                    activeSubnav.classList.remove('active');
                }
                activeSubnav = subnav;
            }
        });

        DOC.onmousemove = (e) => {
            if (activeSubnav && !e.target.closest('.header')) {
                activeSubnav.classList.remove('active');
                activeSubnav = null;
            }
        }
    });
})(document, window);
