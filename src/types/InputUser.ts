import { z } from 'zod';

export const InputUserSchema = z
     .object({
          nome: z
               .string()
               .min(1, 'Nome é obrigatório')
               .max(20, 'O campo deve ter no máximo 20 caracteres.'),
          sobrenome: z
               .string()
               .min(1, 'Sobrenome é obrigatório')
               .max(20, 'O campo deve ter no máximo 20 caracteres.'),
          email: z
               .email('Formato de e-mail inválido')
               .max(40, 'O campo deve ter no máximo 40 caracteres.'),
          idade: z.string().refine((val) => Number(val) > 0, {
               message: 'Idade precisa ser maior que 0'
          }),
          senha: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
          confirma_senha: z.string()
     })
     .refine((data) => data.senha === data.confirma_senha, {
          message: 'Senhas não conferem',
          path: ['confirma_senha'] // Indica onde o erro será mostrado
     });

export type InputUser = z.infer<typeof InputUserSchema>;
