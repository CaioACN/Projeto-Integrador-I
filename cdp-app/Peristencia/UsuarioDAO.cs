using cdp_app.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cdp_app.Peristencia
{
    public class UsuarioDAO
    {
        private List<Usuario> dados;
        
        public UsuarioDAO()
        {
            dados = new List<Usuario>();

        }

        public void salvar(Usuario u)
        {
            dados.Add(u);
            Console.WriteLine(dados.Count);
            Console.WriteLine(u.Email);
            Console.WriteLine(u.Nome);
            Console.WriteLine(u.Senha);
        }

        public Usuario buscarPorEmail(string email)
        {
            Usuario x;
            for (int i = 0; i < dados.Count; i++)
            {
               x = dados.ElementAt(i);
                if (x.Email.Equals(email))
                {
                    return x;
                }

            }
            return null;
        }
    }
}
