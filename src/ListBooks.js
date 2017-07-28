import React from 'react'

import { Link } from 'react-router-dom'

import Bookshelf from './Bookshelf'

export default function ListBooks( props ) {
	const { books, move } = props

	return (
		<div className='list-books'>
			<div className='list-books-title'>
				<h1>MyReads</h1>
			</div>
			<div className='list-books-content'>
				<Bookshelf move={move} shelf='Currently Reading' books={books.filter(book=>book.shelf==='currentlyReading')}/>
				<Bookshelf move={move} shelf='Want to Read' books={books.filter(book=>book.shelf==='wantToRead')}/>
				<Bookshelf move={move} shelf='Read' books={books.filter(book=>book.shelf==='read')}/>
			</div>
			<div className='open-search'>
				<Link to='/search'>Add a book</Link>
			</div>
		</div>
	)
}