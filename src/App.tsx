import { Layout, Header } from "./layout";
import { Home } from "./pages";
import type { PropsWithChildren } from "react";

function Background({children}: PropsWithChildren) {
  return (
    <div className="pattern-cross-dots-md bg-gray-100 text-gray-300/80">
    {/* <div className="main-bg"> */}
      <div className="text-black">{children}</div>
    </div>
  )
}

function App() {
  return (
    <Background>
      <Header />
      <Layout>
        <Home />
      </Layout>
    </Background>
  );
}

export default App;
