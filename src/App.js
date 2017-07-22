import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

export default class BooksApp extends Component {

	state = { books: [] }

	componentDidMount() {
		this.getBooks()
	}

	getBooks= () => {
		BooksAPI.getAll().then( books => this.setState({books}) )
	}

	moveBook= (book, shelf) => {
		BooksAPI.update(book, shelf).then( () => this.getBooks() )
	}

	render() {
		console.log(this.state)
		return (
			<div className="app">

				<Route path='/search' render={ history => (
					<SearchBooks search={BooksAPI.search} books={this.state.books} move={this.moveBook}/>
				)}/>

				<Route exact path='/' render={ history => (
					<ListBooks books={this.state.books} move={this.moveBook}/>
				)}/>

			</div>
		)
	}
}
