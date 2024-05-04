import { PropsWithChildren } from "react";
import TopNav from "./top-nav";

export default function Layout({ children }) {
  return (
    <>
      <TopNav />
      {children}
    </>
  )
}
