import { Container, List } from './styles'

import { Header } from '@components/Header'
import { Highlights } from '@components/Highlights'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Participant } from '@components/Participant'
import { EmptyContainer } from '@components/EmptyContainer'

import { useState } from 'react'

export function Teams() {
  const [members, setMembers] = useState<string[]>(['Eduardo', 'Gabriel'])
  return (
    <Container>
      <Header />
      <Highlights
        title="Nome da turma"
        description="adicione a galera e separe os times"
      />
      <Input placeholder="Nome da turma" />
      <List
        data={members}
        keyExtractor={(item: string) => item}
        renderItem={({ item }) => <Participant name={item} />}
        contentContainerStyle={members.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyContainer message="Nenhum participante cadastrado" />
        )}
      />
      <Button type="SECUNDARY" title="Remover turma" />
    </Container>
  )
}
