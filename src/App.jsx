import { useState } from "react"
import { Button } from "./components/Button"
import { sumar, restar, multiplicar, dividir, potenciar} from "./models/Operacion";

function App() {

  const [valueExp, setValueExp] = useState('');
  const DIGITOS = [1,2,3,4,5,6,7,8,9,0];
  const OPERACIONES = ['+', '-', '×', '÷', '^']

  let exp = valueExp;
  let op = "";
  let operando1 = "";
  let operando2 = "";

  const setExpresion = (value)=> {
    setValueExp(valueExp + value);
  }

  const clear = () => {
    setValueExp("");
  }

  const clearEnd = () => {
    setValueExp(valueExp.slice(0, -1));
  }

  const getOperation = (exp) => {
    let countOp = 0;
    let i = 0;

    while(countOp < 2) {
      if(OPERACIONES.includes(exp[0]) && i != 0) {
        if(countOp == 0) {
          op = exp[0];
          exp = exp.slice(1);
        }

        countOp++;
      }
 
      if(countOp == 0) {
        operando1 += exp[i];
        exp = exp.slice(1);
      } else {
        if(countOp < 2) {
          operando2 += exp[i];
          exp = exp.slice(1);
        }
      }

      i++;
    }

    return (countOp != 0);
  }

  const cacularOp = (getOperation) => {

    let resultado;
    while(getOperation(exp)) {
      a = parseFloat(operando1);
      b = parseFloat(operando2);

      if(Number.isInteger(a)) {
        a = parseInt(a);
      }

      if(Number.isInteger(a)) {
        b = parseInt(b);
      }

      resultado = operar(a, op, b);

      exp = resultado + exp;
    }

    setValueExp(exp);
  }


  const operar = (a, ope, b) => {
    switch(ope) {
      case '+': 
        sumar(a, b);
        break;
      case '-':
        restar(a, b);
        break;
      case '×': 
        multiplicar(a, b);
        break;
      case '÷':
        dividir(a, b);
      default:
        potenciar(a, b);
    }
  }

  return (
    <main className="bg-neutral-50 rounded p-12">
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
          <Button fns={{getOperation, cacularOp}} value={"="}/>
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
