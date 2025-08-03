import { InputType } from 'src/types/InputType';
import Input from 'src/components/Input';
import registerImage from '@images/register_image.png';
import Logo from 'src/components/Logo';
import ButtonDefault from 'src/components/ButtonDefault';
import TitleSectionColored from 'src/components/TitleSection';
import DescriptionText from 'src/components/DescriptionText';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { type InputUser, InputUserSchema } from 'src/types/InputUser';
import useWidth from 'src/hooks/useWidth';
import { createUser } from 'src/services/RegisterService';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorForm from 'src/components/ErrorForm';
import { RegisterData } from '@data/RegisterData';

export default function Register() {
     const {
          register,
          handleSubmit,
          formState: { errors, isValid }
     } = useForm<InputUser>({
          resolver: zodResolver(InputUserSchema),
          mode: 'onChange'
     });

     const onSubmit: SubmitHandler<InputUser> = (data) =>
          createUser({
               nome: data.nome,
               sobrenome: data.sobrenome,
               idade: Number(data.idade),
               email: data.email,
               senha: data.senha
          });

     return (
          <div className="bg-esmerald">
               <div className="flex flex-col md:flex-row h-full md:h-screen w-full max-md:gap-y-8">
                    <div
                         style={{ backgroundImage: `url(${registerImage})` }}
                         className="bg-cover bg-no-repeat h-full md:h-screen w-full md:w-1/2 flex flex-col justify-between px-8 py-3 rounded-b-xl md:rounded-r-xl">
                         <div className="h-50 md:h-fit flex flex-row justify-between items-start md:items-center">
                              <Logo />
                              <ButtonDefault
                                   black={false}
                                   buttonName={RegisterData.backToHome}
                              />
                         </div>

                         {useWidth() && (
                              <div className="h-1/2 flex flex-col justify-between items-start pb-15">
                                   <div className="flex flex-col gap-4">
                                        <TitleSectionColored
                                             white={true}
                                             title={RegisterData.titleImage}
                                        />
                                        <DescriptionText
                                             description={
                                                  RegisterData.descriptionImage
                                             }
                                        />
                                   </div>
                                   <div className="flex flex-row justify-between w-full font-hunnin">
                                        <p className="text-white-default">
                                             {RegisterData.rights}
                                        </p>
                                        <p className="text-white-default">
                                             {RegisterData.terms}
                                        </p>
                                   </div>
                              </div>
                         )}
                    </div>
                    <form
                         onSubmit={handleSubmit(onSubmit)}
                         className="w-full md:w-1/2 flex flex-col justify-around md:justify-evenly items-center gap-y-4 py-4">
                         <div className="text-center w-5/6">
                              <TitleSectionColored
                                   white={true}
                                   title={RegisterData.titleForm}
                              />
                              <p className="text-white font-hunnin text-sm">
                                   {RegisterData.descriptionForm}
                              </p>
                         </div>
                         <div className="flex flex-col items-center justify-between gap-2 w-5/6">
                              <Input
                                   register={register('nome')}
                                   email={InputType.TEXT}
                                   id="nome-register"
                                   placeholder="Nome"
                                   required={true}
                              />
                              {errors.nome && (
                                   <ErrorForm
                                        errorMessage={errors.nome.message!}
                                   />
                              )}
                              <Input
                                   register={register('sobrenome')}
                                   email={InputType.TEXT}
                                   id="sobrenome-register"
                                   placeholder="Sobrenome"
                                   required={true}
                              />
                              {errors.sobrenome && (
                                   <ErrorForm
                                        errorMessage={errors.sobrenome.message!}
                                   />
                              )}
                              <Input
                                   register={register('email')}
                                   email={InputType.EMAIL}
                                   id="email-register"
                                   placeholder="Email"
                                   required={true}
                              />
                              {errors.email && (
                                   <ErrorForm
                                        errorMessage={errors.email.message!}
                                   />
                              )}
                              <Input
                                   register={register('idade')}
                                   email={InputType.NUMBER}
                                   id="idade"
                                   placeholder="Idade"
                                   required={true}
                              />
                              {errors.idade && (
                                   <ErrorForm
                                        errorMessage={errors.idade.message!}
                                   />
                              )}
                              <Input
                                   register={register('senha')}
                                   email={InputType.PASSWORD}
                                   id="senha-register"
                                   placeholder="Senha"
                                   required={true}
                              />
                              {errors.senha && (
                                   <ErrorForm
                                        errorMessage={errors.senha.message!}
                                   />
                              )}
                              <Input
                                   register={register('confirma_senha')}
                                   email={InputType.PASSWORD}
                                   id="confirm-senha-register"
                                   placeholder="Confirme sua senha"
                                   required={true}
                              />
                              {errors.confirma_senha && (
                                   <ErrorForm
                                        errorMessage={
                                             errors.confirma_senha.message!
                                        }
                                   />
                              )}

                              <ButtonDefault
                                   type="submit"
                                   buttonName={RegisterData.buttonSubmit}
                                   black={false}
                                   disabled={!isValid}
                              />
                         </div>
                    </form>
               </div>
          </div>
     );
}
