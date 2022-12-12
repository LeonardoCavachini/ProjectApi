import { Route, Routes, BrowserRouter } from 'react-router-dom'
import FormLogin from './pages/login'
import Projects from './pages/projects'
import Register from './pages/register'
import CreateProjects from './pages/createProject'
import UpdateProjects from './pages/updateProject'

  function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>

        <Route path='/' index element={<FormLogin/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/create' element={<CreateProjects/>} />
        <Route path='/update/:id' element={<UpdateProjects/>} />

        </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter
