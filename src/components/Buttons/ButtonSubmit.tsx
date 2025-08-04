import type { ReactElement } from 'react';
import { ButtonThemeType } from 'src/types/button/ButtonThemeType';
import ButtonDefault from './ButtonDefault';

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
