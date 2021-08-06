using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cdp_app.Peristencia
{
    public interface IClienteDAO<T>
    {
        List<nome_cliente> ExibirTodos();
        void Gravar(nome_cliente obj);
        tb_cliente Consultar(string nome_cliente);

       
    }





}

