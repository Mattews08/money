import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { Container } from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
};
