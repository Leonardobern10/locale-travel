import Input from 'src/components/ContactUs/Input';

export default function Register() {
     return (
          <div>
               <div></div>
               <form>
                    <Input
                         email={false}
                         id="nome-register"
                         placeholder="Nome"
                    />
                    <Input
                         email={false}
                         id="sobrenome-register"
                         placeholder="Sobrenome"
                    />
                    <Input
                         email={true}
                         id="email-register"
                         placeholder="Email"
                    />
                    <Input email={false} id="telefone" placeholder="Telefone" />
                    <Input
                         email={false}
                         id="senha-register"
                         placeholder="Senha"
                    />
               </form>
          </div>
     );
}
