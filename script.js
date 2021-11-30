let answer = document.querySelector('.ans');


document.querySelector('.question').addEventListener("click", presentation)

function presentation() {
    answer.classList.toggle('.ans-active')
}