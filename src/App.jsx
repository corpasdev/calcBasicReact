import { useState } from "react"
import { Button } from "./components/Button"

function App() {

  const [valueExp, setValueExp] = useState('');
  const DIGITOS = [1,2,3,4,5,6,7,8,9,0];
  const OPERACIONES = ['+', '-', '×', '÷', '^']

  const setExpresion = (value)=> {
    setValueExp(valueExp + value);
  }

  const clear = () => {
    setValueExp("");
  }

  const clearEnd = () => {
    setValueExp(valueExp.slice(0, -1));
  }

  return (
    <main className="">
      <input value={valueExp} placeholder="0" className="mb-6 py-2 rounded border-gray-200 border-2 pr-2 text-2xl w-full font-bold text-end" type="text" readOnly/>
      <div className="flex gap-12">
        <div className="grid w-56 grid-cols-3 gap-4">
          {
            DIGITOS.map((digit, i)=> {
              return <Button fns={{setExpresion}} key={i} value={digit}/>
            })
          }
          <Button fns={{setExpresion}} value={"."}/>
          <Button fns={{clearEnd}} value={"D"}/>
          <Button fns={{clear}} value={"C"}/>
        </div>
        <div className="flex flex-col gap-4">
          {
            OPERACIONES.map((ope, i)=> {
              return <Button fns={{setExpresion}} key={i} value={ope}/>
            })
          }
        </div>
      </div>
    </main>
  )
}

export default App
