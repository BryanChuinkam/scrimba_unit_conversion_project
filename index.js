/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let headerInput = document.getElementById("header-input")
const inputbtn = document.getElementById("header-btn")
const lengthParagraph = document.getElementById("length-para")
const volumeParagraph = document.getElementById("volume-para")
const massParagraph = document.getElementById("mass-para")

function toggleMode() {

  const mainElement = document.getElementById('main');
  const iconElement = document.getElementById('mode-icon');

  mainElement.classList.toggle('dark-mode');

  // Toggle the FontAwesome icon class
  if (mainElement.classList.contains('dark-mode')) {
    iconElement.classList.remove('fa-sun');
    iconElement.classList.add('fa-moon');
  } else {
    iconElement.classList.remove('fa-moon');
    iconElement.classList.add('fa-sun');
  }

}


inputbtn.addEventListener("click", function(){
  
  const inputValue = Number(headerInput.value)

  const lengthText = `${inputValue} meters =  ${(inputValue * 3.281).toFixed(3)} feet 
                | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`
  
  const volumeText = `${inputValue} liters =  ${(inputValue *  0.264).toFixed(3)} gallons 
                | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters`

  const massText = `${inputValue} kilos =  ${(inputValue * 2.204).toFixed(3)} pounds 
                | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos`
  
  lengthParagraph.textContent = lengthText
  volumeParagraph.textContent = volumeText
  massParagraph.textContent = massText

}
)