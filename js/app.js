const id = document.querySelector('#id');
const quote = document.querySelector(".quote")
const btn = document.querySelector('.dices')

function getAdvice() {
    const idValue = Math.ceil(Math.random() * 220);
    const apiBase = 'https://api.adviceslip.com/advice/' + idValue;
    const result = fetch(apiBase).then(response => response.json()).then(response => setData(response['slip'])).catch(getAdvice)
}

function setData(response) {
    id.innerHTML = response['id']
    quote.innerHTML = '"' + response['advice'] + '"'
}

btn.addEventListener("click", () => {
    setTimeout(function () {
        getAdvice();
    }, 500);
})
getAdvice(id, quote)