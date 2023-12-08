/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10 + 20

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 20)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
	name: 'Mattia',
	surname: 'Consiglio',
	age: 27,
}

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

// const skills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'MySQL']
// console.log(typeof skills, skills)
// skills.push('test')
// console.log(typeof skills, skills)

me.skills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'MySQL']

console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('Node.js')
// skills.

console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()
console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => {
	return Math.floor(Math.random() * (5 - 1)) + 1
}
console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (a, b) => {
	if (a > b) {
		return a
	}
	return b
}
console.log(whoIsBigger(10, 20))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = string => {
	return string.split(' ')
}
console.log(splitMe('I love coding'))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (string, first) => {
	if (first) {
		return string.slice(1)
	}
	return string.slice(0, -1)
}

console.log(deleteOne('I love coding', true))
console.log(deleteOne('I love coding', false))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = string => {
	string = string
		.split('')
		.filter(char => !parseInt(char)) // if the value is NaN, is a string, else
		.join('')

	//remove extra spaces
	string = string
		.split(' ')
		.filter(word => word !== '')
		.join(' ')
	return string
}
console.log(onlyLetters('I have 4 dogs, and 3 cats'))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const verifyEmailValidChars = string => {
	if (!string) return false
	const validChars = 'abcdefghijklmnopqrstuwxyz1234567890'

	const arr = string.split('')
	for (let i = 0; i < arr.length; i++) {
		const char = arr[i]
		if (validChars.indexOf(char) === -1) return false
	}
	return true
}

const isThisAnEmail = email => {
	if (!email) return false
	email = email.toLowerCase()
	let arr = email.split('@')

	//check if there is "@" char, splitting the string in half
	if (arr.length === 1 || arr.length > 2) return false
	//Remove the part before the "@" cheking has valid
	if (!verifyEmailValidChars(arr.shift())) return false

	arr = arr[0].split('.')

	//check if there is "." char, splitting the string in half
	if (arr.length === 1) return false
	console.log(arr)
	for (let i = 0; i < arr.length; i++) {
		if (!verifyEmailValidChars(arr[i])) return false
	}

	return true
}
console.log(isThisAnEmail('test@test.com'))
console.log(isThisAnEmail('te%st@test.com'))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = () => {
	const days = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato']
	return days[new Date().getDay()]
}
console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = rolls => {
	const values = []
	let sum = 0
	for (let i = 0; i < rolls; i++) {
		const randN = Math.floor(Math.random() * 6 + 1)
		values.push(randN)
		sum += randN
	}
	return { sum, values }
}
console.log(rollTheDices(3))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = date => {
	if (date && typeof date === 'string') {
		return Math.floor(Math.abs(new Date(date) - new Date().getTime()) / (1000 * 60 * 60 * 24))
	} else {
		return console.log('Provide a string parameter')
	}
}

console.log(howManyDays('2023-11-08'))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = () => {
	const now = new Date()
	const nowDay = now.getDate()
	const nowMonth = now.getMonth()
	const birthdayDate = new Date('1996-07-08')
	const birthdayDay = birthdayDate.getDate()
	const birthdayMonth = birthdayDate.getMonth()
	return nowDay === birthdayDay && nowMonth === birthdayMonth
}

console.log(isTodayMyBirthday())

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
	{
		Title: 'The Lord of the Rings: The Fellowship of the Ring',
		Year: '2001',
		imdbID: 'tt0120737',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
	},

	{
		Title: 'The Lord of the Rings: The Return of the King',
		Year: '2003',
		imdbID: 'tt0167260',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
	},
	{
		Title: 'The Lord of the Rings: The Two Towers',
		Year: '2002',
		imdbID: 'tt0167261',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
	},
	{
		Title: 'Lord of War',
		Year: '2005',
		imdbID: 'tt0399295',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
	},
	{
		Title: 'Lords of Dogtown',
		Year: '2005',
		imdbID: 'tt0355702',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
	},
	{
		Title: 'The Lord of the Rings',
		Year: '1978',
		imdbID: 'tt0077869',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
	},
	{
		Title: 'Lord of the Flies',
		Year: '1990',
		imdbID: 'tt0100054',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
	},
	{
		Title: 'The Lords of Salem',
		Year: '2012',
		imdbID: 'tt1731697',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
	},
	{
		Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
		Year: '1984',
		imdbID: 'tt0087365',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
	},
	{
		Title: 'Lord of the Flies',
		Year: '1963',
		imdbID: 'tt0057261',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
	},
	{
		Title: 'The Avengers',
		Year: '2012',
		imdbID: 'tt0848228',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
	},
	{
		Title: 'Avengers: Infinity War',
		Year: '2018',
		imdbID: 'tt4154756',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
	},
	{
		Title: 'Avengers: Age of Ultron',
		Year: '2015',
		imdbID: 'tt2395427',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
	},
	{
		Title: 'Avengers: Endgame',
		Year: '2019',
		imdbID: 'tt4154796',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
	},
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (obj, prop) => {
	//check the input for existence and type validity
	if (!obj || !prop || typeof obj !== 'object' || typeof prop !== 'string') return

	//check if key exists in the object privided
	if (prop in obj) {
		delete obj[prop]
		return obj
	}
	return
}
console.log(deleteProp({ name: 'Mattia', age: '27' }, 'age'))

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = () => {
	//copying the in order to not apply changes directly
	const moviesCopy = [...movies]
	//sorst the array in descending order. get the first element
	return moviesCopy.sort((a, b) => parseInt(b.Year) - parseInt(a.Year)).shift()
}
console.log(newestMovie())

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = () => {
	return movies.length
}

console.log(countMovies())

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = () => {
	return movies.map(movie => movie.Year)
}
console.log(onlyTheYears())

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = () => {
	const lastMillenium = Math.floor(new Date().getFullYear() / 1000) * 1000
	return movies.filter(movie => parseInt(movie.Year) >= lastMillenium)
}
console.log(onlyInLastMillennium())

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = () => {
	return movies.reduce((sum, movie) => sum + parseInt(movie.Year), 0)
}
console.log(sumAllTheYears())

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = title => {
	if (!title || typeof title !== 'string') return
	title = title.toLowerCase()
	return movies.filter(movie => movie.Title.toLowerCase().includes(title))
}
console.log(searchByTitle('avengers'))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = title => {
	if (!title || typeof title !== 'string') return
	title = title.toLowerCase()
	const match = movies.filter(movie => movie.Title.toLowerCase().includes(title))
	const unmatch = movies.filter(movie => !movie.Title.toLowerCase().includes(title))
	return { match, unmatch }
}
console.log(searchAndDivide('avengers'))

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = index => {
	if (index && typeof index === 'number' && index >= 0 && index < movies.length) {
		movies.splice(index, 1)
		return movies
	}
}

console.log(removeIndex(5))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

document.getElementById('container')

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

document.getElementsByTagName('td')

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

document.getElementsByName('td').forEach(td => console.log(td.innerText))

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

document.getElementsByName('a').forEach(a => (a.style.backgroundColor = 'red'))

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const myList = document.getElementById('myList')
const newLi = document.createElement('li')
myList.appendChild(newLi)

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
document.querySelectorAll('#myList li').forEach(li => li.remove())
//opzione 2
document.getElementById('myList').innerHTML = ''

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

document.getElementsByName('tr').forEach(tr => tr.classList.add('test'))

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = number => {
	let tree = ''
	for (let i = 0; i < number; i++) {
		let barch = ''
		for (let j = 0; j < i + 1; j++) {
			barch += '*'
		}
		tree += barch + '\n'
	}
	return tree
}

console.log(halfTree(10))

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const tree = number => {
	let treeArr = []
	let leafs = 1
	for (let i = 0; i < number; i++) {
		let branch = ''
		for (let j = 0; j < leafs; j++) {
			let currBranch = treeArr[j]

			if (currBranch) {
				currBranch = currBranch.split('')
				currBranch.unshift(' ')
				treeArr[j] = currBranch.join('')
			}
			branch += '*'
		}
		treeArr.push(branch)
		leafs += 2
	}
	return treeArr.join('\n')
}

console.log(tree(10))
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = number => {
	let isItPrime = true
	// check if number is equal to 1
	if (number === 1) {
		return false
	}
	// check if number is greater than 1
	else if (number > 1) {
		// looping through 2 to number-1
		// starting from 2 because is the first possible prime number
		for (let i = 2; i < number; i++) {
			if (number % i == 0) {
				isItPrime = false
				break
			}
		}
		return isItPrime
	} else {
		return false
	}
}

console.log(isItPrime(10))
console.log(isItPrime(89))
