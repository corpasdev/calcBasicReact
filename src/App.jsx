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

  return (
    <main className="">
      <input value={valueExp} placeholder="0" className="w-full text-end" type="text" readOnly/>
      <hr className="mb-3"/>
      <div className="flex gap-12">
        <div className="grid w-56 grid-rows-4 grid-cols-4 gap-4">
          {
            DIGITOS.map((digit, i)=> {
              return <Button fn={setExpresion} key={i} value={digit}/>
            })
          }
          <Button fn={setExpresion} value={"."}/>
          <Button fn={setExpresion} value={"D"}/>
        </div>
        <div className="flex flex-col gap-2">
          {
            OPERACIONES.map((ope, i)=> {
              return <Button fn={setExpresion} key={i} value={ope}/>
            })
          }
        </div>
      </div>
    </main>
  )
}

export default App
