const form = document.querySelector('form');
const inputName = document.querySelector('#name');
const cost = document.querySelector('#cost');
const error = document.querySelector('#error');


form.addEventListener('submit', (e) => {

    e.preventDefault();
    if (inputName.value && cost.value) {

        const item = {
            name: inputName.value,
            cost: parseInt(cost.value)
        };

        db.collection('expenses').add(item).then(res => {
            inputName.value = "";
            cost.value = "";
            error.textContent = "";
        })


    } else {

        error.textContent = 'please enter values before submitting'
    }



})