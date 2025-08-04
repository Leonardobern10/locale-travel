import { zodResolver } from '@hookform/resolvers/zod';
import {
     InputLoginUserSchema,
     type InputLoginUser
} from 'src/types/input/InputLoginUser';
import { useState, type ReactElement } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import loginImage from '@images/login_image.png';
import Logo from '@/components/Logo';
import LinkDefault from '@/components/Links/LinkDefault';
import { ButtonThemeType } from 'src/types/button/ButtonThemeType';
import { RegisterData } from '@data/RegisterData';
import useWidth from '@/hooks/useWidth';
import TitleSectionColored from '@/components/TitleSection';
import DescriptionText from '@/components/DescriptionText';
import Input from '@/components/Input';
import { InputType } from 'src/types/input/InputType';
import ErrorForm from '@/components/ErrorForm';
import { ToastContainer } from 'react-toastify';
import { login } from '@/services/UserService';
import { notifyError, notifySuccess } from '@/services/NotifyService';
import { PositionToastType } from 'src/types/toast/PositionToastType';
import { ThemeToastType } from 'src/types/toast/ThemeToastType';
import { useNavigate, type NavigateFunction } from 'react-router';
import RedirectLink from '@/components/Links/RedirectLink';
import ButtonSubmit from '@/components/Buttons/ButtonSubmit';

export default function Login(): ReactElement {
     const {
          register,
          handleSubmit,
          formState: { errors, isValid }
     } = useForm<InputLoginUser>({
          resolver: zodResolver(InputLoginUserSchema),
          mode: 'onChange'
     });
     let navigate: NavigateFunction = useNavigate();
     let [isSubmitting, setIsSubmitting] = useState(false);

     const onSubmit: SubmitHandler<InputLoginUser> = async (data) => {
          setIsSubmitting(true);
          try {
               await login(data);
               notifySuccess({
                    msg: 'Login realizado com sucesso!',
                    position: PositionToastType.BOTTOM_LEFT,
                    theme: ThemeToastType.LIGHT
               });
               setTimeout(() => {
                    navigate('/');
               }, 3000);
          } catch (error) {
               notifyError({
                    msg: 'Erro ao efetuar login',
                    position: PositionToastType.BOTTOM_LEFT,
                    theme: ThemeToastType.LIGHT
               });
               console.error(error);
          } finally {
               setIsSubmitting(false);
          }
     };

     return (
          <div className="bg-linear-to-b to-esmerald from-neutral-200">
               <div className="flex flex-col md:flex-row-reverse h-full md:h-screen w-full max-md:gap-y-8">
                    <div
                         style={{ backgroundImage: `url(${loginImage})` }}
                         className="bg-cover bg-no-repeat h-full md:h-screen w-full md:w-1/2 flex flex-col justify-between px-8 py-3 rounded-b-xl md:rounded-l-2xl">
                         <div className="h-50 md:h-fit flex flex-row justify-between items-start md:items-end">
                              <Logo />
                              <LinkDefault
                                   theme={ButtonThemeType.TRANSPARENT}
                                   linkName={RegisterData.backToHome}
                                   icon={false}
                                   path="/"
                              />
                         </div>

                         {useWidth() && (
                              <div className="h-1/2 flex flex-col justify-between items-start pb-15">
                                   <div className="flex flex-col gap-4">
                                        <TitleSectionColored
                                             white={true}
                                             title="Aproveite nossas ofertas!"
                                        />
                                        <DescriptionText description="Em cada voo, combinamos precisão, conforto e excelência — porque voar é mais do que se deslocar: é fazer parte de uma jornada que começa no céu, mas permanece na memória." />
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
                                   title="Login"
                              />
                              <p className="text-neutral-600 font-hunnin text-sm">
                                   Entre e usufrua das melhores condições em
                                   viagens.
                              </p>
                         </div>
                         <div className="flex flex-col items-center justify-between gap-2 w-5/6">
                              <Input
                                   register={register('email')}
                                   type={InputType.TEXT}
                                   id="email-login"
                                   placeholder="E-mail"
                                   required={true}
                              />
                              {errors.email && (
                                   <ErrorForm
                                        errorMessage={errors.email.message!}
                                   />
                              )}
                              <Input
                                   register={register('senha')}
                                   type={InputType.TEXT}
                                   id="senha-register"
                                   placeholder="Senha"
                                   required={true}
                              />
                              {errors.senha && (
                                   <ErrorForm
                                        errorMessage={errors.senha.message!}
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
                                   to="/register"
                                   str1="Ainda não tem conta?"
                                   str2="e cadastre-se"
                              />
                         </div>
                    </form>
               </div>
               <ToastContainer />
          </div>
     );
}
