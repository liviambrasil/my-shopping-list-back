import supertest from 'supertest'
import app from '../src/app'
//import connection from '../src/database'

describe('POST /items', () => {
    it ('returns 201 for valid params', async() => {
        const body = {"text": "teste"}

        const result = await supertest(app).post('/items').send(body)
        expect(result.status).toEqual(201)
    }) 
    it ('returns 401 for empty body', async() => {
        const body = {"text": ""}

        const result = await supertest(app).post('/items').send(body)
        expect(result.status).toEqual(404)
    })
})

describe('GET /items', () => {
    it ('returns 201 for valid params', async() => {
        const result = await supertest(app).get('/items')
        expect (result.status).toEqual(200)
    })
})