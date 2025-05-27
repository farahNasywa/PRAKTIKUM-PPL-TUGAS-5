import Route from '@ioc:Adonis/Core/Route'

Route.get('/books', 'BooksController.index')
Route.get('/books/:id', 'BooksController.show')
Route.post('/books', 'BooksController.store')
Route.put('/books/:id', 'BooksController.update')
Route.delete('/books/:id', 'BooksController.destroy')