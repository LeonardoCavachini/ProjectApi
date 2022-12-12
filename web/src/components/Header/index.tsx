import * as styled from './styles';
import { BiLogOut } from "react-icons/bi";
import {  useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  return (
    <styled.box>
      <styled.title>Project Manager</styled.title>
      <styled.icon onClick={() => navigate('/') }><BiLogOut size={25}/></styled.icon>
    </styled.box>
  )
}

export default Header