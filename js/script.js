"use strict";

function wordsInWrapper(elem) {
    var elText = elem.innerText,
        str = '',
        elList = elText.split(' ');
    elem.innerText = '';
    elList.forEach(function(el) {
        str = str + "<span class=\"word-wrapper\"><span class=\"word-wrapper__inner\">".concat(el + '&nbsp;', "</span></span>");
    });
    elem.innerHTML = str;
}

function showElementsWhenScroll(selectors, viewPosition) {
    selectors.forEach(function(selector) {
        document.querySelectorAll(selector).forEach(function(el) {
            var elemPosition = window.pageYOffset + el.getBoundingClientRect().top;

            if (viewPosition > elemPosition) {
                el.classList.add('is-show');
            }
        });
    });
}

function showImgWhenScroll(unvis, viewPosition) {
    unvis.forEach(function(selector) {
        document.querySelectorAll(selector).forEach(function(el) {
            var elemPosition = window.pageYOffset + el.getBoundingClientRect().top;

            if (viewPosition > elemPosition) {
                el.classList.add('is-show');
            }
        });
    });
}

var selectors = ['.first-block h1', '.first-block__element h3', '.first-block__element p', '.middle-block__text h3', '.middle-block__text p', 'footer h2'],
    unvis = ['.first-block__element img', '.middle-block__button', '.middle-block__broshure'];
selectors.forEach(function(selector) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function(el) {
        wordsInWrapper(el);
    });
});
document.addEventListener('scroll', function() {
    var viewPos = window.pageYOffset + document.documentElement.clientHeight;
    showElementsWhenScroll(selectors, viewPos);
    showImgWhenScroll(unvis, viewPos);
});
document.addEventListener('DOMContentLoaded', function() {
    var viewPos = window.pageYOffset + document.documentElement.clientHeight;
    showElementsWhenScroll(selectors, viewPos);
    showImgWhenScroll(unvis, viewPos);
});
//# sourceMappingURL=script.js.map