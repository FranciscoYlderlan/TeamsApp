import { Container } from './styles'

import { Header } from '@components/Header'
import { Highlights } from '@components/Highlights'
import { Input } from '@components/Input'
import { List } from '@components/List'
import { Button } from '@components/Button'

export function Teams() {
  return (
    <Container>
      <Header />
      <Highlights
        title="Nome da turma"
        description="adicione a galera e separe os times"
      />
      <Input placeholder="Nome da turma" />
      <List />
      <List />
      <Button type="SECUNDARY" title="Remover turma" />
    </Container>
  )
}
