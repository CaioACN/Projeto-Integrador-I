using cdp_app.Model;
using cdp_app.Peristencia;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cdp_app.Negocio
{
    public class VeiculoService
    {

        private VeiculoDAO veiculoDAO;

        public VeiculoService()
        {
           veiculoDAO = new VeiculoDAO();
        }        

        public String cadastrarNovoVeiculo(Veiculo veiculo)
        {
            Veiculo resultado = veiculoDAO.buscarPorNome(veiculo.NomeVeiculo);
            if( resultado == null)
            {
                veiculoDAO.salvar(veiculo);

                return "Cadastro de veículo realizado com sucesso.";
            }
            else
            {
                return "Veículo já cadastrado.";
            }
        }

    }
}
