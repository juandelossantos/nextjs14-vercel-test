"use client";

import Logo from "@/components/Header/Logo";
import Menu from "@/components/Header/Menu";

export default function Header(props: any) {
  return (
    <header>
      <Logo />
      {props.name}
      {props.children}
      <Menu />
    </header>
  );
}
