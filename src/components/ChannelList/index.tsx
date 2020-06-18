import React from 'react';
import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';
const ChannelList: React.FC = () => {
  return(
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-pessoal"/>
      <ChannelButton channelName="chat-profissional"/>
      <ChannelButton channelName="chat-gamer"/>
      <ChannelButton channelName="chat-minecraft"/>
    </Container>
  );
};

export default ChannelList;
