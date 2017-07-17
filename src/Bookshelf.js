import React, { Component } from 'react'

import Book from './Book'

export default class Bookshelf extends Component {
	render() {
		const {shelf, books} = this.props
		console.log(shelf, books)
		return (
			<div className='bookshelf'>
				<h2 className='bookshelf-title'>{shelf}</h2>
				<div className='bookshelf-books'>
					<ol className='books-grid'>
						{books.map((book,i)=><li key={i}><Book book={book}/></li>)}
					</ol>
				</div>
			</div>
		)
	}
}
