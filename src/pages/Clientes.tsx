import { useState } from 'react'

function Clientes({ clientes, setClientes }) {
  const [novoCliente, setNovoCliente] = useState({
    nome: '',
    telefone: '',
    endereco: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNovoCliente({ ...novoCliente, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setClientes([...clientes, { ...novoCliente, id: Date.now() }])
    setNovoCliente({
      nome: '',
      telefone: '',
      endereco: '',
    })
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Novo Cliente</h2>

      {/* Formulário Novo Cliente */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome Completo</label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={novoCliente.nome}
              onChange={handleChange}
              placeholder="Nome do cliente"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone</label>
            <input
              type="text"
              name="telefone"
              id="telefone"
              value={novoCliente.telefone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="endereco" className="block text-sm font-medium text-gray-700">Endereço</label>
            <textarea
              name="endereco"
              id="endereco"
              value={novoCliente.endereco}
              onChange={handleChange}
              placeholder="Endereço completo"
              rows="2"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Adicionar Cliente
            </button>
          </div>
        </form>
      </div>

      {/* Clientes Cadastrados */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Clientes Cadastrados ({clientes.length})</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Nome</th>
                <th className="py-2 px-4 border-b text-left">Telefone</th>
                <th className="py-2 px-4 border-b text-left">Endereço</th>
                <th className="py-2 px-4 border-b text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              {clientes.length === 0 ? (
                <tr>
                  <td colSpan="4" className="py-4 text-center text-gray-500">Nenhum cliente cadastrado ainda</td>
                </tr>
              ) : (
                clientes.map((cliente) => (
                  <tr key={cliente.id}>
                    <td className="py-2 px-4 border-b">{cliente.nome}</td>
                    <td className="py-2 px-4 border-b">{cliente.telefone}</td>
                    <td className="py-2 px-4 border-b">{cliente.endereco}</td>
                    <td className="py-2 px-4 border-b">
                      <button className="text-blue-600 hover:text-blue-900">Editar</button>
                    </td>
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

export default Clientes