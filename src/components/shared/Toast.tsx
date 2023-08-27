import { Slide, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ToastType {
  message: string
}

// eslint-disable-next-line react-refresh/only-export-components
export function toastSuccess ({message}: ToastType){
  return(
    toast.success(message, {
    })
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function toastWarning ({message}: ToastType){
  return(
    toast.warn(message, {
    })
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function toastError ({message}: ToastType){
  return(
    toast.error(message, {
    })
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function toastInfo ({message}: ToastType){
  return(
    toast.info(message, {
    })
  )
}


export default function Toast(){
  return(
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="colored"
      transition={Slide}
    />
  )
}
