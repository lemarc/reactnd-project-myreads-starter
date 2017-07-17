import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

export default class BooksApp extends Component {

	state = { books: [] }

	componentDidMount() {
		BooksAPI.getAll().then( books => this.setState({books}) )
	}

	render() {
		console.log(this.state)
		return (
			<div className="app">

				<Route path='/search' render={ history => (
					<SearchBooks />
				)}/>

				<Route exact path='/' render={ history => (
					<ListBooks books={this.state.books}/>
				)}/>

			</div>
		)
	}
}
