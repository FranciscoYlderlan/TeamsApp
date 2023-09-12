import { Container, List } from './styles'

import { Header } from '@components/Header'
import { Highlights } from '@components/Highlights'
import { TeamCard } from '@components/TeamCard'
import { EmptyContainer } from '@components/EmptyContainer'
import { Button } from '@components/Button'

import { useState } from 'react'

export function Home() {
  const [teams, setTeams] = useState<string[]>(['Foundation', 'Mastery'])

  return (
    <Container>
      <Header showBackButton />
      <Highlights showIcon title="Turmas" description="Jogue com a sua turma" />
      <List
        data={teams}
        keyExtractor={(item: string) => item}
        renderItem={({ item }) => <TeamCard name={item} />}
        contentContainerStyle={teams.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyContainer message="Cadastre sua primeira turma" />
        )}
      />
      <Button title="Criar nova turma" />
    </Container>
  )
}
