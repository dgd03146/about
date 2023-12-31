'use client'

import { ToastOptions, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ToastProps {
  type: TToastType
  message?: string
  action?: string
}

export enum TToastType {
  success,
  error,
  info,
  warn,
}

const toastOptions: ToastOptions = {
  position: 'bottom-center',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  pauseOnFocusLoss: true,
  closeButton: false,
}

export function showToast({ type, message }: ToastProps) {
  switch (type) {
    case TToastType.success:
      toast.success(message || 'Success!', {
        ...toastOptions,
        // icon: <img src="/svgs/toast_success.svg" alt="success" />,
      })
      break
    case TToastType.error:
      toast.error(message || 'Try again', {
        ...toastOptions,
        // icon: <img src="/svgs/toast_error.svg" alt="error" />,
      })
      break
    default:
  }
}

function Toast() {
  return <div>Toast</div>
}

export default Toast
