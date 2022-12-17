import React from 'react'
import {AppBar,Toolbar,styled,} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { toggleAuth } from '../redux/action';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
export const Navbar = () => {
  const isLoggedIn = useSelector(store => store.isLoggedIn);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(toggleAuth());
    }
    const Navbar = styled(AppBar)`
    background : #111111;

    `
    const Tabs = styled(NavLink)`
    margin-left : 20px;
    color : white;
    font-size : 20px;
    text-decoration : none;
    `
  return (
    <div style={{display : "flex"}}>
        <Navbar position='static' >
            <Toolbar>
                <Tabs to="/">HomePage</Tabs>
                <Tabs to="/all">All User</Tabs>
                <Tabs to="/add">Add User</Tabs>
                {
                    !isLoggedIn ? (<Tabs to="/login">Login</Tabs>) : <Tabs onClick={handleLogout}>Logout</Tabs>
                }
        </Toolbar>
            
        </Navbar>
    </div>
  )
}
