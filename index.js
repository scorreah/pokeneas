const express = require('express')
const os = require("os")
const app = express()
const port = 80

const pokeneas = [
        {
            'id': 1,
            'nombre': 'Pikachu',
            'altura': 0.4,
            'habilidad': 'Electricidad',
            'imagen': 'https://storage.googleapis.com/los-pokeneas-images/01.png',
            'frase_filosofica': 'La verdadera fuerza no proviene del cuerpo, sino del espíritu.'
        },
        {
            'id': 2,
            'nombre': 'Charmander',
            'altura': 0.6,
            'habilidad': 'Fuego',
            'imagen': 'https://storage.googleapis.com/los-pokeneas-images/02.png',
            'frase_filosofica': 'La pasión es el fuego que te hace avanzar hacia tus sueños.'
        },
        {
            'id': 3,
            'nombre': 'Squirtle',
            'altura': 0.5,
            'habilidad': 'Agua',
            'imagen': 'https://storage.googleapis.com/los-pokeneas-images/03.png',
            'frase_filosofica': 'El agua siempre encuentra su camino, sigue fluyendo y nunca te detengas.'
        },
        {
            'id': 4,
            'nombre': 'Bulbasaur',
            'altura': 0.7,
            'habilidad': 'Planta',
            'imagen': 'https://storage.googleapis.com/los-pokeneas-images/04.png',
            'frase_filosofica': 'La paciencia es la virtud de la vida, deja que las cosas crezcan y florezcan a su propio ritmo.'
        },
        {
            'id': 5,
            'nombre': 'Jigglypuff',
            'altura': 0.5,
            'habilidad': 'Canto',
            'imagen': 'https://storage.googleapis.com/los-pokeneas-images/05.png',
            'frase_filosofica': 'La música es el lenguaje universal del alma.'
        },
        {
            'id': 6,
            'nombre': 'Eevee',
            'altura': 0.3,
            'habilidad': 'Adaptabilidad',
            'imagen': 'https://storage.googleapis.com/los-pokeneas-images/06.png',
            'frase_filosofica': 'La adaptabilidad es la clave para sobrevivir en un mundo siempre cambiante.'
        },
        {
            'id': 7,
            'nombre': 'Snorlax',
            'altura': 2.1,
            'habilidad': 'Dormir',
            'imagen': 'https://storage.googleapis.com/los-pokeneas-images/07.png',
            'frase_filosofica': 'A veces necesitas descansar para encontrar la energía que necesitas.'
        },
        {
            'id': 8,
            'nombre': 'Magikarp',
            'altura': 0.9,
            'habilidad': 'Nado',
            'imagen': 'https://storage.googleapis.com/los-pokeneas-images/08.png',
            'frase_filosofica': 'No subestimes a alguien sólo por su apariencia o habilidades aparentes.'
        },
        {
            'id': 9,
            'nombre': 'Davo',
            'altura': 0.9,
            'habilidad': 'Ñaliar',
            'imagen': 'https://storage.googleapis.com/los-pokeneas-images/09.png',
            'frase_filosofica': 'No subestimes a alguien sólo por su apariencia o habilidades aparentes.'
        },
        {
            'id': 10,
            'nombre': 'Samy',
            'altura': 0.9,
            'habilidad': 'Boff',
            'imagen': 'https://storage.googleapis.com/los-pokeneas-images/10.png',
            'frase_filosofica': 'No subestimes a alguien sólo por su apariencia o habilidades aparentes.'
        },
]

app.get('/', (req, res) => {
  const number = Math.floor(Math.random() * 7);
  const json = {"id":pokeneas[number]["id"],"nombre":pokeneas[number]["nombre"],"altura":pokeneas[number]["altura"],"habilidad":pokeneas[number]["habilidad"],}
  res.send(json)
})

app.get('/image', (req, res) => {
    const number = Math.floor(Math.random() * 7);
    const json = {"frase_filosofica":pokeneas[number]["frase_filosofica"],"imagen":pokeneas[number]["imagen"],"container_id":os.hostname(),}
    res.send(json)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
