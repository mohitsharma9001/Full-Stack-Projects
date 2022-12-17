import React from 'react'
import { FormControl, FormGroup, Input, InputLabel,styled, Typography ,Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { toggleAuth } from '../redux/action';
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
const loginForm = {
    email : "",
    password : ""
}
export const Login = () => {
    const [loginUser,setloginUser] = React.useState(loginForm)
const navigate = useNavigate()
const dispatch = useDispatch();
       const onSubmit = (e)=>{
           setloginUser({...loginUser , [e.target.name] : e.target.value})
       }

    const handleSubmit =async (e)=>{
        // try {
        //     let data = await fetch('http://localhost:8000/user/login',{
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify(loginUser)
        //     })
        //   let response = await data.json();
        //     if(response){
        //       alert('login success');
        //       navigate("/add")
        //      } else{
        //         alert("Kindly register first !");
               
        //     }
        //   } catch (error) {
        //     alert("Kindly register first !");
        //     console.log(error);
        //   }
        let url = "http://localhost:8000/user/login";
        axios.post(url, loginUser).
        then((res)=>{
         if(res.status === 201){
             console.log(res);
            alert("Logged In Successfully");
            dispatch(toggleAuth());
            navigate("/all");
         }else{
           console.log(res)
           alert("Kindly register first !");
         }
        }).catch((err)=>{
         alert("Kindly register first !");
           console.log(err);
        })
    }
 
    return (
    <div>
        <Container>
        <Typography variant='h4' >Login</Typography>
        
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onSubmit(e)} name = "email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e)=>onSubmit(e)} name = "password"/>
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={handleSubmit}>Login</Button>
                <Type variant='p' component={Link} to= "/signup">Need an Account? Please Sign Up</Type>
            </FormControl>
        </Container>
    </div>
  )
}
