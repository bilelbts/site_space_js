const resultppl = document.querySelector('#resultppl')
const resultvehicul = document.querySelector('#vehiculCount')
const resultplanet = document.querySelector('#planete')
let resultdata = 1;
function result() {
    let url = "https://swapi.py4e.com/api/people/";
    let url1 = "https://swapi.py4e.com/api/starships/";
    let url2 = "https://swapi.py4e.com/api/planets/";
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            resultppl.innerHTML = data.count

        })
    fetch(url1)
        .then((response) => response.json())
        .then((data) => {
            resultvehicul.innerHTML = data.count
        })
    fetch(url2)
        .then((response) => response.json())
        .then((data) => {
            resultplanet.innerHTML = data.count

        })

}
result()