import { Container, Content } from './styles'

import { Header } from '@components/Header'
import { Highlights } from '@components/Highlights'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function Create() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Highlights
          showIcon
          title="Nova turma"
          description="crie uma turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" />
      </Content>
    </Container>
  )
}
