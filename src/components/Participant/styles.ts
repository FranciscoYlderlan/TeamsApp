import { styled } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  width: 100%;

  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  margin-bottom: 8px;
  padding: 12px 16px;
  padding-right: 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`
export const Content = styled.View`
  flex-direction: row;
  flex: 1;

  align-items: center;
  justify-content: flex-start;

  gap: 16px;
`
export const CrossIcon = styled.Image``

export const Name = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const DeleteButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))``
