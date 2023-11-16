import { EmployesDTO }
  from "../../storage/EmployesDTO";
import { inss, irf, transportVoucher, salaryReceived } from "../../util/calculate";
import {
  Container,
  Cabec,
  Name,
  Occupation,
  Footer,
  FooterData,
  Amount,
} from "./styles";

type Props = {
  data: EmployesDTO
}

export function TransactionEmployes({ data }: Props) {
  return (
    <Container>
      <Cabec>Nome</Cabec>
      <Name>{data.nameEmploye}</Name>

      <Footer>
        <Cabec>Função</Cabec>
        <Cabec>Salário</Cabec>
      </Footer>

      <FooterData>
        <Occupation>{data.occupation}</Occupation>
        <Amount>R$ {data.salary}</Amount>
      </FooterData>

      <Footer>
        <Cabec>INSS</Cabec>
        <Cabec>IRF</Cabec>
      </Footer>

      <FooterData>
        <Amount>R$ {inss(data.salary)}</Amount>
        <Amount>R$ {irf(data.salary)}</Amount>
      </FooterData>

      <Footer>
        <Cabec>Vale Transporte</Cabec>
        <Cabec>Salario Liquido</Cabec>
      </Footer>

      <FooterData>
        <Amount>R$ {transportVoucher(data.salary)}</Amount>
        <Amount>R$ {salaryReceived(data.salary)}</Amount>
      </FooterData>

    </Container>
  )
}
