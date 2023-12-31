import { TouchableOpacity } from 'react-native'
import { styled } from 'styled-components/native'

export const Icon = styled.Image``

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const Container = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.7,
}))`
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  padding: 32px 24px;
  border-radius: 6px;
  margin-bottom: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`
