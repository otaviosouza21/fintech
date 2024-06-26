import React from "react";
import fintech from "../assets/fintech.svg";
import resumo from "../assets/icons/resumo.svg";
import vendas from "../assets/icons/vendas.svg";
import webHooks from "../assets/icons/webhooks.svg";
import configuracoes from "../assets/icons/configuracoes.svg";
import contato from "../assets/icons/contato.svg";
import sair from "../assets/icons/sair.svg";
import FintechSVG from "../assets/FintechSVG";

const SideNav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech" />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <a href="">Resumo</a>
        </li>
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <a href="">Vendas</a>
        </li>
        <li>
          <span>
            <img src={webHooks} alt="" />
          </span>
          <a>WebHooks</a>
        </li>
        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          <a>Configurações</a>
        </li>
        <li>
          <span>
            <img src={contato} alt="" />
          </span>
          <a>Contato</a>
        </li>
        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
