// server.js
const express = require('express');
const app = express();

// Middleware для парсинга JSON в теле запроса
app.use(express.json());

// Массив книг в памяти (для примера)
let books = [
  { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 }
];

// Получить все книги
app.get('/books', (req, res) => {
  res.json(books);
});

// Получить книгу по ID
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send('Book not found');
  }
  res.json(book);
});

// Добавить новую книгу
app.post('/books', (req, res) => {
  const { title, author, publishedYear } = req.body;

  // Проверка на обязательные поля
  if (!title || !author || !publishedYear) {
    return res.status(400).send('The title, author and publishedYear fields are required');
  }

  const newBook = {
    id: books.length + 1, 
    title,
    author,
    publishedYear
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// Обновить книгу по ID
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send('Book not found');
  }

  const { title, author, publishedYear } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;
  if (publishedYear) book.publishedYear = publishedYear;

  res.json(book);
});

// Удалить книгу по ID
app.delete('/books/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) {
    return res.status(404).send('Книга не найдена');
  }

  books.splice(bookIndex, 1);
  res.status(204).send();
});


app.listen(3000)
