// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TouchableOpacityProps } from 'react-native'
import { Container, Title, ButtonTypeStyleProps } from './styles.ts'

interface buttonProps extends TouchableOpaciteProps {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'PRIMARY', ...rest }: buttonProps) {
  return (
    <Container type={type} activeOpacity={0.7} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
