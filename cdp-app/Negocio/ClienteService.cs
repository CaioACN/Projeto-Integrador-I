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

        private ClienteDAO clienteDAO;

        public ClienteService()
        {
           clienteDAO = new ClienteDAO();
        }        

        public String cadastrarNovoCliente(Cliente cliente)
        {
            Cliente resultado = clienteDAO.buscarPorNome(cliente.Nome);
            if( resultado == null)
            {
                clienteDAO.salvar(cliente);

                return "Cadastro do cliente realizado com sucesso.";
            }
            else
            {
                return "Cliente já cadastrado.";
            }
        }

    }
}
