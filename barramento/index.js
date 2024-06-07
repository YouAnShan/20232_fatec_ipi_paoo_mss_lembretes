require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json())

const eventos = []

// Receber e repassar eventos
app.post('/eventos', async (req, res) => {
  const evento = req.body
  eventos.push(evento)
  console.log('Evento recebido:', evento)

  const { type } = evento

  try {
    if (type === 'ObservacaoClassificada') {
      await axios.post('http://localhost:7000/eventos', evento) // Observações
    } else {
      await axios.post('http://localhost:5000/eventos', evento) // Consulta
      if (type === 'ObservacaoCriada') {
        await axios.post('http://localhost:6000/eventos', evento) // Classificação
      }
    }
  } catch (error) {
    console.error('Erro ao enviar evento:', error.message)
  }

  res.status(200).end()
  
})

// Endpoint para recuperar eventos
app.get('/eventos', (req, res) => {
  res.status(200).json(eventos)
})

app.listen(process.env.PORT, () => {
  console.log(`Barramento rodando na porta ${process.env.PORT}`)
})
