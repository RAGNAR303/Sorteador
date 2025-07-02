
function generateNumber() {
    const min = Math.ceil(document.querySelector('.initial-value').value)
    const max = Math.floor(document.querySelector('.final-value').value)

    const result = Math.floor(Math.random() * (max - min - 1) ) + min;

    
}