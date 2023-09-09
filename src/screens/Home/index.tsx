import { Highlights } from '@components/Highlights'
import { Container } from './styles'
import { Header } from '@components/Header'
export function Home() {
  return (
    <Container>
      <Header showBackButton />
      <Highlights showIcon title="Turmas" description="Jogue com a sua turma" />
    </Container>
  )
}
