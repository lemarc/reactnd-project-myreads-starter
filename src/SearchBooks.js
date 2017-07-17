import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Book from './Book'

export default class SearchBooks extends Component {

	state = {
		query:''
	}

	updateQuery = query => {
		this.setState({query: query})
	}

	clearQuery = () => {
		this.setState({query: ''})
	}

	render() {
		let results = []
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to='/' className='close-search'>Close</Link>
					<div className="search-books-input-wrapper">
						{/* 
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input type="text" placeholder="Search by title or author"/>

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{results.map((book,i)=><li key={i}><Book book={book}/></li>)}
					</ol>
				</div>
			</div>
		)
	}
}