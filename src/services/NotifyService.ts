import type { PositionToastType } from 'src/types/toast/PositionToastType';
import type { ThemeToastType } from 'src/types/toast/ThemeToastType';
import { toast, Bounce } from 'react-toastify';

export function notifySuccess(props: {
     msg: string;
     position: PositionToastType;
     theme: ThemeToastType;
}) {
     toast.success(props.msg, {
          position: props.position,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: props.theme,
          transition: Bounce
     });
}

export function notifyError(props: {
     msg: string;
     position: PositionToastType;
     theme: ThemeToastType;
}) {
     toast.error(props.msg, {
          position: props.position,
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: props.theme,
          transition: Bounce
     });
}
