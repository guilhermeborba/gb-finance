import { Container } from "./style";

export function TransactionsTable() {

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$ 12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdrown">- R$ 1100,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>Computador</td>
                        <td className="deposit">R$ 5000,00</td>
                        <td>Venda</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>Almoço</td>
                        <td className="withdrown">- R$ 59,00</td>
                        <td>Alimentação</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>Salário</td>
                        <td className="deposit">R$ 5000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
    
}