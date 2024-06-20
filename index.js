// const express = require("express");
// const cors = require('cors')

// const app = express();

// app.use(cors())

// let persons = [
//   {
//     id: 1,
//     name: "Arto Hellas",
//     number: "040-123456",
//   },
//   {
//     id: 2,
//     name: "Ada Lovelace",
//     number: "39-44-5323523",
//   },
//   {
//     id: 3,
//     name: "Dan Abramov",
//     number: "12-43-234345",
//   },
//   {
//     id: 4,
//     name: "Mary Poppendieck",
//     number: "39-23-6423122",
//   },
// ];

// app.get("/api/persons", (request, response) => {
//   response.json(persons);
// });

// app.get("/api/info", (request, response) => {
//   const time = Date();
//   response.send(`There is ${persons.length} persons in the book <br/>${time}`);
// });

// app.get("/api/persons/:id", (request, response) => {
//   const id = Number(request.params.id);
//   const person = persons.find((person) => person.id === id);

//   if (person) {
//     response.json(person);
//   } else {
//     response.statusMessage = "idiot";
//     response.status(404).end();
//   }
// });

// app.delete("/api/persons/:id", (request, response) => {
//   const id = Number(request.params.id);
//   persons = persons.filter((person) => person.id !== id);
//   response.status(204).end();
// });


// const generateId = () => {
//     const maxId = persons.length > 0
//       ? Math.max(...persons.map(n => n.id))
//       : 0
//     return maxId + 1
//   }

  
// app.post("/api/persons/:id", (request, response) => {


//   const body = request.body

//   if (!body.name) {
//     return response.status(400).json({ 
//       error: 'name missing' 
//     })
//   }

//   if (!body.number) {
//     return response.status(400).json({ 
//       error: 'number missing' 
//     })
//   }


//   if((persons.filter(person => person.number === body.number).length)){
//     return response.status(400).json({ 
//         error: 'number dublicate' 
//       })
//   }


  
//   const person = {
//     name: body.name,
//     number: body.number,
//     id: generateId(),
//   }

//   persons= persons.concat(person)
//   response.json(person)
// });

// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })


const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())

app.listen(process.env.PORT || 3000, function () {
  console.log('CORS-enabled web server listening on port 80')
})
