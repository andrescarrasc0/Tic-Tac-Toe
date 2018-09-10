var clickCount = document.getElementsByClassName("row div"),
    count = 0;
clickCount.onclick = function () {
    count += 1;
};

let xo = document.querySelectorAll('.row div');

xo.forEach(function (xo) {
    xo.addEventListener("click", xoClicked)
});

function xoClicked(e) {
    if (count % 2 == 0) {
        e.target.textContent = 'X';
    } else {
        e.target.textContent = 'O';
    }
}


