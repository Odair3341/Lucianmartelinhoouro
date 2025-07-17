function Relatorios({ clientes }) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Relatórios</h2>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Relatório de Clientes</h3>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Imprimir
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Nome</th>
                <th className="py-2 px-4 border-b text-left">Telefone</th>
                <th className="py-2 px-4 border-b text-left">Endereço</th>
              </tr>
            </thead>
            <tbody>
              {clientes.length === 0 ? (
                <tr>
                  <td colSpan="3" className="py-4 text-center text-gray-500">
                    Nenhum cliente cadastrado ainda
                  </td>
                </tr>
              ) : (
                clientes.map((cliente) => (
                  <tr key={cliente.id}>
                    <td className="py-2 px-4 border-b">{cliente.nome}</td>
                    <td className="py-2 px-4 border-b">{cliente.telefone}</td>
                    <td className="py-2 px-4 border-b">{cliente.endereco}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Relatorios