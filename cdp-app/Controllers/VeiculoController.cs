using cdp_app.Model;
using cdp_app.Negocio;
using Microsoft.AspNetCore.Mvc;
using System;

namespace cdp_app.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class VeiculoController : ControllerBase
    
    {
        private VeiculoService veiculoRegrasDeNegocio;

        public VeiculoController(VeiculoService veiculoService)
        {
            this.veiculoRegrasDeNegocio = veiculoService;
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
        public String CadastrarVeiculo(Veiculo veiculo)
        {
            return veiculoRegrasDeNegocio.cadastrarNovoVeiculo(veiculo);
        }
       
       
    }
}
