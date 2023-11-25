import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WebApp from "@twa-dev/sdk";
import {TonConnectUIProvider} from "@tonconnect/ui-react";
import {Header} from "./components/Header";
import {Address} from "./components/Address";
import {Settings} from "./components/Settings";

function App() {
  const [count, _] = useState(0)

  return (
      <TonConnectUIProvider manifestUrl="https://notartyom.github.io/tg-miniapp-test/manifest.json">
      <Header/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/*<div className="card">*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*</div>*/}
      <Address/>
      <Settings />
         Here we add our button with alert callback
        <div className="card">
            <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
                Show Alert
            </button>
        </div>
      </TonConnectUIProvider>
  )
}

export default App
