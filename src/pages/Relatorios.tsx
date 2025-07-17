function Relatorios() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Relatórios</h2>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Relatório de Serviços Pendentes</h3>
        <p className="text-gray-600">Conteúdo para serviços pendentes será exibido aqui.</p>
        {/* Tabela ou lista de serviços pendentes */}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Relatório de Serviços Pagos</h3>
        <p className="text-gray-600">Conteúdo para serviços pagos será exibido aqui.</p>
        {/* Tabela ou lista de serviços pagos */}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Relatório de Recebimentos</h3>
        <p className="text-gray-600">Detalhes dos recebimentos serão exibidos aqui.</p>
        {/* Tabela ou lista de recebimentos */}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Relatório de Valores Baixados</h3>
        <p className="text-gray-600">Detalhes dos valores baixados (abatidos) serão exibidos aqui.</p>
        {/* Tabela ou lista de valores baixados */}
      </div>
    </div>
  )
}

export default Relatorios