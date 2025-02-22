import { use, useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { FormControl, InputLabel, Select } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsCartPlus } from 'react-icons/bs';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [category, setCategory] = useState("All");
    const [keyword, setKeyword] = useState();
    const [cartItmes,setCartItmes] = useState(0);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleCategoryChange = () => { }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <IoIosMail />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <IoIosNotifications />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <RiAccountCircleFill />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const handleSearchBtn = async () => {
        try {
            const response = await axios.get(`${baseUrl}/product/search-prod?keyword=${keyword}`)
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }

    }

    const handleCartCount = async()=>{
        try {
            const response = await axios.get(`${baseUrl}/cart/qnty-cart/${2}`)//add user id here
            console.log("cart items-"+ response.data);
            setCartItmes(response?.data);
        } catch (err) {
            console.log(err)
            setCartItmes(0);
        }
    }

    useEffect(()=>{
        handleCartCount();
    },[])
    console.log(keyword)

    return (
        <Box sx={{ flexGrow: 1, position: 'sticky', top: 0, zIndex: 50 }}>
            <AppBar position="static" sx={{ background: '#218b3b' }}>
                <Toolbar>

                    {/****************************  Logo and company Name ***********************/}

                    <Link to={"/home"} style={{textDecoration:'none', color:'white'}}>
                        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', alignItems: 'center' }}>

                            <motion.div
                                animate={{ x: [0, 20, 0] }} // Moves 100px right, then back
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <FaCartShopping size={28} />
                            </motion.div>
                            <Typography
                                variant="h4"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 'bolder' }}
                            >
                                Next-Buy
                            </Typography>


                        </Box>
                    </Link>

                    <Box sx={{ flexGrow: 1 }} />

                    {/****************************  Category and Search Bar ***********************/}
                    <Box sx={{ flexGrow: 1, alignSelf: "center", display: "flex", alignItems: "center" }}>


                        {/* Search Box */}
                        <Search sx={{ flexGrow: 1, marginLeft: 0, display: 'flex', background: '#fff' }}>
                            <Box>
                                {/* FormControl (Dropdown) */}
                                <FormControl
                                    size="small"
                                    sx={{
                                        maxWidth: 150,
                                        backgroundColor: "#f66",
                                        borderRadius: 1,
                                        minWidth: 100,

                                    }}
                                >
                                    <Select
                                        labelId="categorylbl"
                                        value={category}
                                        onChange={handleCategoryChange}
                                        displayEmpty

                                        renderValue={(selected) =>
                                            selected ? (
                                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                    <Typography >{selected}</Typography>
                                                </Box>
                                            ) : (
                                                <Typography sx={{ color: "white" }}>Select Category</Typography>
                                            )
                                        }
                                        sx={{
                                            color: "white",

                                            ".MuiSvgIcon-root": {
                                                color: "white",
                                            },

                                        }}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <SearchIconWrapper>
                                    <IoSearch style={{ color: '#000' }} />
                                </SearchIconWrapper>
                            </Box>

                            <StyledInputBase placeholder="Search…" value={keyword} onChange={(e) => setKeyword(e.target.value)} sx={{ color: '#000' }} inputProps={{ "aria-label": "search" }} />
                        </Search>
                    </Box>



                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Link to={"/cart"}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={cartItmes} color="error">
                                    <BsCartPlus color='white' />
                                </Badge>
                            </IconButton>
                        </Link>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <IoIosNotifications />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <RiAccountCircleFill />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <IoMdMore />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}