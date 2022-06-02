import Swal from "sweetalert2";

export const ToastAlert = (icon, title, text) => {
  Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    showCloseButton: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  }).fire({
    icon: icon,
    title: title,
    text: text
  })
}

export const errorAlert = (text) => {
  Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true,
    background: 'rgba(255, 0, 0 , 0.9)',
    color: 'white',
    iconColor: 'white',
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  }).fire({
    icon: 'error',
    title: 'Error!',
    text: text
  })
}

export const AlertSuccess = (orderId) => {
  Swal.mixin({
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: true
  }).fire({
    title: 'SU PEDIDO SE HA REALIZADO CON EXITO',
    text: `Su código de compra es: ${orderId}`,
    icon: 'success'
  })
}