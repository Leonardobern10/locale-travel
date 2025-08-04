import type { ReactElement } from 'react';
import ButtonDefault from './ButtonDefault';
import { ButtonThemeType } from 'src/types/button/ButtonThemeType';

export default function ButtonSubmit(props: {
     isSubmitting: boolean;
     defaultName: string;
     isValid: boolean;
}): ReactElement {
     return (
          <ButtonDefault
               type="submit"
               buttonName={
                    props.isSubmitting ? 'Enviando...' : props.defaultName
               }
               theme={ButtonThemeType.WHITE}
               disabled={props.isSubmitting || !props.isValid}
          />
     );
}
