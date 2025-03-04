# Js server
1.Get all books:
    curl http://localhost:3000/books

2.Get a book by ID:
    curl http://localhost:3000/books/1

3.Add a new book:
    curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d "your book"

4.Update the book:
   curl -X PUT http://localhost:3000/books/1 -H "Content-Type: application/json" -d "{\"title\":\"The Great Gatsby\", \"author\":\"F. Scott Fitzgerald\", \"publishedYear\":1925}"
