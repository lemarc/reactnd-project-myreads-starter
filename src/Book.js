import React from 'react'

export default function Book( props ) {
	const { book, move } = props
	
	return (
		<div className='book'>
			<div className='book-top'>
				<img className='book-cover'
					src={book.imageLinks && book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : ''}
					alt={book.title ? book.title : ''}
					width='auto' />
				<div className='book-shelf-changer'>
					<select value={book.shelf} onChange={ e => move(book,e.target.value) }>
						<option value='' disabled>Move to...</option>
						<option value='currentlyReading'>Currently Reading</option>
						<option value='wantToRead'>Want to Read</option>
						<option value='read'>Read</option>
						<option value='none'>None</option>
					</select>
				</div>
			</div>
			<div className="book-title">{book.title}</div>
			<div className="book-authors">{book.authors && book.authors.join(', ')}</div>
		</div>
	)
}
