import { useState } from 'react'

function Servicos({ clientes }) {
  const [servicos, setServicos] = useState([])
  const [novoServico, setNovoServico] = useState({
    cliente: '',
    veiculo: '',
    placa: '',
    descricao: '',
    observacoes: '',
    valorBruto: '',
    porcentagemComissao: '',
    data: new Date().toISOString().split('T')[0],
    status: 'Pendente',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNovoServico({ ...novoServico, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const valorLiquido = (parseFloat(novoServico.valorBruto) * (1 - parseFloat(novoServico.porcentagemComissao) / 100)).toFixed(2)
    setServicos([...servicos, { ...novoServico, id: Date.now(), valorLiquido }])
    setNovoServico({
      cliente: '',
      veiculo: '',
      placa: '',
      descricao: '',
      observacoes: '',
      valorBruto: '',
      porcentagemComissao: '',
      data: new Date().toISOString().split('T')[0],
      status: 'Pendente',
    })
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Novo Serviço</h2>

      {/* Formulário Novo Serviço */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="cliente" className="block text-sm font-medium text-gray-700">Cliente</label>
            {clientes.length > 0 ? (
              <select
                name="cliente"
                id="cliente"
                value={novoServico.cliente}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecionar cliente cadastrado</option>
                {clientes.map((cliente) => (
                  <option key={cliente.id} value={cliente.nome}>{cliente.nome}</option>
                ))}
                <option value="outro">Outro (digitar nome)</option>
              </select>
            ) : (
              <input
                type="text"
                name="cliente"
                id="cliente"
                value={novoServico.cliente}
                onChange={handleChange}
                placeholder="Digite o nome do cliente"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            )}
            {novoServico.cliente === 'outro' && (
              <input
                type="text"
                name="cliente"
                value={novoServico.cliente !== 'outro' ? novoServico.cliente : ''}
                onChange={handleChange}
                placeholder="Digite o nome do novo cliente"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            )}
          </div>
          <div>
            <label htmlFor="veiculo" className="block text-sm font-medium text-gray-700">Veículo</label>
            <input
              type="text"
              name="veiculo"
              id="veiculo"
              value={novoServico.veiculo}
              onChange={handleChange}
              placeholder="Marca, modelo, ano, cor"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="placa" className="block text-sm font-medium text-gray-700">Placa</label>
            <input
              type="text"
              name="placa"
              id="placa"
              value={novoServico.placa}
              onChange={handleChange}
              placeholder="ABC-1234"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">Descrição do Serviço</label>
            <input
              type="text"
              name="descricao"
              id="descricao"
              value={novoServico.descricao}
              onChange={handleChange}
              placeholder="Ex: Funilaria porta dianteira"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700">Observações</label>
            <textarea
              name="observacoes"
              id="observacoes"
              value={novoServico.observacoes}
              onChange={handleChange}
              placeholder="Observações adicionais"
              rows="3"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div>
            <label htmlFor="valorBruto" className="block text-sm font-medium text-gray-700">Valor Bruto</label>
            <input
              type="number"
              name="valorBruto"
              id="valorBruto"
              value={novoServico.valorBruto}
              onChange={handleChange}
              placeholder="0,00"
              step="0.01"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="porcentagemComissao" className="block text-sm font-medium text-gray-700">Comissão (%)</label>
            <input
              type="number"
              name="porcentagemComissao"
              id="porcentagemComissao"
              value={novoServico.porcentagemComissao}
              onChange={handleChange}
              placeholder="Ex: 17.5"
              step="0.1"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="data" className="block text-sm font-medium text-gray-700">Data do Serviço</label>
            <input
              type="date"
              name="data"
              id="data"
              value={novoServico.data}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
            <select
              name="status"
              id="status"
              value={novoServico.status}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Pendente">Pendente</option>
              <option value="Liquidado parcialmente">Liquidado parcialmente</option>
              <option value="Valor pago total">Valor pago total</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Adicionar Serviço
            </button>
          </div>
        </form>
      </div>

      {/* Serviços Realizados */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Serviços Realizados ({servicos.length})</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Data</th>
                <th className="py-2 px-4 border-b text-left">Cliente</th>
                <th className="py-2 px-4 border-b text-left">Veículo</th>
                <th className="py-2 px-4 border-b text-left">Placa</th>
                <th className="py-2 px-4 border-b text-left">Valor Bruto</th>
                <th className="py-2 px-4 border-b text-left">Comissão%</th>
                <th className="py-2 px-4 border-b text-left">Comissão a Receber</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
                <th className="py-2 px-4 border-b text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              {servicos.length === 0 ? (
                <tr>
                  <td colSpan="9" className="py-4 text-center text-gray-500">Nenhum serviço realizado ainda</td>
                </tr>
              ) : (
                servicos.map((servico) => (
                  <tr key={servico.id}>
                    <td className="py-2 px-4 border-b">{servico.data}</td>
                    <td className="py-2 px-4 border-b">{servico.cliente}</td>
                    <td className="py-2 px-4 border-b">{servico.veiculo}</td>
                    <td className="py-2 px-4 border-b">{servico.placa}</td>
                    <td className="py-2 px-4 border-b">{parseFloat(servico.valorBruto).toFixed(2)}</td>
                    <td className="py-2 px-4 border-b">{servico.porcentagemComissao}%</td>
                    <td className="py-2 px-4 border-b">{servico.valorLiquido}</td>
                    <td className="py-2 px-4 border-b">{servico.status}</td>
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

export default Servicos