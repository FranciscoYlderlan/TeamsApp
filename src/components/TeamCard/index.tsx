import { Container, Icon, Name } from './styles.ts'
import { TouchableOpacityProps } from 'react-native'
import PersonFill from '@assets/person-fill.png'

// relativo a: type teamCardProps = TouchableOpacityProps & {...}

interface teamCardProps extends TouchableOpacityProps {
  name: string
}

export function TeamCard({ name, ...rest }: teamCardProps) {
  return (
    <Container {...rest}>
      <Icon source={PersonFill} />
      <Name>{name}</Name>
    </Container>
  )
}
