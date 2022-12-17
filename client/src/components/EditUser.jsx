import { useNavigate,useParams } from "react-router-dom"
import { FormControl, FormGroup, Input, InputLabel,styled, Typography ,Button } from '@mui/material'
import React from 'react'
import { editUser, getUser } from '../services/api'
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

export const EditUser = () => {
const [user,setUser] = React.useState(defaultValue)
const navigate = useNavigate()
const { id } = useParams()

React.useEffect(()=>{
    loadUserDetails()
},[])


const loadUserDetails =async () => {
  const res = await getUser(id)
  setUser(res.data)
}


    const onsubmitForm = (e)=>{
        setUser({...user , [e.target.name] : e.target.value})
     console.log(user)
    }

    const editUserDetails =async ()=>{
    await editUser(user,id)
    navigate("/all")
    }
  return (
    <div>
        <Container>
            <Typography variant='h4' >Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onsubmitForm(e)} name ="name" value={user.name}/>
            </FormControl>
            <FormControl>
            <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=>onsubmitForm(e)} name ="username" value={user.username}/>
            </FormControl>
            <FormControl>
            <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onsubmitForm(e)} name ="email" value={user.email}/>
            </FormControl>
            <FormControl>
            <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onsubmitForm(e)} name ="phone" value={user.phone}/>
            </FormControl>

          <FormControl>
      <Button variant="contained" onClick={editUserDetails}>Edit User</Button>  
          </FormControl>
        </Container>
    </div>
  )
}
