import React, { Component } from 'react'

export default class Book extends Component {
	render() {
		const { book } = this.props

		return (
			<div className="book">
				<div className="book-top">
					<img className='book-cover' src={book.imageLinks.smallThumbnail} width='auto' alt={book.title} />
					<div className="book-shelf-changer">
						<select defaultValue={book.shelf || 'none'}>
							<option value="none" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">{book.authors.join(', ')}</div>
			</div>
		)
	}
}
