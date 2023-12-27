function phrase() {
    const h1 = document.querySelector('h1')
    const name = prompt('Digite seu nome')
    const text = `E aí ${name}! Você está deixando o seu site
    dinâmico.`;

    h1.innerText = text
}