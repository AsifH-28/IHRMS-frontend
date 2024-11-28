import { ThemeProvider as ConfigProvider } from "./components/themecontext/ThemeContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <ConfigProvider>
        <Layout />
      </ConfigProvider>
    </>
  );
}

export default App;
