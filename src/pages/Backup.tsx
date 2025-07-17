import { useState } from 'react'

function Backup({ clientes, setClientes }) {
  const [file, setFile] = useState(null)

  const handleBackup = () => {
    const data = {
      clientes,
      // Add other data to backup here
    }

    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'backup.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleRestore = (e) => {
    const fileReader = new FileReader()
    fileReader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result)
        if (data.clientes) {
          setClientes(data.clientes)
          alert('Backup restaurado com sucesso!')
        } else {
          alert('Arquivo de backup inválido.')
        }
      } catch (error) {
        alert('Erro ao ler o arquivo de backup.')
      }
    }
    fileReader.readAsText(e.target.files[0])
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Backup e Restauração</h2>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Gerenciar Dados</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium">Backup</h4>
            <p className="text-gray-600 mb-2">
              Crie uma cópia de segurança dos seus dados. O arquivo será salvo
              no formato JSON.
            </p>
            <button
              onClick={handleBackup}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Fazer Backup
            </button>
          </div>
          <div>
            <h4 className="text-lg font-medium">Restauração</h4>
            <p className="text-gray-600 mb-2">
              Restaure seus dados a partir de um arquivo de backup.
            </p>
            <input
              type="file"
              accept=".json"
              onChange={handleRestore}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backup