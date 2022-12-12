import { useEffect } from "react"
import Form from "../components/Form"
import Header from '../components/Header'
import { SectionContainer } from '../components/SectionContainer'

const Login = () => {
  useEffect(() => {
    localStorage.clear()
  },[])

  return (
    <>
      <Header />
      <SectionContainer>
        <Form type={'login'} user={""} token={""} id={""} isCreated/>
      </SectionContainer>

    </>
  )
}

export default Login
