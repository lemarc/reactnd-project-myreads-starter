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
				// returned results won't show if they are already on a shelf - check if they are
				results.constructor===Array && results.forEach( (resultBook,i) => {
					resultBook.shelf='none' // Some results had a shelf attribute even if it wasn't on my shelf
					this.props.books.forEach( shelvedBook => {
						resultBook.id === shelvedBook.id && (results[i].shelf = shelvedBook.shelf)
					})
				})
				//console.log(results)
				this.setState({results: results})
			})
		} else {
			this.clearQuery()
		}
	}

	updateResultsShelf = (book, shelf) => {
		this.setState( state => {
			const i = state.results.indexOf(book)
			book.shelf=shelf
			state.results[i]=book
			return { results: state.results }
		})
	}

	clearQuery = () => {
		this.setState({query: '',results:[]})
	}

	render() {	
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
						<input type='text' placeholder='Search by title or author' value={this.state.query} onChange={e=>this.updateQuery(e.target.value)}/>

					</div>
				</div>
				<div className='search-books-results'>
					{this.state.results.constructor === Array && <ol className='books-grid'>
						{this.state.results.map((book,i)=><li key={i}><Book book={book} move={this.props.move} update={this.updateResultsShelf}/></li>) }
					</ol>}
				</div>
			</div>
		)
	}
}