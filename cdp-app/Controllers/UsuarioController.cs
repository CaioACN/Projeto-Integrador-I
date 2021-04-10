using cdp_app.Model;
using Microsoft.AspNetCore.Mvc;
using System;

namespace cdp_app.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    
    {
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
            Console.WriteLine(usuario.Email);
            Console.WriteLine(usuario.Nome);
            Console.WriteLine(usuario.Senha);

            return "Cadastro realizado com sucesso.";
        }
       
       
    }
}
