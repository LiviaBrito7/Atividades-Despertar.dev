let click = 0
const text = document.querySelector('h1')

function increment() {
    text.innerHTML = `O contador está com <span>0</span> cliques.`
    const change = document.querySelector('span')
    change.innerText = click += 1
}

function reset() {
    text.innerText = ''
    return click = 0
}