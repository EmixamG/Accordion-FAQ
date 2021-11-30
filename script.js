let answer1 = document.querySelectorAll('.ans1');


document.querySelectorAll('.question1').addEventListener("click", presentation)

function presentation() {
    answer1.classList.toggle('.ans-active')
}

presentation()