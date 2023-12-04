import React,{useState,useEffect} from "react";
import Navbar from "../Navbar";
import ActiveBook  from "./ActiveBook";
import AllBooks from "./AllBooks";

const BookStore = () => {

    const[allBooks,setAllBooks] = useState([]);
    const [activeBook, setActiveBook] = useState(null);


    useEffect(()=>{
        const getAllBooks = async() => {
            let books =[]
            const res = await fetch ("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
            const data = await res.json();


            console.log(data.items);
            books = data.items;

            const res2 = await fetch("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes");
            const data2 = await res2.json();
            books=[...books, ...data2.items]

            setAllBooks(books);
        }


        getAllBooks();
    },[])



    return (
        <div>
            <Navbar setAllBooks ={setAllBooks} setActiveBook ={setActiveBook}/>
            <ActiveBook activeBook={activeBook} allBooks={allBooks}/>
            <AllBooks allBooks={allBooks} setActiveBook={setActiveBook}/>
        </div>
    )
}

export default BookStore;