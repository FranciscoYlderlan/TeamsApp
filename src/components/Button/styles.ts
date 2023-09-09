import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECUNDARY'

type Props = {
  type: ButtonTypeStyleProps
}

export const Title = styled.Text``

export const Container = styled.TouchableOpacity<Props>`
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`
