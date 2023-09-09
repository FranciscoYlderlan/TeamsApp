/* eslint-disable camelcase */
import { ThemeProvider } from 'styled-components/native'
import { Home } from '@screens/Home'
import { theme } from '@styles/theme'
import { Loading } from '@components/Loading'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <Loading />}
      <StatusBar translucent style="light" />
    </ThemeProvider>
  )
}
