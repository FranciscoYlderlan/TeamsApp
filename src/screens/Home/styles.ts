import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
`
export const List = styled.FlatList.attrs(() => ({}))`
  margin-top: 30px;
`
