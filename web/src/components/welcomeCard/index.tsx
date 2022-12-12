import * as styled from './styles'
import {  useNavigate } from 'react-router-dom'
import { fetchCreate } from '../../services/api'

const CardWelcome = ({username}:{username: string}) => {
  const createProject = () => {

  }
  const navigate = useNavigate();

  return (
    <styled.CardWelcome>
      <p>Seja Bem Vindo: <span>{username}</span></p>
      <button onClick={() =>  navigate('/create')}>Criar Projeto</button>
    </styled.CardWelcome>
  )
}

export default CardWelcome