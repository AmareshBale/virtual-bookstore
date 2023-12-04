import React from 'react';


const ActiveBook = ({activeBook,allBooks}) => {
  return (
    <div className='active-book'>
        {activeBook ? (
            <div className='book-card'>
                <div className='book-image'>
                    <img src={activeBook.volumeInfo.imageLinks.thumbnail} alt=''/>
                </div>
                <div className='book-info'>
                    <div className='book-header'>
                        <div className='book-title'>
                            <h3>{activeBook.volumeInfo.title}</h3>
                            <p>{activeBook.volumeInfo.authors.join(", ")}</p>
                        </div>
                        <div className='book-date'>
                            <p>Published On:{activeBook.volumeInfo.publishedDate}</p>
                            
                        </div>
                    </div>
                    <div className='book-body'>
                        <p>{activeBook.volumeInfo.description}</p>
                        <div className='book-ratings'>
                            <p>Avg Rating : 4.3</p>
                            <p>Rating Count: 850</p>
                            <p>Publisher: {activeBook.volumeInfo.publisher}</p>
                            <p>Language: {activeBook.volumeInfo.language.toUpperCase()}</p>
                        </div>
                        <div className='book-buttons'>
                            <a href={activeBook.volumeInfo.previewLink} target='_blank'>Now Read</a>
                            <a href={activeBook.volumeInfo.infoLink} target='_blank'>More Info</a>
                        </div>
                    </div>
                </div>
            </div>
        ):(
            <div className='books-showcase'>
                {allBooks.filter((_,idx) =>idx<3).map((book) =>{
                    return <div className='showcase-book' key={book.id}>
                        <div className='showcase-book-image'>
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt=''/>
                        </div>
                        <div className='showcase-book-info'>
                            <h6>{book.volumeInfo.title}</h6>
                            <p>{book.volumeInfo.description}</p>
                            <a target='_blank' href={book.volumeInfo.previewLink}>Now Read</a>
                        </div>
                    </div>
                })}
            </div>
        )}
    </div>
  )
}


export default ActiveBook;