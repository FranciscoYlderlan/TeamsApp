import { styled } from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`
export const Content = styled.View`
  gap: 24px;
  width: 100%;
  flex: 1;

  align-items: center;
  justify-content: center;
`
