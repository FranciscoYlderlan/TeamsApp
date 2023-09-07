import { styled } from 'styled-components/native'

export const Container = styled.Text`
  flex: 1;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.};
`
