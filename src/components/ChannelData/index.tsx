import React, { useRef, useEffect } from 'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';
const ChannelData: React.FC = () => {

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div){
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return(
    <Container>

      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Leandro Real"
          date="20/04/2020"
          content="Fala Dev... Já tomou um café, então bora codar"
        />
        <ChannelMessage
          author="Cabrunco Fei da Peste"
          date="12/01/2020"
          content={
            <>
              <Mention>@Leandro Real</Mention>, vai trabalha mizeravi preguiçoso...
            </>
          }
        />
        <ChannelMessage
          author="Leandro Real"
          date="22/11/2020"
          content="Força que falta pouco pra acabar"
        />
        <ChannelMessage
          author="Joãozinho Gameplay"
          date="01/01/2021"
          content={<><Mention>@Leandro Real</Mention>,Aeee Galera, acabou samerda já prepara que lá vem mais</>}
        />
        <ChannelMessage
          author="Pessoa Anonima"
          date="02/05/2020"
          content="Hmm, uma mensagem aleatória pra completar a página"
        />
        <ChannelMessage
          author="Pessoa Anonima"
          date="02/05/2020"
          content="Hmm, uma mensagem aleatória pra completar a página"
        />
        <ChannelMessage
          author="Pessoa Anonima"
          date="02/05/2020"
          content="Hmm, uma mensagem aleatória pra completar a página"
        />
        <ChannelMessage
          author="Pessoa Anonima"
          date="02/05/2020"
          content="Hmm, uma mensagem aleatória pra completar a página"
        />
        <ChannelMessage
          author="Pessoa Anonima"
          date="02/05/2020"
          content="Hmm, uma mensagem aleatória pra completar a página"
        />
        <ChannelMessage
          author="Pessoa Anonima"
          date="02/05/2020"
          content="Hmm, uma mensagem aleatória pra completar a página"
        />
        <ChannelMessage
          author="Pessoa Anonima"
          date="02/05/2020"
          content="Hmm, uma mensagem aleatória pra completar a página"
        />

      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em chat-livre"/>
        <InputIcon/>
      </InputWrapper>

    </Container>
  );
}

export default ChannelData;
