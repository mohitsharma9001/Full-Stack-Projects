import { useNavigate } from "react-router-dom"
import { FormControl, FormGroup, Input, InputLabel,styled, Typography ,Button } from '@mui/material'
import { useSelector } from 'react-redux'
import React from 'react'
import { addUser } from '../services/api'
const Container = styled(FormGroup)`
width : 30%;
margin : 5% auto 0 auto;
& > div {
    margin-top : 20px;
}
`
const defaultValue = {
    name : "",
    username : "",
    email : "",
    phone : ""
}

export const AddUser = () => {
const [user,setUser] = React.useState(defaultValue)
const isLoggedIn = useSelector(store => store.isLoggedIn);
const navigate = useNavigate()

    const onsubmitForm = (e)=>{
        setUser({...user , [e.target.name] : e.target.value})
     console.log(user)
    }

    React.useEffect(()=>{
       if(!isLoggedIn){
          navigate('/login')
       }
    },[isLoggedIn])

    const AddUserDetails =async ()=>{
        if(user.name === "" || user.email === "" || user.username === "" || user.phone === ""){
            alert(`Please fill all details`)
        }else{

            await addUser(user)
            navigate("/all")
        }
    }
  return (
    <div>
        <Container>
            <Typography variant='h4' >Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onsubmitForm(e)} name ="name"/>
            </FormControl>
            <FormControl>
            <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=>onsubmitForm(e)} name ="username"/>
            </FormControl>
            <FormControl>
            <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onsubmitForm(e)} name ="email"/>
            </FormControl>
            <FormControl>
            <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onsubmitForm(e)} name ="phone" />
            </FormControl>

          <FormControl>
      <Button variant="contained" onClick={AddUserDetails}>Add User</Button>  
          </FormControl>
        </Container>
    </div>
  )
}
