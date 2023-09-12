import { TouchableOpacityProps } from 'react-native'

import { Container, Title, FilterStyleProps } from './styles.ts'

type TabProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string
  }

export function Tab({ title, isActive = false, ...rest }: TabProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
