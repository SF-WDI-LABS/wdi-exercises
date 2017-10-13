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

/**=============================================================
 * Review
 */
app.get('/', function (req, res) {
    // The response should send a file to index.html
    // Add a log with the request status
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/greet', function (req, res) {
    // The response should send a 'Hello'
    // EXTRA: If a query 'q' is sent, return it with the greeting
    res.send('Hello!')
});

app.get('/greet/:name', function (req, res) {
    // This should use a query string with a person's name
    // The response send a personalized 'Hello'
});

/* =============================================================
 * Walk-through
 *
 * Code along or simply participate in the walk-thru. Key concepts
 * to remember:
 *  - Method
 *  - Route
 *  - Request/Response object
 *  - Query string vs Query params
 *
 *  Fix the routes below by:
 *   - Updating the route with the proper data
 *   - Complete the callback functions to CRUD the users
 */

var users = [
    {name: 'erin', age: 17},
    {name: 'jean', age: 25},
    {name: 'chris', age: 37}
];

app.get('/users', function getAllUsers(req, res) {
    // RETRIEVE ALL
    // The response should return all users
});

app.get('/???', function getUser(req, res) {
    // RETRIEVE A USER
    // The response should return a specific user
});

app.post('/???', function createUser(req, res) {
    // CREATE
    // The response should create a new user, add them to users, and return the new user
});

app.delete('/???', function deleteUser(req, res) {
    // DELETE
    // The response should delete all users
    // Then redirect user to home
    // Example: https://expressjs.com/en/4x/api.html#res.redirect
});

app.get('/???', function queryUsers(req, res) {
    // QUERY
    // Users can submit a query 'q' to search all users
    // The response should return all users who match the query
});

app.listen(5000, function () {
    console.log('Practice app listening on port 5000!')
});