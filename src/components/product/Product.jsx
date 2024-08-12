import React, { useState, useEffect } from 'react'
import "./Product.css";
import { LiaCartPlusSolid } from "react-icons/lia";
import { LiaSpinnerSolid } from "react-icons/lia";
import axios from 'axios'
const API_URL = "https://dummyjson.com"
const Product = () => {
  
    const [products, setProducts] = useState(null)
    const [categories, setCategories] = useState(null)
    const [selectCategory, setSelectCategory] = useState("")
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const [onset, setOnset] = useState(1)
    const limit = 4

    useEffect(()=>{
        axios
        .get(`${API_URL}/products/category-list`)
        .then(res => setCategories(res.data))
        .catch(err => console.log(err))
    },[])
    console.log(categories);
    console.log(selectCategory);
    
    

    useEffect(() => {
        setLoading(true)
        axios
            .get(`${API_URL}/products${selectCategory}`,{
                params:{
                    limit: limit * onset
                }
            })
            .then(res => {
                console.log(res.data);
                setTotal(res.data.total);
                setProducts(res.data.products)
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }, [onset, selectCategory])
    
    
    const [offset, setOffset] = useState(0)
    const handClick = () => {
        setOffset(offset + 1)
    }
    const productItem = products?.map((product) => (
        <div key={product.id} className='w-72 p-3 api flex flex-col gap-4 items-center justify-center rounded-lg  relative'>
            <img src={product.images[0]} alt="" className='w-full h-52 object-contain hover:scale-105 ' />
            <div className='flex flex-col gap-2 '>
                <h3 className='text-center text-xl font-semibold'>{product.brand}</h3>
                <p className='text-red-500 text-sm font-medium ml-2'>12%</p>
                <p className='desck'>{product.description}</p>
                <p className='text-lg font-semibold ml-2 mb-6'>${product.price}</p>
            </div>
            <button className=' button w-12 border rounded-full bg-emerald-300 p-1 text-xs text-slate-100'>New</button>
            <button className='btr w-9 h-9 rounded-full border-none bg-yellow-400 '><LiaCartPlusSolid className='text-slate-100 text-2xl m-auto' /></button>
            <div className='ofset flex'>
                <button disabled={offset <= 0}  onClick={()=> setOffset(p=>p-1)} className='border w-6 h-6  flex items-center justify-center text-slate-400 rounded-md'>-</button>
                <button className='w-10'>{offset}</button>
                <button onClick={handClick} className='border w-6 h-6  flex items-center justify-center text-slate-400 rounded-md'>+</button>
            </div>
        </div>
    ))
    const categoryItems = categories?.map(item =>(
        <option key={item} value={`/category/${item}`}>{item}</option>
    ))
 
    return (
        <div className='container w-5/7 mb-16'>
            <div className='flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-4 mb-5 sm:mb-10'>
                <p className='text-2xl sm:text-3xl font-bold'>Скидки <b className='text-red-600'>%</b></p>
                <p className='text-sm sm:text-base text-slate-600'>Все товары в категории</p>
            </div>

             <select value={selectCategory} onChange={e => setSelectCategory(e.target.value)} name="" id="" className='outline-none border-none'>
             <option value="" >All</option>
             {categoryItems}
             </select>
            <div className='flex gap-3 flex-wrap items-center justify-center '>
                {loading && <h2 className='text-7xl items-center justify-center'><LiaSpinnerSolid /></h2>}
                { productItem}
            </div>
            {
                limit * onset <= total &&
                <button onClick={() => setOnset(p => p + 1)} className='py-2 px-6 border rounded-md block mx-auto mt-5 bg-emerald-300 text-slate-100 text green'>See more</button>
            }
        </div>
    )
}

export default Product