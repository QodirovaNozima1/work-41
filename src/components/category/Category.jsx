import React from 'react'
import './Category.css'
import divan from "../../assets/cate1.png"
import divan1 from "../../assets/cate2.png"
import divan2 from "../../assets/cate3.png"
import divan3 from "../../assets/cate4.png"
import divan4 from "../../assets/cate5.png"
import divan5 from "../../assets/cate6.png"
import divan6 from "../../assets/cate7.png"
import divan7 from "../../assets/cate8.png"
import divan8 from "../../assets/cate9.png"
import divan9 from "../../assets/cate10.png"
const box = [
    {
        id: 1,
        url: divan,
        title: "Диваны"
    },
    {
        id: 2,
        url: divan1,
        title: "Спальная"
    },
    {
        id: 3,
        url: divan2,
        title: "Кухня"
    },
    {
        id: 4,
        url: divan3,
        title: "Для сада"
    },
    {
        id: 5,
        url: divan4,
        title: "Мебель"
    },
    {
        id: 6,
        url: divan5,
        title: "Гигиена"
    },
    {
        id: 7,
        url: divan6,
        title: "Товары для отдыха"
    },
    {
        id: 8,
        url: divan7,
        title: "Зеркала"
    },
    {
        id: 9,
        url: divan8,
        title: "Зеркала"
    },
    {
        id: 10,
        url: divan9,
        title: "Кухня и бытовая тех.."
    },
]
const Category = () => {
    return (
    <div className='category'>
         <div className='container w-5/7'>
            <div className='flex flex-col md:flex-row gap-5 text-center md:items-end mb-5 md:mb-10'>
            <p className='text-2xl md:text-4xl font-bold info'>Популярные категории</p>
            <p className='text-sm md:text-base'>Все категории</p>
            </div>

                <div  className='category__wrapper'>
                {
                    box?.map((el) => (
                       
                            <div key={el.id} className=' h-52  flex flex-col gap-3 p-4 border-gray-60 items-center justify-center rounded-3xl  hover: shadow shadow-blue-500/40  w-60 relative'>
                                <img className='hover:scale-105 transition-4s m-auto' src={el.url} alt="" />
                                <p className=' text-center mt-3 absolute bottom-2'>{el.title}</p>
                            </div>
                    ))
                }
              </div>

        </div>
    </div>
    )
}

export default Category