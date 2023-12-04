import React,{useState} from 'react'
import { FaMagnifyingGlass,FaBell,FaLocationDot } from "react-icons/fa6";
import { BiSolidBookHeart } from "react-icons/bi";
import { IoDiamond } from "react-icons/io5";




const Navbar = ({setAllBooks,setActiveBook}) => {
  const [searchItem, setSearchItem] = useState("");


  const handleSearch = async() => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchItem}`)
    const data = await res.json();
    setAllBooks(data.items);
    setActiveBook(null);
    setSearchItem("")
  }

  return (
    <nav style={{display:"flex", justifyContent:"space-between"}}>
        <div className="nav-brand">kaezon Books</div>
        <div className="nav-search" style={{display:"flex"}}>
            <div className="search" style={{display:"flex"}}>
                <div className='search-icon'><FaMagnifyingGlass /></div>
                <input type="text" placeholder='Search for Book' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
            </div>
            <button onClick={handleSearch}>Search</button>
        </div>
        <div className="nav-icons">
             <BiSolidBookHeart />
             <FaBell />
             <IoDiamond />
             <FaLocationDot />
        </div>
    </nav> 
  )
}

export default Navbar