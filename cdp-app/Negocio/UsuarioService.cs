using cdp_app.Model;
using cdp_app.Peristencia;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cdp_app.Negocio
{
    public class UsuarioService
    {

        private UsuarioDAO usuarioDAO;

        public UsuarioService()
        {
            usuarioDAO = new UsuarioDAO();
        }

        public String cadastrarNovoUsuario(Usuario usuario)
        {
            Usuario resultado = usuarioDAO.buscarPorEmail(usuario.Email);
            if ( resultado == null)
            {
                usuarioDAO.salvar(usuario);

                return "Cadastro realizado com sucesso.";
            }
            else
            {
                return "Usuário já cadastrado.";
            }
        }

    }
}
