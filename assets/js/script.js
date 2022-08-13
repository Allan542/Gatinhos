const BASE_URL = 'https://api.thecatapi.com/v1/images/search/'
const botao = document.querySelector('button#change-cat')
const img = document.querySelector('img#cat')


// Solução 1 

// const getCats = async() => {
//     try{
//         const data = await fetch(BASE_URL)
//         const json = await data.json()
//         console.log(json[0].url)
//         return json[0].url
//     }
//     catch(e) {
//         console.log(e.message)
//     }
// }

// Solução 2
const getCats = async() => {
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => data)
        .catch((e) => console.log(e))
    return data[0].url
}

const loadImg = async () => {
    img.src = await getCats()
}

loadImg()

botao.addEventListener('click', loadImg)