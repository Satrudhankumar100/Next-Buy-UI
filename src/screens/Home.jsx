import React, { useState } from 'react'
import CategoryBar from '../components/CategoryBar'
import { Box } from '@mui/material'
import Cards from '../components/Cards'

const Home = () => {

      const [count, setCount] = useState(Array.from({ length: 5 }, (v, i) => i))

    return (
        <>
            <CategoryBar />

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, paddingX: 10, paddingY: 10 }}>
                {count.map(data => {
                    return <Cards />
                })}
            </Box>
        </>
    )
}

export default Home