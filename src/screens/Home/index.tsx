import { Container } from './styles'

import { Header } from '@components/Header'
import { Highlights } from '@components/Highlights'
import { List } from '@components/List'

export function Home() {
  return (
    <Container>
      <Header showBackButton />
      <Highlights showIcon title="Turmas" description="Jogue com a sua turma" />
      <List />
    </Container>
  )
}
