const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;


let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}


app.get("/", function (req, res) {
  const time = Date();
  res.send(`There is ${persons.length} persons in the book <br/>${time}`);
});

app.get("/api/persons", function (req, res) {
  res.json(persons);
});

app.get("/api/persons/:id", function (req, res) {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.statusMessage = "idiot";
    res.status(404).end();
  }
});

app.post("/api/persons/:id", function (req, res) {

  const body = req.body

  if (!body.name) {
    return res.status(400).json({
      error: 'name missing'
    })
  }

  if (!body.number) {
    return res.status(400).json({
      error: 'number missing'
    })
  }

  if((persons.filter(person => person.number === body.number).length)){
    return res.status(400).json({
        error: 'number dublicate'
      })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons= persons.concat(person)
  res.json(person)
});

app.delete("/api/persons/:id", function (req, res)  {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);
  res.status(204).end();
});




app.listen(PORT, function () {
  console.log(PORT);
});
