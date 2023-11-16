import { useState } from 'react'
import { FlatList } from 'react-native'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Container, Transactions } from './styles'
import { EmployesDTO } from '../../storage/EmployesDTO'
import { TransactionEmployes } from '../../components/TransactionEmployes'

export function Dashboard() {
  const [name, setName] = useState('')
  const [occupation, setOccupation] = useState('')
  const [salary, setSalary] = useState('')
  const [employes, setEmployes] =
    useState<EmployesDTO[]>([])

  function handleAddNewEmploye() {
    const data = {
      id: String(new Date().getTime()),
      nameEmploye: name,
      occupation,
      salary: parseFloat(salary)
    }
    setName('')
    setOccupation('')
    setSalary('')
    setEmployes([...employes, data])
  }

  return (
    <Container
    >
      <Header title='Cadastro de Funcionários' />

      <Input
        placeholder='Nome'
        placeholderTextColor='#363F5F'
        value={name}
        onChangeText={value => setName(value)}
      />

      <Input
        placeholder='Função'
        placeholderTextColor='#363F5F'
        value={occupation}
        onChangeText={value => setOccupation(value)}
      />

      <Input
        placeholder='Salário'
        placeholderTextColor='#363F5F'
        value={salary}
        onChangeText={value => setSalary(value)}
      />

      <Button
        title='Adicionar'
        onPress={handleAddNewEmploye}
      />

      <Transactions>
        <FlatList
          data={employes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TransactionEmployes
              data={item}
            />
          )}
        />
      </Transactions>

    </Container>
  )
}

