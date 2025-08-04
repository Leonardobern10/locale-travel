import { InputType } from 'src/types/input/InputType';
import Input from 'src/components/Input';
import registerImage from '@images/register_image.png';
import Logo from 'src/components/Logo';
import TitleSectionColored from 'src/components/TitleSection';
import DescriptionText from 'src/components/DescriptionText';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {
     type InputRegisterUser,
     InputUserSchema
} from 'src/types/input/InputRegisterUser';
import useWidth from 'src/hooks/useWidth';
import { createUser } from '@/services/UserService';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorForm from 'src/components/ErrorForm';
import { RegisterData } from '@data/RegisterData';
import { ButtonThemeType } from 'src/types/button/ButtonThemeType';
import LinkDefault from 'src/components/LinkDefault';
import { useState } from 'react';
import { notifyError, notifySuccess } from '@/services/NotifyService';
import { PositionToastType } from 'src/types/toast/PositionToastType';
import { ThemeToastType } from 'src/types/toast/ThemeToastType';
import { useNavigate, type NavigateFunction } from 'react-router';
import { ToastContainer } from 'react-toastify';
import RedirectLink from '@/components/RedirectLink';
import ButtonSubmit from '@/components/ButtonSubmit';

export default function Register() {
     const {
          register,
          handleSubmit,
          formState: { errors, isValid }
     } = useForm<InputRegisterUser>({
          resolver: zodResolver(InputUserSchema),
          mode: 'onChange'
     });
     const isMobile: boolean = useWidth();
     const navigate: NavigateFunction = useNavigate();

     let [isSubmitting, setIsSubmitting] = useState(false);

     const onSubmit: SubmitHandler<InputRegisterUser> = async (data) => {
          setIsSubmitting(true);
          try {
               await createUser({
                    nome: data.nome,
                    sobrenome: data.sobrenome,
                    idade: Number(data.idade),
                    email: data.email,
                    senha: data.senha
               });
               notifySuccess({
                    msg: RegisterData.msgToastSuccess,
                    position: PositionToastType.BOTTOM_RIGHT,
                    theme: ThemeToastType.LIGHT
               });
               setTimeout(() => {
                    navigate('/login');
               }, 3000);
          } catch (error) {
               notifyError({
                    msg: RegisterData.msgToastError,
                    position: PositionToastType.BOTTOM_RIGHT,
                    theme: ThemeToastType.LIGHT
               });
               console.error(error);
          } finally {
               setIsSubmitting(false);
          }
     };

     return (
          <div className="bg-linear-to-b to-esmerald from-neutral-200">
               <div className="flex flex-col md:flex-row h-full md:h-screen w-full max-md:gap-y-8">
                    <div
                         style={{ backgroundImage: `url(${registerImage})` }}
                         className="bg-cover bg-no-repeat h-full md:h-screen w-full md:w-1/2 flex flex-col justify-between px-8 py-3 rounded-b-xl md:rounded-r-xl">
                         <div className="h-50 md:h-fit flex flex-row justify-between items-start md:items-center">
                              <Logo />
                              <LinkDefault
                                   theme={ButtonThemeType.TRANSPARENT}
                                   linkName={RegisterData.backToHome}
                                   icon={false}
                                   path="/"
                              />
                         </div>

                         {isMobile && (
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
                                   white={false}
                                   title={RegisterData.titleForm}
                              />
                              <p className="text-neutral-600 font-hunnin text-sm">
                                   {RegisterData.descriptionForm}
                              </p>
                         </div>
                         <div className="flex flex-col items-center justify-between gap-2 w-5/6">
                              <Input
                                   register={register('nome')}
                                   type={InputType.TEXT}
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
                                   type={InputType.TEXT}
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
                                   type={InputType.EMAIL}
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
                                   type={InputType.NUMBER}
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
                                   type={InputType.PASSWORD}
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
                                   type={InputType.PASSWORD}
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
                              <ButtonSubmit
                                   isSubmitting={isSubmitting}
                                   defaultName={RegisterData.buttonSubmit}
                                   isValid={isValid}
                              />
                         </div>
                         <div>
                              <RedirectLink
                                   to="/login"
                                   str1="Já possui cadastro?"
                                   str2="e entre em sua conta"
                              />
                         </div>
                    </form>
               </div>
               <ToastContainer />
          </div>
     );
}
