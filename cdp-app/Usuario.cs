using System;

class Usuario
{
    //Atributos dos usuário
    private string nome;

    private string email;
    private int cpf;

    private string senha;

    private string senhaConfirmacao;

    //Métodos ou funções  do Usuário:
    //CadastrarUsuário - Guarda as informações do cadastro usuário
    //EntrarLogin - Valida as informações referentes ao login e senha do usuário para o acesso ao sistema
    //SairLogin - Realiza a retirada do login e da permissões do usuário que estava logado

    public string CadastrarUsuario(string senha)

    {
        string retorno;

        Console.WriteLine("Peencha os campos a seguir para fazer o seu cadastro.");
        Console.WriteLine("Nome completo: ");
        nome = Convert.ToString (Console.ReadLine());
        Console.WriteLine("Números do seu CPF:");
        cpf = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Endereço de e-mail:");
        email = Convert.ToString(Console.ReadLine());
        Console.WriteLine("Digite uma senha com no máximo 15 caracteres: ");
        senha = Convert.ToString(Console.ReadLine());
        Console.WriteLine("Digite novamente a senha para confirmar: ");
        senhaConfirmacao = Convert.ToString(Console.ReadLine());

        if ( senha == senhaConfirmacao){
               retorno = "Clique em confirma para salvar o seu cadastro.";
            
            }
        else {
         
            retorno = "Digite novamente a senha, ela não confere com a anterior.";
              Console.WriteLine("Digite uma senha com no máximo 15 caracteres: ");
        senha = Convert.ToString(Console.ReadLine());
        Console.WriteLine("Digite novamente a senha para confirmar: ");
        senhaConfirmacao = Convert.ToString(Console.ReadLine());
        }
            return retorno;   
    }


}