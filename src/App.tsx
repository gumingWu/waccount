import { Layout, Header } from "./layout";
import { Hero } from "./components";
import type { PropsWithChildren } from "react";

function Background({children}: PropsWithChildren) {
  return (
    <div className="pattern-cross-dots-md bg-gray-100 text-gray-300/80">
      <div className="text-black">{children}</div>
    </div>
  )
}

function App() {
  return (
    <Background>
      <Header />
      <Layout>
        <Hero />
      </Layout>
    </Background>
  );
}

export default App;
