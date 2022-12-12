import { useEffect } from "react"
import {  useNavigate } from 'react-router-dom';
import Form from "../components/Form"
import Header from '../components/Header'
import { SectionContainer } from '../components/SectionContainer'

const CreateProject = () => {

  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem('token') as string)
  const username = JSON.parse(localStorage.getItem('username') as string)

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('token') as string);
    if (!userToken) navigate("/");
    
  },[])

  return (
    <>
      <Header />
      <SectionContainer>
      <Form type={"create"} user={username} token={token} isCreated={true} id={""}/>
      </SectionContainer>

    </>
  )
}

export default CreateProject