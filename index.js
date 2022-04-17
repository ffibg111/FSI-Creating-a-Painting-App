/*
    // seeing details
    <div class="palette">
        <div class="color-choice" id="blue">■</div>
        <div class="color-choice" id="red">■</div>
        <div class="color-choice" id="yellow">■</div>
        <div class="color-choice" id="green">■</div>
    </div>
*/

let selectedColor = "blue"
let painting = document.querySelector('.painting')
const palette = document.querySelector('.palette');
let pixel = painting.querySelector('.pixel');


// BONUS Clear Button
// Will be continued
let button = document.createElement('button')
button.textContent = 'Clear';
document.body.append(button)

painting.addEventListener('click', function(e) {
    console.log('testing, testing, 123')
    console.log(e.target)
    e.target.style.backgroundColor = selectedColor

    palette.addEventListener('click', function(e) {
        console.log(e.target)
        console.log(e.target.getAttribute('id'))
        selectedColor = e.target.getAttribute('id')
    })

    // BONUS Clear Button
    // Event Listener
    button.addEventListener('click', function(e) {
        console.log(pixel)
    })
})



