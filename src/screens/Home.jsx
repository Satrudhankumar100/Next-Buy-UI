import React, { useEffect, useState } from 'react'
import CategoryBar from '../components/CategoryBar'
import { Box } from '@mui/material'
import Cards from '../components/Cards'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'

const Home = () => {

      const [products, setProducts] = useState(Array.from({ length: 5 }, (v, i) => i))
      
    const GetProducts = async()=>{
        try{
          const response= await axios.get(`${baseUrl}/product/all-category`)
          setProducts(response.data.data)
        }catch(err){
          console.log(err)
        }
    
      }

      useEffect(()=>{
        GetProducts();
      },[])

    return (
        <>
            <CategoryBar />

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, paddingX: 10, paddingY: 10 }}>
                {products.map((product,index) => {
                    return <Cards key={index} product={product} />
                })}
            </Box>
        </>
    )
}

export default Home