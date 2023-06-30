import throttle from 'lodash.throttle';



const form = document.querySelector('.feedback-form')
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = "feedback-form-state";


form.addEventListener('submit', onFormSubmit );
email.addEventListener('input', throttle(onFormInput, 500));
message.addEventListener('input', throttle(onFormInput, 500))
populateForm();


function onFormInput(event) {
    const formData = {
        email: email.value,
        message: message.value,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}


function onFormSubmit(event) {
    event.preventDefault();  
    const consoleObj = localStorage.getItem(STORAGE_KEY);
    const parceConsoleMsg = JSON.parse(consoleObj)
    if (parceConsoleMsg) {
        console.log(parceConsoleMsg);
    }  
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
};


function populateForm() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    const parceSaveMess = JSON.parse(saveMessage);
    if (parceSaveMess) {
        email.value = parceSaveMess.email;
        message.value = parceSaveMess.message
    }
};
