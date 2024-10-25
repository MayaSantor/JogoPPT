const optionImages = document.querySelectorAll('.options-image')
const container = document.querySelector('.container')
const resultText = document.querySelector('.result-text')
const userResult = document.querySelector('.user-result')
const computerResult = document.querySelector('.computer-result img')

const computerSrcImg = ['img/pedra.png', 'img/papel.png', 'img/tesoura.png']

function handleOptionClick(event) {
    const clickedImage = event.currentTarget

    container.classList.add("start")
    resultText.innerHTML = "..."

    setTimeout(() => {
        container.classList.remove("start")

        const randomNumber = Math.floor(Math.random() * computerSrcImg.length)
        computerResult.src = computerSrcImg[randomNumber]

        console.log(randomNumber)


        resultText.innerHTML = "X ganhou"

    }, 2000);
}


optionImages.forEach(img => {
    img.addEventListener("click", handleOptionClick)
})