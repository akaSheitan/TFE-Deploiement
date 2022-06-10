// import axios from "axios"


// axios({
//     method: "get",
//     url: "http://localhost:8080/api/widget/findall",
//     // url: "https://www.emuix.com/api/auth/signin",
// })
//     .then((response) => {
//         console.log("res 200 from js file : ", response.data);
//     })
//     .catch((response) => {
//         console.log("res error from js file: ", response.response.data.message);
//     });
function getWeather() {
    const result = fetch('https://api.openweathermap.org/data/2.5/weather?q=Mons&appid=60e5717b58f0eac31b0b6478cffd766e&units=metric&lang=fr',
        {
            Method: 'GET',
        })
        .then(response => {
            console.log("res 200 from js file : ", response);
            const data = response.json();
            console.log("Data : ", data);
            return data;
        })

    return result;
}

getWeather()

console.log("Change");