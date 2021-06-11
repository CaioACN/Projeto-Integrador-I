using cdp_app.Peristencia;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cdp_app.Model
{
    public class Cliente
    {

        private int Cd_cliente;

        private String Nome;

        public Cliente()
        {
        }

        public Cliente(int cd_cliente, string nome)
        {
            Cd_cliente = cd_cliente;
            Nome = nome;
        }

        public int cd_cliente { get => Cd_cliente; set => Cd_cliente = value; }
        public string nome { get => Nome; set => Nome = value; }

        public void Gravar()
        {
            new ClienteDAO().Gravar(this);
        }



    }


}
