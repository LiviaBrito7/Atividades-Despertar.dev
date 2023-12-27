// 1. Capture, armazene e manipule todos os elementos de classe "card".
// Modifique os estilos necessários nesses elementos para que fique
// semelhante a imagem.

const card = document.querySelectorAll('.card')
card.forEach(card => {
  card.setAttribute('id', 'card')
})

// 2. Capture, armazene e manipule todos os elementos de classe
// "titulo-card". Modifique os estilos necessários nesses elementos
// para que fique semelhante a imagem.

const tituloCard = document.querySelectorAll('.titulo-card')
tituloCard.forEach(tituloCard => {
    tituloCard.setAttribute('id', 'titulo-card')
})

// 3. Modifique o texto dos títulos nos cards para "Meu card".
tituloCard.forEach(tituloCard => {
    tituloCard.innerText = 'Meu Card'
})

// 4. Capture, armazene e manipule todos os elementos de classe
// "descricao-card". Modifique os estilos necessários nesses elementos
// para que fique semelhante a imagem.

const descricaoCard = document.querySelectorAll('.descricao-card')
descricaoCard.forEach(descricaoCard => {
    descricaoCard.setAttribute('id', 'descricao-card')
})

// 5. Modifique o texto das descrições nos cards para "Descrição
// modificada pelo JavaScript".

descricaoCard.forEach(descricaoCard => {
    descricaoCard.innerText = 'Descrição modificada pelo JavaScript'
})

// 6. Capture, armazene e manipule todos os elementos de classe
// "botao-editar". Modifique o estilo desses elementos para que fique
// semelhante a imagem.

const botaoEditar = document.querySelectorAll('.botao-editar')
botaoEditar.forEach(botaoEditar => {
    botaoEditar.setAttribute('id', 'botao-editar')
})

// 7. Capture, armazene e manipule todos os elementos de classe
// "botao-apagar". Modifique o estilo desses elementos para que fique
// semelhante a imagem.

const botaoApagar = document.querySelectorAll('.botao-apagar')
botaoApagar.forEach(botaoApagar => {
    botaoApagar.setAttribute('id', 'botao-apagar')
})

// 8. Adicione o atributo 'onclick' nos elementos de classe “botão-editar”.
// Ao clicar nesses elementos, deve chamar a função 'editarCard()'.
// Essa função deve mostrar um alerta com a mensagem "Clicou em
// Editar!".

botaoEditar.forEach(botaoEditar => {
    botaoEditar.setAttribute('onclick', 'editarCard()')
})

function editarCard() {
    alert('Clicou em editar.')
}

// 9. Adicione o atributo 'onclick' nos elementos de classe
// “botão-apagar”. Ao clicar nesses elementos deve chamar a função
// 'apagarCard()'. Essa função deve perguntar ao usuário se ele tem
// certeza da exclusão do card. Se o usuário confirmar a exclusão deve
// mostrar um alerta com a mensagem "Confirmado!", se não deve
// mostrar a mensagem "Cancelou!".

botaoApagar.forEach(botaoApagar => {
    botaoApagar.setAttribute('onclick', 'apagarCard()')
})

function apagarCard() {
    const confirmar = confirm('Você tem certeza?')
    confirmar? alert('Confirmado!') : alert('Cancelou!')
}