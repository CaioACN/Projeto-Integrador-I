using cdp_app.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cdp_app.Peristencia
{
    public class ClienteDAO
    {
        private List<Cliente> dadosCliente;
        
        public ClienteDAO()
        {
            dadosCliente = new List<Cliente>();

        }

        public void salvar(Cliente c)
        {
            dadosCliente.Add(c);
            Console.WriteLine(dadosCliente.Count);
            Console.WriteLine(c.Agencia);
            Console.WriteLine(c.Nome);
            Console.WriteLine(c.CodigoDoCliente);
        }

        public Cliente buscarPorNome(string nome)
        {
            Cliente y;
            for (int i = 0; i < dadosCliente.Count; i++)
            {
               y = dadosCliente.ElementAt(i);
                if (y.Nome.Equals(nome))
                {
                    return y;
                }

            }
            return null;
        }
    }
}
