import React, { useState } from "react";
import { Platform } from "react-native";

import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles'

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');

  return (
    <Background>
      <Container
        behavior={ Platform.OS === 'ios' ? 'padding': '' }
        enabled
      >

        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChange={ (text) => setNome(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChange={ (text) => setEmail(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChange={ (text) => setPassword(text) }
          />
        </AreaInput>
      <SubmitButton>
        <SubmitText>Cadastrar</SubmitText>
      </SubmitButton>

      </Container>
    </Background>
  )
}