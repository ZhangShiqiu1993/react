import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    static propTypes = {
        bookId: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired,
        backgroundImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        move: PropTypes.func.isRequired,
    };

    change = (e) => {
        this.props.move(this.props.bookId ,this.props.shelf, e.target.value);
    };

    render() {

        const {backgroundImage, title, author} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 180, backgroundImage: `url(${backgroundImage})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.change}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        )
    }
}

export default Book;