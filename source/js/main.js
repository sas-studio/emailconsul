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
