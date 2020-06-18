import React from 'react';
import { Container, Role, User, Avatar } from './styles';

export interface Props {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<Props> = ({ nickname }) =>{
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
}

const UserList: React.FC = () => {
  return(
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Leandro Real"/>

      <Role>Offline - 15</Role>
      <UserRow nickname="Joaozinho Avilar" isBot/>
      <UserRow nickname="José das Moita"/>
      <UserRow nickname="Luan Gameplay"/>
      <UserRow nickname="Agaragan" isBot/>
      <UserRow nickname="Mudinho123"/>
      <UserRow nickname="Joaozinho Avilar" isBot/>
      <UserRow nickname="José das Moita"/>
      <UserRow nickname="Luan Gameplay"/>
      <UserRow nickname="Agaragan" isBot/>
      <UserRow nickname="Mudinho123"/>
      <UserRow nickname="Joaozinho Avilar" isBot/>
      <UserRow nickname="José das Moita"/>
      <UserRow nickname="Luan Gameplay"/>
      <UserRow nickname="Agaragan" isBot/>
      <UserRow nickname="Mudinho123"/>
    </Container>
  );
};

export default UserList;
