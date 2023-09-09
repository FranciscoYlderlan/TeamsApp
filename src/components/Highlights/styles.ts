import styled from 'styled-components/native'

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`
export const Title = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Description = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const PersonIcon = styled.Image``
