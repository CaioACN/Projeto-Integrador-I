using cdp_app.Model;
using cdp_app.Peristencia;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cdp_app.Negocio
{
    public class ClienteService
    {

        public ClienteDAO clienteDAO;

        public ClienteService()
        {
           clienteDAO = new ClienteDAO();
        }        

        public String cadastrarNovoCliente(Cliente cliente)
        {
            var resultado = clienteDAO.Consultar(cliente.nome);
            if( resultado == null)
            {
                clienteDAO.Gravar(cliente);

                return "Cadastro do cliente realizado com sucesso.";
            }
            else
            {
                return "Cliente já cadastrado.";
            }
        }

    }
}
