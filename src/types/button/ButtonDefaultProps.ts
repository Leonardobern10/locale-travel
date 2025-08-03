import type { ReactNode } from 'react';
import type { ButtonThemeType } from './ButtonThemeType';

export type ButtonDefaultProps = {
     buttonName: string | ReactNode;
     icon?: boolean;
     onClick?: Function;
     theme?: ButtonThemeType;
     type?: 'button' | 'submit' | 'reset';
     disabled?: boolean;
};
