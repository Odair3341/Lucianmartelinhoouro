import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Servicos from './pages/Servicos'
import Clientes from './pages/Clientes'
import Comissoes from './pages/Comissoes'
import Despesas from './pages/Despesas'
import Relatorios from './pages/Relatorios'
import Backup from './pages/Backup'

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard')
  const [clientes, setClientes] = useState([]) // Centralized client state

  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard />
      case 'Serviços':
        return <Servicos clientes={clientes} /> // Pass clients to Servicos
      case 'Clientes':
        return <Clientes clientes={clientes} setClientes={setClientes} /> // Pass clients and setter to Clientes
      case 'Comissões':
        return <Comissoes />
      case 'Despesas':
        return <Despesas />
      case 'Relatórios':
        return <Relatorios clientes={clientes} />
      case 'Backup':
        return <Backup clientes={clientes} setClientes={setClientes} />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Oliveira Martelinho
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="block p-2 rounded hover:bg-gray-700" onClick={() => setCurrentPage('Dashboard')}>Dashboard</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700" onClick={() => setCurrentPage('Serviços')}>Serviços</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700" onClick={() => setCurrentPage('Clientes')}>Clientes</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700" onClick={() => setCurrentPage('Comissões')}>Comissões</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700" onClick={() => setCurrentPage('Despesas')}>Despesas</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700" onClick={() => setCurrentPage('Relatórios')}>Relatórios</a>
          <a href="#" className="block p-2 rounded hover:bg-gray-700" onClick={() => setCurrentPage('Backup')}>Backup</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <h1 className="text-xl font-semibold">{currentPage}</h1>
          {/* Add user info or other header elements here */}
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}

export default App