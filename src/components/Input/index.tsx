import { Container, InputText, Icon, Submit } from './styles'
import { TextProps } from 'react-native'
interface inputProps extends TextProps {
  showButton?: boolean
}
export function Input({ showButton = false, ...rest }: inputProps) {
  return (
    <Container {...rest}>
      {showButton && (
        <Submit>
          <Icon />
        </Submit>
      )}
    </Container>
  )
}
