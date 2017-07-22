import React, { Component } from 'react'

export default class Book extends Component {
	render() {
		const { book, move, update } = this.props
		return (
			<div className="book">
				<div className="book-top">
					<img className='book-cover' src={book.imageLinks.smallThumbnail} width='auto' alt={book.title} />
					<div className="book-shelf-changer">
						<select value={book.shelf} onChange={
							e=>{
								update && update(book, e.target.value)
								move(book,e.target.value)
							}
						}>
							<option value="" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">{book.authors && book.authors.join(', ')}</div>
			</div>
		)
	}
}
