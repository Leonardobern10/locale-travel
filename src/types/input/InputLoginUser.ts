import z from 'zod';

export const InputLoginUserSchema = z.object({
     email: z.email().max(40, 'O campo deve ter no máximo 40 caracteres.'),
     senha: z.string().min(6, 'Senha deve ter no mínimo 6 digitos')
});

export type InputLoginUser = z.infer<typeof InputLoginUserSchema>;
