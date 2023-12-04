import React from "react";

const AllBooks = ({setActiveBook,allBooks}) => {



    return ( 
        <div className="all-books">
         <h3>More Books</h3>
         <div className='books-container'
             style={{display:'grid', gridTemplateColumns:"repeat(4,1fr)"}}>
         {allBooks.length > 0 && allBooks.map((book) => {
             return(
                 <div key={book.id} onClick={()=>setActiveBook(book)}>
                     <img src={book.volumeInfo.imageLinks.thumbnail} alt='' />
                 </div>
             )
           } )
         }
         </div>
     </div>
   )
}

export default AllBooks;