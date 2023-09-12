import { Container, List, PlusIcon, Form, PlusButton, Content } from './styles'

import { Header } from '@components/Header'
import { Highlights } from '@components/Highlights'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Participant } from '@components/Participant'
import { EmptyContainer } from '@components/EmptyContainer'
import { Tab } from '@components/Tab'

import PlusIconImg from '@assets/plus-icon.png'

import { FlatList } from 'react-native'

import { useState } from 'react'

export function Teams() {
  const [members, setMembers] = useState<string[]>(['Eduardo', 'Gabriel'])
  return (
    <Container>
      <Content>
        <Header showBackButton />
        <Highlights
          title="Nome da turma"
          description="adicione a galera e separe os times"
        />
        <Form>
          <Input placeholder="Nome da turma" />
          <PlusButton>
            <PlusIcon source={PlusIconImg} />
          </PlusButton>
        </Form>
        <List
          data={members}
          keyExtractor={(item: string) => item}
          renderItem={({ item }) => <Participant name={item} />}
          contentContainerStyle={members.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <EmptyContainer message="Nenhum participante cadastrado" />
          )}
        />
        <List
          data={['Foundation', 'Mastery']}
          keyExtractor={(item: string) => item}
          renderItem={({ item }) => <Tab title={item} />}
        />
      </Content>

      <Button type="SECUNDARY" title="Remover turma" />
    </Container>
  )
}
