import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    });
  }
  render() {
    return (
      <ul className="list group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
}

function mapDispaceToProps(dispatch) {
  //whenever selectBook is called,
  //the result should be passed to all of our reducers
  //The dispatch takes the action and passes them to the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispaceToProps)(BookList);
