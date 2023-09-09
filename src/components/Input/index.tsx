import { Container, InputText, Icon, Submit } from './styles'

interface inputProps {
  showIcon?: boolean
  text: string
}
export function Input({ showIcon = false, search }: inputProps) {
  return (
    <Container>
      <InputText>{search}</InputText>
      {showIcon && (
        <Submit>
          <Icon />
        </Submit>
      )}
    </Container>
  )
}
