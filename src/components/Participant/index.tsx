import { Ionicons } from '@expo/vector-icons'
import { Container, CrossIcon, Name } from './styles'
import CrossIconImg from '@assets/cross-icon.png'
interface participantProps {
  name: string
}

export function Participant({ name }: participantProps) {
  return (
    <Container>
      <Ionicons name="md-person-sharp" size={24} color="white" />
      <Name>{name}</Name>
      <CrossIcon source={CrossIconImg} />
    </Container>
  )
}
