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

                    return false;
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
        const hamburger = DOC.querySelector('#hamburger');
        const navUl = DOC.querySelector('#navul');
        const header = DOC.querySelector('#header');

        let navUlIsActive = false;

        const init = () => {
            if (WIN.screen.width < 768) {
                DOC.onclick = DOC.ontouch = (e) => {
                    if (e.target.closest('#burger')) {
                        if (!navUlIsActive) {
                            navUl.classList.add('visible');
                            header.classList.add('active');
                            hamburger.classList.add('on');
                            navUlIsActive = true;
                        }
                        else {
                            navUl.classList.remove('visible');
                            header.classList.remove('active');
                            hamburger.classList.remove('on');
                            navUlIsActive = false;
                        }
                    }
                    else if (
                        (!e.target.closest('#burger') && !e.target.closest('#nav')) ||
                        e.target.classList.contains('subnav__link')
                    ) {
                        navUl.classList.remove('visible');
                        header.classList.remove('active');
                        hamburger.classList.remove('on');
                        navUlIsActive = false;
                    }
                }
            }
        }

        init();
        WIN.onresize = init;
    });
})(document, window);

// learn more main - not supported in Safari
// ((DOC, WIN) => {
//     DOC.addEventListener('DOMContentLoaded', () => {
//         const btn = DOC.querySelector('#indexlearnmore');
//         const content = DOC.querySelector('#indexcontent');

//         btn.onclick = () => {
//             content.scrollIntoView({block: "start", behavior: "smooth"});
//         }

//     });
// })(document, window);

// learn more main
$(function() {
    const $indexlearnmore = $("#indexlearnmore");
    const $indexcontent = $("#indexcontent");
    const indexcontentTopValue = $indexcontent.offset().top;

    $indexlearnmore.click(function() {
        $('html, body').animate({
            scrollTop: indexcontentTopValue
        }, 1500);
    });
});
