import { useState } from "react";
import "./App.css";
import MyRoutes from "./routes/MyRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#F4F3EE]">
      <MyRoutes />
    </div>
  );
}

export default App;
