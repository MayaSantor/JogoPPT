const optionImages = document.querySelectorAll('.options-image')
const container = document.querySelector('.container')
const resultText = document.querySelector('.result-text')
const userResult = document.querySelector('.user-result img')
const computerResult = document.querySelector('.computer-result img')

const computerSrcImg = [
    'img/pedra.png', 
    'img/papel.png', 
    'img/tesoura.png'
]

const winner = {
    RR: "Empate",
    RP: "Computador",
    RS: "Você",
    PP: "Empate",
    PR: "Você",
    PS: "Computador",
    SS: "Empate",
    SR: "Computador",
    SP: "Você",
}

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const userIndex = Array.from(optionImages).indexOf(clickedImage)

    container.classList.add("start")
    resultText.innerHTML = "..."

    userResult.src = computerResult.src = 'img/pedra.png'

    setTimeout(() => {
        container.classList.remove("start")
        
        userResult.src = computerSrcImg[userIndex]

        const randomNumber = Math.floor(Math.random() * computerSrcImg.length)
        computerResult.src = computerSrcImg[randomNumber]

        const userValue = ['R', 'P', 'S'][userIndex]
        const computerValue = ['R', 'P', 'S'][randomNumber]
        const userComputerResult = userValue + computerValue
        const finalResult = winner[userComputerResult]

        console.log(finalResult)

        resultText.textContent = userValue === computerValue ? 'Empate' : finalResult + ' ganhou!'

    }, 2000);
}


optionImages.forEach(img => {
    img.addEventListener("click", handleOptionClick)
})