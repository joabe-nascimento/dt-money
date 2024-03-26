import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import * as Dialog from '@radix-ui/react-dialog'
import logoimg from '../../assets/logo..svg'
import { NewTransactionModal } from '../NewTransactionModal'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoimg} alt="" />
        <Dialog.Root>
          <Dialog.DialogTrigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.DialogTrigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
