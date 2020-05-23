let btn = document.querySelector('button[type="submit"]'),
    numbForm = document.querySelectorAll('input[id="number"]'),
    form = document.querySelector('form');


window.addEventListener('DOMContentLoaded', function () {
    btn.addEventListener('click', function (event) {
        event.preventDefault();

        function insertAfter(el, referenceNode) {
            referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
        }
        let input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Ваш номер телефона..';
        insertAfter(input, btn);
    });
});