using cdp_app.Model;
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

        public void Gravar(Cliente obj)
        {
            throw new NotImplementedException();
        }

        public tb_cliente Consultar(string nome_cliente)
        {
            throw new NotImplementedException();
        }

        public void Gravar(nome_cliente obj)
        {
            throw new NotImplementedException();
        }
    }
}