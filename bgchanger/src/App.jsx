import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded">
          <button className="outline-none px-4 py-1 rounded text-black shadow-lg" 
          style={{backgroundColor:"Red"}}
          onClick={()=>setColor("red")}>Red</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded">
          <button className="outline-none px-4 py-1 rounded text-black shadow-lg" 
          style={{backgroundColor:"Green"}}
          onClick={()=>setColor("green")}>Green</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded">
          <button className="outline-none px-4 py-1 rounded text-black shadow-lg" 
          style={{backgroundColor:"Blue"}}
          onClick={()=>setColor("blue")}>Blue</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded">
          <button className="outline-none px-4 py-1 rounded text-black shadow-lg" 
          style={{backgroundColor:"lavender"}}
          onClick={()=>setColor("lavender")}>Lavender</button>
        </div>
        
      </div>
    </div>
  )
}

export default App
