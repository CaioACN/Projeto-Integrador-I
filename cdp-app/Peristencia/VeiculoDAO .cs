using cdp_app.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cdp_app.Peristencia
{
    public class VeiculoDAO
    {
        private List<Veiculo> dados;
        
        public VeiculoDAO()
        {
            dados = new List<Veiculo>();

        }

        public void salvar(Veiculo u)
        {
            dados.Add(u);
            Console.WriteLine(dados.Count);
            Console.WriteLine(u.NomeVeiculo);
            Console.WriteLine(u.CodigoTipoVeiculo);
            Console.WriteLine(u.CodigoDoVeiculo);
            Console.WriteLine(u.PercentualComissao);
        }

        public Veiculo buscarPorNome(string NomeVeiculo)
        {
            Veiculo z;
            for (int i = 0; i < dados.Count; i++)
            {
               z = dados.ElementAt(i);
                if (z.NomeVeiculo.Equals(NomeVeiculo))
                {
                    return z;
                }

            }
            return null;
        }
    }
}
