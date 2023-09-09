import LogoImg from '@assets/logo.png'
import { Container, Logo, ArrowLeft, ButtonGoBack } from './styles'
import CaretLeft from '@assets/caret-left.png'

interface headerProps {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: headerProps) {
  return (
    <Container>
      {showBackButton && (
        <ButtonGoBack>
          <ArrowLeft source={CaretLeft} />
        </ButtonGoBack>
      )}
      <Logo source={LogoImg} />
    </Container>
  )
}
