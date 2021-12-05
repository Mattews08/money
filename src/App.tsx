import { useState } from "react";
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import Modal from "react-modal";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./Components/NewTransactionModal";
import { TransactionsProvider } from "./Components/hooks/useTransaction";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
