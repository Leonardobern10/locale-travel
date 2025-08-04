import { InputType } from 'src/types/input/InputType';
import type { ReactElement } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

export default function Input(props: {
     type: InputType;
     placeholder: string;
     id: string;
     value?: string;
     register?: UseFormRegisterReturn;
     required?: boolean;
     onChange?: (
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
     ) => void;
}): ReactElement {
     const handleOnChange = (
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
     ) => {
          e.stopPropagation();
          props.onChange?.(e);
     };

     return (
          <input
               id={props.id}
               className={`w-full h-13 border border-white/50 text-neutral-200 px-4 py-2 rounded-xl placeholder:text-neutral-600/50 focus:text-white focus:bg-white/50 focus:outline-none ${props.type === InputType.NUMBER ? 'input-no-spin' : ''}`}
               type={props.type ?? 'text'}
               placeholder={props.placeholder}
               onChange={handleOnChange}
               required={props.required ?? false}
               {...props.register}
          />
     );
}
