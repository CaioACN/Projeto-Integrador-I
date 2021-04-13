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

        public Usuario buscarPorNome(string nome)
        {
            Usuario x;
            for (int i = 0; i < dadosCliente.Count; i++)
            {
               x = dadosCliente.ElementAt(i);
                if (x.Nome.Equals(nome))
                {
                    return x;
                }

            }
            return null;
        }
    }
}
