let card = document.getElementById('card')
let load = document.getElementById('load')
let over = document.querySelector('.overlay')

function searchTemp(city) {
    let request = new XMLHttpRequest()
    
    request.addEventListener('readystatechange', () => {
        load.classList.remove('hidden')
        over.classList.remove('hidden')

        if (request.readyState == 4) {
            console.log(request.responseText)
            let data = JSON.parse(request.responseText)

            console.log(data);
            load.classList.add('hidden')
            over.classList.add('hidden')
            
            let temp = Math.floor(data.main.temp)
            card.innerHTML =
            `<img class='img' src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' />
            <h1>Temperature</h1>
            <h2>${data.name}</h2>
            <h1>${temp}℃</h1>
            `
        }
    })
    
    request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4a1cd1aaa9f9cc6b95656c4275283897&units=metric`)
    request.send()
}
