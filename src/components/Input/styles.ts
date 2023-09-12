import { styled } from 'styled-components/native'

export const Container = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_200,
}))`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 6px;
  padding: 16px;
`

export const Submit = styled.TouchableOpacity``

export const Icon = styled.Image``
