const card_ativo = document.querySelector('#card_ativo');
const inpult = document.querySelector('#inpult');
const on = document.querySelector('#on');


// Gere um evento de clique para o botão, que adiciona um elemento de texto
on.addEventListener('click', function () {
    const valorInput = inpult.value; // Obtém o valor do input
    if (valorInput.trim() !== '') {
        const element = document.createElement('div');
       element.classList.add('style_card_ativo')
        element.innerHTML = valorInput
        card_ativo.appendChild(element);
        element.addEventListener('click',function (elemt) {
            card_ativo.removeChild(elemt.target);
            console.log(elemt.target)
        })
    } else {
        alert('Digite algo no input!')
    }
});