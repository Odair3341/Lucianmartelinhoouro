function Dashboard() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">Saldo Atual</h3>
          <p className="text-3xl font-bold text-green-600">R$ 0,00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">Total Serviços</h3>
          <p className="text-3xl font-bold text-blue-600">R$ 0,00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">Recebido</h3>
          <p className="text-3xl font-bold text-purple-600">R$ 0,00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">Pendente</h3>
          <p className="text-3xl font-bold text-yellow-600">R$ 0,00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">Comissões</h3>
          <p className="text-3xl font-bold text-red-600">R$ 0,00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">Despesas</h3>
          <p className="text-3xl font-bold text-gray-600">R$ 0,00</p>
        </div>
      </div>

      {/* Latest Services Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Últimos Serviços</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Cliente</th>
                <th className="py-2 px-4 border-b text-left">Serviço</th>
                <th className="py-2 px-4 border-b text-left">Valor</th>
                <th className="py-2 px-4 border-b text-left">Comissão</th>
                <th className="py-2 px-4 border-b text-left">Data</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row - will be dynamic later */}
              <tr>
                <td className="py-2 px-4 border-b">Cliente Exemplo</td>
                <td className="py-2 px-4 border-b">Martelinho de Ouro</td>
                <td className="py-2 px-4 border-b">R$ 150,00</td>
                <td className="py-2 px-4 border-b">R$ 30,00</td>
                <td className="py-2 px-4 border-b">10/07/2025</td>
                <td className="py-2 px-4 border-b">Pago</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard