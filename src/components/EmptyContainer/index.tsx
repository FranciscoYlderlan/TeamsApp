import { Container, Message } from './styles.ts'

interface emptyContainerProps {
  message: string
}

export function EmptyContainer({ message }: emptyContainerProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}
