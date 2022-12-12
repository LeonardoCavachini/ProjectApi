import { useEffect, useState } from 'react';
import * as styled from './styles';
import Modal from 'react-modal';
import { fetchDelete, fetchPatch, fetchCpf } from '../../services/api'
import {  useNavigate } from 'react-router-dom';

interface ICard {
  name: string;
  date: string;
  zipCode: string
  cost: string
  done: string
  deadline: string
  id: string
}
const Card = ({name, date, zipCode, cost, done, deadline, id}:ICard) => {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [city, setCity] = useState('')
  const [dead, setDead] = useState('')
  const [newDate, setNewDate] = useState('')
  const [username, setUsername] = useState('')
  const [token, setToken] = useState('')

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token') as string)
    const username = JSON.parse(localStorage.getItem('username') as string)
    setUsername(username)
    setToken(token)
    handleDeadLine(date, deadline)
  },[])
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      background: '#9d379d',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');

  function getId(id:string) {
    setIsOpenModal(true)
    JSON.stringify(localStorage.setItem('id', id))
    handleCep()
  }

  function closeModal() {
    setIsOpenModal(false);
    localStorage.removeItem('id')
  }

  const handleCep = async () => {
    const {zip_code} = await fetchCpf(token, id)
    setCity(zip_code)
  }

  const handleDeadLine = async (date: string, deadline:string) => {
    deadline.replace('T00:00:00.000Z','')
    setDead(deadline.replace('T00:00:00.000Z',''))
    setNewDate(date.replace('T00:00:00.000Z',''))
  }

  const handleDelete = () => {
    fetchDelete(username, token, id)
    location.reload()
  }

  const handleProjectDone =  async () => {
    fetchPatch(username, token, id)
    location.reload()
  }

  const handleUpdate = () => {
    navigate(`/update/${id}`)
  }

  return (
    <>
    <styled.Card onClick={() => getId(id)}>
      <h1>Projeto: {name}</h1>
      <div>
        <p>Criado em: {newDate}</p>
      </div>
    </styled.Card>
    <Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact Modal"
      >
        <styled.Modal>
          <h1>Titulo: {name}</h1>
          <h1>Local: {city}</h1>
          <h1>R$: {cost} reais</h1>
          <h1>Status: {done?'Finalizado':'em progresso'}</h1>
          <h1>Previsão: {dead}</h1>
          <div>
          <button onClick={() => handleProjectDone()}>Concluir</button>
          <button onClick={() => handleUpdate()}>Alterar</button>
          <button onClick={() => handleDelete()}>Apagar</button>
          </div>
        </styled.Modal>
      </Modal>
    </>
  )
}

export default Card