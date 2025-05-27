import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from 'App/Models/Book'

export default class BooksController {
  public async index({}: HttpContextContract) {
    return await Book.all()
  }

  public async show({ params }: HttpContextContract) {
    return await Book.findOrFail(params.id)
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['title', 'author', 'year', 'genre'])
    return await Book.create(data)
  }

  public async update({ params, request }: HttpContextContract) {
    const book = await Book.findOrFail(params.id)
    const data = request.only(['title', 'author', 'year', 'genre'])
    book.merge(data)
    await book.save()
    return book
  }

  public async destroy({ params }: HttpContextContract) {
    const book = await Book.findOrFail(params.id)
    await book.delete()
    return { message: 'Book deleted successfully' }
  }
}