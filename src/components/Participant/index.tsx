import { Ionicons } from '@expo/vector-icons'
import { Container, CrossIcon, Name, Content, DeleteButton } from './styles'
import CrossIconImg from '@assets/cross-icon.png'
interface participantProps {
  name: string
}

export function Participant({ name }: participantProps) {
  return (
    <Container>
      <Content>
        <Ionicons name="md-person-sharp" size={24} color="#c4c4cc" />
        <Name>{name}</Name>
      </Content>
      <DeleteButton>
        <CrossIcon source={CrossIconImg} />
      </DeleteButton>
    </Container>
  )
}
