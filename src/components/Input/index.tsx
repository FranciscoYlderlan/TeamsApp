import { Container, InputText, Icon, Submit } from './styles'

interface inputProps {
  showButton?: boolean
}
export function Input({ showButton = false, ...rest }: inputProps) {
  return (
    <Container>
      <InputText {...rest} />
      {showButton && (
        <Submit>
          <Icon />
        </Submit>
      )}
    </Container>
  )
}
