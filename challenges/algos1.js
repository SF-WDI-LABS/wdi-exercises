/*
 * paginate(data)
 *
 * Create a function that takes a list of data and:
 * - returns 20 items at a time
 * - the 20 items contain only unique authors
 * - non-unique entries should be spread across the pages that follow.
 *
 * @params data: List of objects with the following properties:
 *      user_id, book_title, author_id, year
 */
function paginate(data) {
    // code here
}

/*
 * parseUrl(url)
 *
 * Create a function that takes a url and parses it to return the domain name
 * only.
 *
 * @params url: A full url - https://www.domain.com/path/to/page/here
 *
 * The url may or may not contain www.
 * The url may contain http or https
 * The domain extension can contain the following: .com, .net, .org, .io
 * Must return only the domain.
 * Sub-domains are allowed (ex. http://employees.domain.org
 *
 */
function parseUrl(url) {
    // code here
}

/*
 * redact(words, obj)
 *
 * Create a function takes a list of words and redacts each occurence of the
 * words from the object. Return a new object with each of the words changed to
 * 'REDACTED'.
 *
 * @params words: an array of words
 * @params obj: an object with the following properties: to, from, title, message
 *
 * Example:
 * redact(['Rosa'], {to: 'Rosa Parks', from: 'Dr. King', title: 'Event', message: 'Rosa, thank you for your service.'})
 *
 * > {to: 'REDACTED Parks', from: 'Dr. King', title: 'Event', message: 'REDACTED, thank you for your service.'}
 */
function redact(words, obj) {
    // code here
}

/*
 * charCounter(str)
 *
 * Create a function that takes a string and returns an object that counts the
 * number of times each character occurred.
 *
 * Each key in the object should represent a character in the string.
 *
 * @params str: A string.
 *
 * Do not count white space.
 * Count only alphabetical characters
 * Don not count numbers.
 */
function charCounter(str) {
    // code here
}

/*
 * fibFinder(n)
 *
 * Create a function that takes a position of a number in the Fibonacci sequence and returns
 * and returns it's value.
 *
 * @params n: The position or order of the number in the Fibonacci sequence.
 *
 * Ex. Fibonacci sequence
 * [0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ....]
 * fibFinder(8)
 * > 13
 *
 * fibFinder(10)
 * > 34
 */
function fibFinder(n) {
    // code here
}
