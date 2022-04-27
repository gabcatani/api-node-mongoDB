const { Router } = require('express')

const routes = Router()

//ROUTES

//GET
routes.get('/', (req, res) => {
    res.json('Hello World')
})

routes.get('/users', (req, res) => {

})

routes.get('/users/:id', (req, res) => {

})

routes.get('/products/:user_id', (req, res) => {

})

routes.get('/products/:products_id', (req, res) => {

})

routes.get('/cart/:user_id', (req, res) => {

})

routes.get('/cart/:user_id/:cart_id', (req, res) => {

})


//POST
routes.post('/users', (req, res) => {

})

routes.post('/products/:user_id', (req, res) => {

})

routes.post('/login', (req, res) => {

})

routes.post('/cart/:user_id', (req, res) => {

})


//PATCH
routes.patch('/products/:user_id/product-id', (req, res) => {

})


//DELETE
routes.delete('/products/:user_id/:product_id', (req, res) => {

})

module.exports = routes