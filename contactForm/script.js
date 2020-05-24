let btn = document.querySelector('button[type="submit"]'),
    numbForm = document.querySelector('input[id="number"]'),
    form = document.querySelector('form'),
    fullName = form.querySelector('input[id="name"]'),
    comment = form.querySelector('textarea[id="subject"]'),
    send = form.querySelector('input[id="send"]');



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

    class Person {
        constructor(fullName, number, comment) {
            this.fullName = fullName;
            this.number = number;
            this.comment = comment;
        }
        send() {

        }
    }


    const defaultPerson = new Person('Oleg', 3753333361812, 'hello');

    function sendForm() {
        fullName.value = defaultPerson.fullName;
        numbForm.value = '+' + defaultPerson.number;
        comment.value = defaultPerson.comment;
        defaultPerson.send();
    }

    send.addEventListener('click', () => {
        sendForm();
    });


});