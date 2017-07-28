import React from 'react'

import Book from './Book'

export default function Bookshelf( props ) {
	const { shelf, books, move } = props
	
	return (
		<div className='bookshelf'>
			<h2 className='bookshelf-title'>{shelf}</h2>
			<div className='bookshelf-books'>
				<ol className='books-grid'>
					{books.map((book,i)=><li key={i}><Book book={book} move={move}/></li>)}
				</ol>
			</div>
		</div>
	)
}
