import React, { createContext, useEffect, useState } from 'react'
import CategoryBar from '../components/CategoryBar'
import { Box, Typography } from '@mui/material'
import Cards from '../components/Cards'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'


const Home = () => {

      const [products, setProducts] = useState([])

      const searchByCategory = async(category)=>{
        console.log(category)

        try{
          const response= await axios.get(`${baseUrl}/product/search-category?category=${category}`)
          setProducts(response.data.data)
        }catch(err){
          console.log(err)
        }


      }

      
    const GetProducts = async()=>{
        try{
          const response= await axios.get(`${baseUrl}/product/find-all-prod`)
          setProducts(response.data.data)
          console.log(response.data)
        }catch(err){
          console.log(err)
        }
    
      }

      useEffect(()=>{
        GetProducts();
      },[])

    return (
        <>
            <CategoryBar  searchByCategory={searchByCategory} />

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, paddingX: 10, paddingY: 10 }}>
            {products.length!=0 ?
                products.map((product,index) => {
                    return <Cards key={index} product={product} />
                }):
                <Box sx={{background:'#f77', width:'100%',paddingX:4,paddingY:2}}>
                  <Typography sx={{fontSize:28, color:'#fff'}}>No Record found</Typography>
                </Box>
            
            }
            </Box>
        </>
    )
}

export default Home