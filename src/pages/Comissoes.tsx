import { useState } from 'react'

function Comissoes() {
  const [comissoes, setComissoes] = useState([])
  const [novaComissao, setNovaComissao] = useState({
    valor: '',
    data: new Date().toISOString().split('T')[0],
    descricao: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNovaComissao({ ...novaComissao, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setComissoes([...comissoes, { ...novaComissao, id: Date.now() }])
    setNovaComissao({
      valor: '',
      data: new Date().toISOString().split('T')[0],
      descricao: '',
    })
  }

  const handleDelete = (id) => {
    setComissoes(comissoes.filter(comissao => comissao.id !== id))
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Nova Comissão</h2>

      {/* Formulário Nova Comissão */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="valorComissao" className="block text-sm font-medium text-gray-700">Valor da Comissão (R$)</label>
            <input
              type="number"
              name="valor"
              id="valorComissao"
              value={novaComissao.valor}
              onChange={handleChange}
              placeholder="0,00"
              step="0.01"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="dataComissao" className="block text-sm font-medium text-gray-700">Data</label>
            <input
              type="date"
              name="data"
              id="dataComissao"
              value={novaComissao.data}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="descricaoComissao" className="block text-sm font-medium text-gray-700">Descrição</label>
            <textarea
              name="descricao"
              id="descricaoComissao"
              value={novaComissao.descricao}
              onChange={handleChange}
              placeholder="Ex: Comissão vendedor João"
              rows="2"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Registrar Comissão
            </button>
          </div>
        </form>
      </div>

      {/* Comissões Registradas */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Comissões Registradas ({comissoes.length})</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Data</th>
                <th className="py-2 px-4 border-b text-left">Descrição</th>
                <th className="py-2 px-4 border-b text-left">Valor</th>
                <th className="py-2 px-4 border-b text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              {comissoes.length === 0 ? (
                <tr>
                  <td colSpan="4" className="py-4 text-center text-gray-500">Nenhuma comissão registrada ainda</td>
                </tr>
              ) : (
                comissoes.map((comissao) => (
                  <tr key={comissao.id}>
                    <td className="py-2 px-4 border-b">{comissao.data}</td>
                    <td className="py-2 px-4 border-b">{comissao.descricao}</td>
                    <td className="py-2 px-4 border-b">R$ {parseFloat(comissao.valor).toFixed(2)}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleDelete(comissao.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Excluir
                      </button>
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

export default Comissoes