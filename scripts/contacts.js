document.addEventListener('DOMContentLoaded', () => {
    const telegramButton = document.querySelector('.telegramButton');
    telegramButton.addEventListener('click', () => {
        window.open('https://t.me/efraimus', '_blank');
    });

    const hhruButton = document.querySelector('.hhruButton');
    hhruButton.addEventListener('click', () => {
        window.open('https://krasnodar.hh.ru/applicant/resumes?hhtmFrom=main&hhtmFromLabel=header', '_blank');
    }); 
})