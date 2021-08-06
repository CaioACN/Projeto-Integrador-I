using cdp_app.Model;
using cdp_app.Negocio;
using Microsoft.AspNetCore.Mvc;
using System;

namespace cdp_app.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class UsuarioService : ControllerBase
    
    {
        private Negocio.UsuarioService usuarioRegrasDeNegocio;

        public UsuarioService(Negocio.UsuarioService usuarioService)
        {
            this.usuarioRegrasDeNegocio = usuarioService;
        }

        [HttpGet]
        public String RetornarTexto()
        {
            return "Caio";
        }

        [Route("[action]")]
        [HttpGet]
        public String ExemplodeDesubrota()
        {
            return "Caio2";
        }

        [HttpPost]
        public String CadastrarUsuario(Usuario usuario)
        {
            return usuarioRegrasDeNegocio.cadastrarNovoUsuario(usuario);
        }
       
       
    }
}
