import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import logoimg from "../../assets/logo..svg";
import { NewTransactionModal } from "../NewTransactionModal";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoimg} alt="" />
        <div style={{ display: "flex", alignItems: "center" }}>
          <a
            href="https://github.com/joabe-nascimento"
            target="_blank"
            title="Joabe Nascimento"
            rel="noopener noreferrer"
            style={{ marginRight: "10px", color: "white" }} // Definindo a cor como branca
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/joabe-nascimento-632345211/"
            target="_blank"
            title="Joabe Nascimento"
            rel="noopener noreferrer"
            style={{ color: "white" }} // Definindo a cor como branca
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <Dialog.Root>
          <Dialog.DialogTrigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.DialogTrigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
