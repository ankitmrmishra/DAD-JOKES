

const jokeText = document.getElementById('ApiTextHERE')
const btn = document.getElementById('buttonhere')

getthejoke();

btn.addEventListener('click' , getthejoke)

async function getthejoke(){
   const config = {
    headers: {
        "Accept" : "application/json"
    }
}

const getthe = await fetch('https://icanhazdadjoke.com/' , config);
const res = await getthe.json()
jokeText.innerHTML = res.joke;
}
  
// const config = {
//     headers: {
//         "Accept" : "application/json"
//     }
// }

// fetch('https://icanhazdadjoke.com/' , config)