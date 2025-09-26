let inp = document.getElementById('cityname')
let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
            let val = inp.value
            searchTemp(val)
        })