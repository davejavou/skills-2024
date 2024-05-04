import TopNav from "./top-nav";
import Background from "./background";

export default function Layout({ children }) {
  return (
    <>
      <Background />
      <main className="relative flex w-screen h-screen">
        {children}
      </main>
      <TopNav />
    </>
  )
}
