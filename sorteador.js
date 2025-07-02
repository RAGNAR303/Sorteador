function generateNumber() {

    const numbermin = Math.ceil(document.querySelector('.initial-value').value)
    const numbermax = Math.floor(document.querySelector('.final-value').value)
     document.querySelector('.result')

if (numbermax > numbermin) {
     var result = Math.floor(Math.random() * (numbermax - numbermin + 1)) + numbermin;
    document.querySelector('.result').innerHTML = result

}else{
    alert('O valor minimo tem ser Menor que valor máximo ')
}
}

function resetNumber() {
    location.reload()
}