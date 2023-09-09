import { Container, PersonIcon, Description, Title } from './styles'
import PersonRegular from '@assets/person-regular.png'

interface highlightsProps {
  showIcon?: boolean
  title: string
  description: string
}
export function Highlights({
  showIcon = false,
  title,
  description,
}: highlightsProps) {
  return (
    <Container>
      {showIcon && <PersonIcon source={PersonRegular} />}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}
