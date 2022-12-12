import { useState } from 'react';
import * as styled from './styles';
import {  useNavigate, Link } from 'react-router-dom';
import { fetchLogin, fetchRegister, fetchCreate, fetchUpdate } from '../../services/api'

const Form = ({type, user, token, isCreated, id}:{type: string, user:string, token:string, isCreated: boolean, id: undefined|string}) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [title, setTitle]= useState('')
  const [zip_code, setZip_code]= useState(Number)
  const [deadline, setDeadline]= useState('')
  const [cost, setCost] = useState(Number)
  
  const navigate = useNavigate();

  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value
    const finalPart = 'T00:00:00.000Z'
    setDeadline(date+finalPart)
  }


  const saveLocalStorage = (res:string, key:string) => {
    localStorage.setItem(key, JSON.stringify(res));
  };

  const handleSubmit = async ([event, name, username]:any) => {
    event.preventDefault();
    if(type=='login'){
      const login = await fetchLogin(name, username);
      if (!login.message) {
        saveLocalStorage(login.token, 'token');
        saveLocalStorage(username, 'username');
        navigate("/projects");
      } else {
        setError(login.message)
        setTimeout(()=>{
          location.reload()
        },1000)
      }
    } else if(type=='register') {
      const register = await fetchRegister(name, username);
      if (!register.message) {
        navigate("/");
      } else {
        setError(register.message)
        setTimeout(()=>{
          location.reload()
        },2300)
      }
    }
  }
  const handleCreateSubmit = async ([event, title, zip_code, deadline, cost]:any) => {
    event.preventDefault();
    if (isCreated) {
      const create = await fetchCreate(title, zip_code, deadline, cost, user, token);
      if (!create.message) {
        navigate("/projects");
      } else {
        setError(create.message)
        setTimeout(()=>{
          location.reload()
        },1500)
      }
    } else {
      
      const updated = await fetchUpdate(title, zip_code, deadline, cost, user, token, id);
      if (!updated.message) {
        navigate("/projects");
      } else {
        setError(updated.message)
        setTimeout(()=>{
          location.reload()
        },1500)
      }
    }
      
  }

  return (
    <styled.Main>
      {type!=='create'?
      <styled.Form onSubmit={(e) => handleSubmit([e, name, username])}>
        <styled.InputContainer>
          <styled.InputLabel htmlFor='name'>Nome</styled.InputLabel>
          <styled.Input id='name' onChange={ ({ target }) => setName(target.value) } placeholder='Jair Bolsonaro'/>
        </styled.InputContainer>
        <styled.InputContainer>
          <styled.InputLabel htmlFor='username'>Nome de Usuário</styled.InputLabel>
          <styled.Input id='username' onChange={ ({ target }) => setUsername(target.value) } placeholder='jair.bolsonaro'/>
          {error==''? '': <styled.inputError>{error}</styled.inputError>}
        </styled.InputContainer>
        <styled.Btn type="submit">{type=='login'? 'Entrar': 'Cadastrar'}</styled.Btn>
        <styled.Footer>
          {type=='login'?<styled.Link>
            <Link to={"/register"}>Cadastrar-se</Link>
          </styled.Link>:''}
        </styled.Footer>
        </styled.Form>
        :
        <styled.Form onSubmit={(e) => handleCreateSubmit([e, title, zip_code, deadline, cost])}>
        <styled.InputContainer>
          <styled.InputLabel htmlFor='title'>Título</styled.InputLabel>
          <styled.Input id='title' onChange={ ({ target }) => setTitle(target.value) } placeholder='titulo'/>
        </styled.InputContainer>
        <styled.InputContainer>
          <styled.InputLabel htmlFor='zip_code'>CEP</styled.InputLabel>
          <styled.Input id='zip_code' onChange={ ({ target }) => setZip_code(parseInt(target.value)) } placeholder='28930000'/>
        </styled.InputContainer>
        <styled.InputContainer>
          <styled.InputLabel htmlFor='deadline'>Data Previsão Final</styled.InputLabel>
          <styled.Input id='deadline' onChange={ (event) => handleDate(event) } placeholder='2023-12-25'/>
        </styled.InputContainer>
        <styled.InputContainer>
          <styled.InputLabel htmlFor='cost'>Custo</styled.InputLabel>
          <styled.Input id='cost' onChange={ ({ target }) => setCost(parseInt(target.value)) } placeholder='123456'/>
          {error==''? '': <styled.inputError>{error}</styled.inputError>}
        </styled.InputContainer>
        <styled.Btn type="submit">{isCreated?'Criar projeto':'Atualizar projeto'}</styled.Btn>
        <styled.Footer>
          <styled.Link>
            <Link to={"/projects"}>Voltar</Link>
          </styled.Link>
        </styled.Footer>
        </styled.Form>}
    </styled.Main>
  )  
}

export default Form