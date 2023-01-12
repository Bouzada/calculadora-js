const main = document.querySelector('main')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const light = document.getElementById('themeSwitcher')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
  charKeyBtn.addEventListener('click', function() {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

document.getElementById('clear').addEventListener('click', function(){
  input.value = ' '
  input.focus()
})

input.addEventListener('keydown', function(ev){
  ev.preventDefault()

  if(allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if(ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
  }
  if(ev.key === 'Enter') {
    calculate()
  }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')

  const result = eval(input.value)

  resultInput.value = result
  resultInput.classList.remove('error')
}

document.getElementById('copyToClipboard').addEventListener('click', function(ev) {
  const button = ev.currentTarget
  
  if(button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = 'copy'
    button.classList.remove('success')
  }
})

document.getElementById('themeSwitcher').addEventListener('click', function() {
  if(main.dataset.theme === 'dark') {
    document.body.style.backgroundColor = '#f1f5f9'
    document.body.style.color = '#212529'
    light.style.color = '#212529'
    light.style.backgroundColor = '#f1f5f9'
    main.dataset.theme = 'light'
  } else {
    document.body.style.backgroundColor = '#212529'
    document.body.style.color = '#f1f5f9'
    main.dataset.theme = 'dark'
  }
})