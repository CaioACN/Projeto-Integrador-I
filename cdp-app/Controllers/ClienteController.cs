using cdp_app.Model;
using cdp_app.Negocio;
using Microsoft.AspNetCore.Mvc;
using System;

namespace cdp_app.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ClienteController : ControllerBase
    
    {
        private ClienteService clienteRegrasDeNegocio;

        public ClienteController(ClienteService clienteService)
        {
            this.clienteRegrasDeNegocio = clienteService;
        }

        [HttpGet]
        public String RetornarrTexto()
        {
            return "Caio";
        }

        [Route("[action]")]
        [HttpGet]
        public String ExemplodeDeSubrota()
        {
            return "Caio2";
        }

        [HttpPost]
        public String CadastrarCliente(Cliente cliente)
        {
            return clienteRegrasDeNegocio.cadastrarNovoCliente(cliente);
        }
       
       
    }
}
