import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import BookCards from '../components/home/BookCards.jsx'
import BookTable from '../components/home/BookTable.jsx'

const Home = () => {
    const [books,setBooks] = useState([]);
    const [loading,setLoading] = useState(false);
    const [showType, setShowType] = useState('card');

    useEffect( ()=>{
        setLoading(true);
        axios.get('http://localhost:5555/books').then(
            (response) => {
                setBooks(response.data.data);
                setLoading(false);
            }
        ).catch((error) =>{
            console.log(error);
            setLoading(false);
        })
    }, [])

  return (
    <div className='p-4 m-15'>
        
        <div className='flex gap-10'>
            <h1 className='text-3xl ml-7 text-red-700'>Books List</h1>
            <div className='flex gap-x-4'>
                <button className='bg-white-400 border-3 border-red-400 hover:bg-red-400 hover:text-white font-medium text-red-400 px-4 py-1 rounded-lg cursor-pointer'
                onClick={()=>setShowType('table')}>
                    Table
                </button>
                <button className='bg-white-400 border-3 border-red-400 hover:bg-red-400 hover:text-white font-medium text-red-400 px-4 py-1 rounded-lg cursor-pointer'
                onClick={()=>setShowType('card')}>
                    Card
                </button>
            </div>
            <Link to='/books/create'>
            <MdOutlineAddBox className='text-red-800 text-4xl ml-230' />
            </Link>
        </div>
        {loading ? (
            <Spinner/>
        ):(
           showType==='table' ? (<BookTable books={books}/>) : (<BookCards books={books} />)  
        )}
    </div>
  )
}

export default Home