import { Container } from './styles'

import { Header } from '@components/Header'
import { Highlights } from '@components/Highlights'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function Create() {
  return (
    <Container>
      <Header />
      <Highlights
        title="Nova turma"
        description="crie uma turma para adicionar pessoas"
      />
      <Input placeholder="Nome da turma" />
      <Button title="Criar" />
    </Container>
  )
}
