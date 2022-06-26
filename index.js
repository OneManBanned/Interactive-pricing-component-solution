let cost = document.querySelector('#amount')
let views = document.querySelector('#pageviews')
let range = document.querySelector('#slider')
let toggle = document.querySelector('#switch')

window.addEventListener('load', displayContent)
toggle.addEventListener('change', togglecheck)
toggle.addEventListener('change', displayContent)
range.addEventListener('change', displayContent)
range.addEventListener('change', rangeColor)

let one
let two
let three
let four
let five

togglecheck()

function togglecheck() {
    if (toggle.checked === false) {
        one = 8
        two = 12
        three = 16
        four = 24
        five = 36
    } else if (toggle.checked === true) {
        one = 6
        two = 8
        three = 12
        four = 18
        five = 27
    }
}



function displayContent() {

    let rangeInt = parseInt(range.value)

    if (rangeInt >= 0 && rangeInt <= 20) {
        range.value = '15'
        cost.innerText = `$${one}.00`
        views.innerHTML = '10K PAGEVIEWS'
    }
    if (rangeInt > 20 && rangeInt <= 40) {
        range.value = '35'
        cost.innerText = `$${two}.00`
        views.innerHTML = '50K PAGEVIEWS'
    }
    if (rangeInt > 40 && rangeInt <= 60) {
        range.value = '50'
        cost.innerText = `$${three}.00`
        views.innerHTML = '100K PAGEVIEWS'
    }
    if (rangeInt > 60 && rangeInt <= 80) {
        range.value = '75'
        cost.innerText = `$${four}.00`
        views.innerHTML = '500K PAGEVIEWS'
    }
    if (rangeInt > 80 && rangeInt <= 100) {
        range.value = '100'
        cost.innerText = `$${five}.00`
        views.innerHTML = '1M PAGEVIEWS'
        range.style.background = 'linear-gradient(90deg, hsl(174, 77%, 80%) 100%, hsl(174, 77%, 80%) 100%)';;
    }
}

function rangeColor() {
    var x = range.value;
    if (x == 100) {

    } else {
        var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '%, hsl(224, 65%, 95%)' + x + '%)';
        range.style.background = color;
    }
}

