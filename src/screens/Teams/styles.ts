import { styled } from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`
export const List = styled.FlatList.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  margin-top: 30px;
  width: 100%;
`
