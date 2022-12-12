import { useEffect } from "react";
import {   useParams, useNavigate } from "react-router-dom";
import Form from "../components/Form"
import Header from '../components/Header'
import { SectionContainer } from '../components/SectionContainer'
import { fetchPatch } from '../services/api'

const UpdateProject = () => {
  
  const token = JSON.parse(localStorage.getItem('token') as string)
  const username = JSON.parse(localStorage.getItem('username') as string)

  const { id } = useParams<{id?: string|undefined}>();

  const navigate = useNavigate();

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('token') as string);
    if (!userToken) navigate("/");
    
  },[])

  return (
    <>
      <Header />
      <SectionContainer>
      <Form type={"create"} user={username} token={token} isCreated={false} id={id}/>
      </SectionContainer>

    </>
  )
}

export default UpdateProject