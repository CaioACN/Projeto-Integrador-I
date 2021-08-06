using cdp_app.Model;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace cdp_app.Peristencia
{

    public class ClienteDAO 
    {

        private static readonly ClienteDAO instancia = new ClienteDAO();

        public object ConexaoBD { get; private set; }

        public ClienteDAO()
        {
        }
        public static ClienteDAO GetInstance()
        {
            return instancia;
        }

        public List<nome_cliente> ExibirTodos()
        {
            throw new NotImplementedException();
        }

      

        public tb_cliente Consultar(string nome_cliente)
        {
            throw new NotImplementedException();
        }

        public void Gravar(Cliente ObjetoCliente)
        {
            try
            {
                BancoDeDados banco = new BancoDeDados();
                banco.Conectar();
                String gravar = "INSERT INTO  TB_CLIENTE (CD_CLIENTE,NOME_CLIENTE) VALUES( @CD_CLIENTE,@NOME_CLIENTE);";

                MySqlCommand objExecucao = new MySqlCommand(gravar,banco.ObjConexao);

                objExecucao.Parameters.AddWithValue("@NOME_CLIENTE", ObjetoCliente.nome);
                objExecucao.Parameters.AddWithValue("@CD_CLIENTE", ObjetoCliente.cd_cliente);

                objExecucao.ExecuteNonQuery();
                banco.Desconectar();
            }
            catch (Exception error)
            {
                Console.WriteLine(error);
            }

        }
    }
}