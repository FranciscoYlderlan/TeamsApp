import { Container, Icon, Name } from 'styles.ts'
import PersonFill from '@assets/person-fill.png'

interface teamProps {
  title: string
  icon: string
}

export function Team({ title }: teamProps) {
  return (
    <Container>
      <Icon source={PersonFill} />
      <Name>{title}</Name>
    </Container>
  )
}
