import { useState } from "react";
import "./App.css";
import { explorer } from "./data/folderData";
import Folder from "./components/Folder";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log("explorerData", explorerData);
  return (
    <div className="App">
      <h1>File Explorer App</h1>
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
