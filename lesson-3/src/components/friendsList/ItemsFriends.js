import React from "react";
import css from "./friends.module.css";
import styled from "styled-components";

const ItemsFriends = ({ items: { isOnline, avatar, name } = {} }) => {

  const CheckStatus = styled.span`
    background-color: ${(isOnline ? "green" : "red")};
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-top: 15px;
  `;

  return (
    <li className={css.item}>
      <CheckStatus isOnline></CheckStatus>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default ItemsFriends;

