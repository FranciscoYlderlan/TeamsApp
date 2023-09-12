import { styled } from 'styled-components/native'

export const Container = styled.SafeAreaView`
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`

export const PlusIcon = styled.Image``

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding-right: 16px;
  margin: 24px 0 16px;
`

export const Content = styled.View`
  flex: 1;
  border: solid red 1px;
`

export const List = styled.FlatList.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  /* margin-top: 30px; */
  border: solid red 1px;
`

export const PlusButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))``
