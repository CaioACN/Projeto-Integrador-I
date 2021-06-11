using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cdp_app.Peristencia
{
    public class BancoDeDados
    {
        private String caminho = "server=minhaconexao;uid=root;pwd=root;database=bd_ec_01;";

        private MySqlConnection objConexao;

        public MySqlConnection ObjConexao { get => objConexao; }

        
        public void Conectar()
        {

            try
            {
                objConexao = new MySqlConnection(caminho);
                objConexao.Open();
               
            }
            catch(Exception error)
            {
                Console.WriteLine(error);
            }
            
        }

        public void Desconectar()
        {

            try
            {
                
                objConexao.Close();

            }
            catch (Exception error)
            {
                Console.WriteLine(error);
            }

        }

    }

}
