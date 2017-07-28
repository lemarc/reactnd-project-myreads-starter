import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Book from './Book'

export default class SearchBooks extends Component {

	state = {
		query:'',
		results:[]
	}

	updateQuery = query => {
		if (query) {
			this.setState({query: query})
			// set the results separately to prevent overwriting the query while waiting for search results
			this.props.search(query,20).then( results => {
				// only set the results if it returns an array, an object is returned if no results are found
				// currently keeps previous results if nothing is returned after you keep typing
				results.constructor===Array && this.setState({results:  results})
			})
		} else {
			this.clearQuery()
		}
	}

	clearQuery = () => {
		this.setState({query: '',results:[]})
	}

	render() {
		const { results, query } = this.state
		const { books, move } = this.props

		// Returned results won't show if they are already on a shelf - check if they are
		// Performing this check in render so it changes when shelved books are moved without repeating api search
		results.forEach( resultBook => {
			resultBook.shelf='none' // Some results had a shelf attribute even if it wasn't on my shelf
			books.forEach( shelvedBook => {
				// Assign the proper shelf attribute to any books on my shelves
				resultBook.id === shelvedBook.id && (resultBook.shelf = shelvedBook.shelf)
			})
		})

		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<Link to='/' className='close-search'>Close</Link>
					<div className='search-books-input-wrapper'>
						{/* 
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input type='text' placeholder='Search by title or author' value={query} onChange={e=>this.updateQuery(e.target.value)}/>

					</div>
				</div>
				<div className='search-books-results'>
					<ol className='books-grid'>
						{results.map((book,i)=><li key={i}><Book book={book} move={move}/></li>) }
					</ol>
				</div>
			</div>
		)
	}
}