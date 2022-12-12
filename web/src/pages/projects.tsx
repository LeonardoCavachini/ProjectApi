import {useState, useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';
import { fetchProjects } from '../services/api'
import { SectionContainer } from '../components/SectionContainer'
import Card from '../components/Card'
import Header from '../components/Header'
import CardWelcome from '../components/welcomeCard'
import Title from '../components/Title'

const Projects = () => {

  const [projects, setProjects] = useState([])
  const [username, setUserName] = useState('')

  const navigate = useNavigate();

  const fetch = async () => {
    const token = JSON.parse(localStorage.getItem('token') as string)
    const username = JSON.parse(localStorage.getItem('username') as string)
    const data = await fetchProjects(username, token)
    setProjects(data)
    setUserName(username)
  }
  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('token') as string);
    if (!userToken) navigate("/");
    fetch()
  },[])
  return (
    <>
      <Header />
      <SectionContainer>
        <CardWelcome username={username}/>
        {projects.length>0?projects.map(project => (
          <Card key={project['id']} id={project['id']} name={project['title']} date={project['created_at']} zipCode={project['zip_code']} cost={project['cost']} done={project['done']} deadline={project['deadline']} />
        )):<Title text={'Voce ainda não tem Projetos'} />}
      </SectionContainer>
    </>
  )
}

export default Projects