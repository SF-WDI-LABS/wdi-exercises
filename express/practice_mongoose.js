/*
 * Building Routes
 *
 * Below are exercises for learning how to create routes. Complete the missing parts!
 * Use the API Reference to learn more about the app, Request and Response objects:
 * https://expressjs.com/en/4x/api.html
 *
 * Read the review. Then complete the exercises.
 */
const express = require('express');
const app = express();

/* =============================================================
 * Database Practice
 *
 * Fix the models so the routes below can work:
 *   1. Open models/car.js and follow the instructions there first
 *   2. Import models above into a variable named db
 *   3. CRUD the routes to use the models
 *
 * For help, see the instructions, official documentation and
 * instructors.
 */
app.get('/', function homePage(req, res) {
    res.send("Welcome to World of Cars!")
});

app.get('/cars', function getAllCars(req, res) {
    // RETRIEVE ALL
    // The response should return all cars
});

app.get('/cars/:id', function getUser(req, res) {
    // RETRIEVE A USER
    // The response should return a specific car
});

app.post('/cars', function createUser(req, res) {
    // CREATE
    // The response should create a new car, save it to db, and return the new car
});

app.delete('/cars/:id', function deleteUser(req, res) {
    // DELETE
    // The response should delete all cars
    // Then redirect to homepage
    // Example: https://expressjs.com/en/4x/api.html#res.redirect
});

app.get('/cars', function queryUsers(req, res) {
    // QUERY
    // Users can submit a query 'q' to search all cars
    // The response should return all cars who match the query
});

app.listen(5000, function () {
    console.log('DB Practice app listening on port 5000!')
});