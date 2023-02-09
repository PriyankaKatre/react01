import './index.css';

import { books } from './mobiles';
import Book from './Mobile';

const BookList = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
}

export default BookList;
