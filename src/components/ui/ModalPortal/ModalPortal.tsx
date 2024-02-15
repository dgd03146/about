import ReactDOM from 'react-dom'

type Props = { children: React.ReactNode }

export const ModalPortal = ({ children }: Props) => {
  if (typeof Window === 'undefined') {
    return null
  }
  const node = document.getElementById('portal') as Element
  return ReactDOM.createPortal(children, node)
}
