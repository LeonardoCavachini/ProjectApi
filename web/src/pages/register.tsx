import { useEffect } from "react"
import Form from "../components/Form"
import Header from '../components/Header'
import { SectionContainer } from '../components/SectionContainer'

const Register = () => {

  useEffect(() => {
    localStorage.clear()
  },[])
  
  return (
    <>
      <Header />
      <SectionContainer>
        <Form type={'register'} user={""} token={""}/>
      </SectionContainer>

    </>
  )
}

export default Register