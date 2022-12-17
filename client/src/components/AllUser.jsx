import React from 'react'
import { Table, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers,deleteUser } from '../services/api'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`;
const THead = styled(TableRow)`

    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        // font-size: 18px
    }
`;


export const AllUser = () => {
const [user,setUsers] = React.useState([])
const isLoggedIn = useSelector(store => store.isLoggedIn);
const navigate = useNavigate();
console.log(user)
  

React.useEffect(()=>{
  if(isLoggedIn){
    navigate("/all")
     getAllUsers()
     
  }
  else{
    navigate('/login');
  }
},[isLoggedIn])

  
  
  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
}

const deleteUserData = async (id) => {
  await deleteUser(id)
  getAllUsers()
}
  
return (
    <div>
      <StyledTable>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </THead>
          
          <TableBody>
         {
          user.map((data)=>{
           return <TRow key={data.id}>
                     <TableCell>{data._id}</TableCell>
                     <TableCell>{data.name}</TableCell>
                     <TableCell>{data.username}</TableCell>
                     <TableCell>{data.email}</TableCell>
                     <TableCell>{data.phone}</TableCell>
                     <TableCell>
                      <Button variant="contained" style={{marginRight : 10}} component={Link} to={`/edit/${data._id}`}>Edit</Button>
                      <Button variant="contained" color='secondary'  onClick={() => deleteUserData(data._id)}>Delete</Button>
                     </TableCell>
            </TRow>
          })
         }
          </TableBody>
      </StyledTable>
    </div>
  )
}

