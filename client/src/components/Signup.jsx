import React from 'react'
import { FormControl, FormGroup, Input, InputLabel,styled, Typography ,Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
const Container = styled(FormGroup)`
width : 30%;
margin : 5% auto 0 auto;
& > div {
    margin-top : 20px;
}
`
const Type = styled(Typography)`
margin-top : 20px;
text-decoration : none;
color : black;
font-size : 18px;
font-wait : 500;
`
const signupForm = {
    name : "",
    email : "",
    password : "",
}

export const Signup = () => {
 const [signUpUser,setsignUpUser] = React.useState(signupForm)
 const navigate = useNavigate()
    const userData = (e)=>{
        setsignUpUser({...signUpUser , [e.target.name] : e.target.value})
    }
 

    const AddSignupDetails =async ()=>{  
        if(signUpUser.name === "" || signUpUser.email === "" || signUpUser.password === ""){
            alert(`Please fill all the Data`)
        }else{
            try {
                let data = await fetch('http://localhost:8000/user/signup', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(signUpUser)
                  });
                  let response = await data.json();
                  if(response.message){
                    alert(`User Already Exist`)
                  }else{
                    alert(`Successfully Registerd`)
                    navigate("/login")
                  }
            } catch (error) {
                console.log("Error login" ,error)
            }
        }
    
    }
    return (
    <div>
        <Container>
        <Typography variant='h4' >Sign Up</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>userData(e)} name ="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>userData(e)} name ="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e)=>userData(e)} name ="password"/>
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={AddSignupDetails}>Signup</Button>
                <Type variant='p' component={Link} to="/login">Already have An Account</Type>
            </FormControl>
        </Container>
    </div>
  )
}
