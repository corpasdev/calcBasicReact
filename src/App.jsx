import { useState } from "react"
import { Button } from "./components/Button"
import { sumar, restar, multiplicar, dividir, potenciar} from "./models/Operacion";

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

 
// Resolver operación
const operar = (a, op, b) => {
    switch(op) {
        case '+':
          return sumar(a, b)
        case '-':
          return restar(a, b)
        case '×':
          return multiplicar(a, b)
        case '÷':
          return dividir(a, b)
        default:
          return potenciar(a, b)
    }
}

//Obtener operación
const getOperacion  = (exp) => {
    let a, b, op;
    a+= exp[0];
    exp = exp.slice(1);
    while(!OPERACIONES.includes(exp[0])){
        a += exp[0];
        exp = exp.slice(1);
    }
    op = exp[0];
    exp = exp.slice(1);
    b += exp[0];
    exp = exp.slice(1);
    while(!OPERACIONES.includes(exp[0])){
        b += exp[0];
        exp = exp.slice(1);
    }
    
    return [a, op, b, exp]
    
}

//Resolver toda la expresión
const calcular = () => {
    let exp = valueExp;
    while(isNaN(exp)) {
        let [a, op, b, restoExp] = getOperacion(exp);
        a = parseFloat(a);
        b = parseFloat(b);
        
        if(Number.isInteger(a)){
            a = parseInt(a);
        }
        
        if(Number.isInteger(b)) {
            b = parseInt(b);
        }
        
        const result = operar(a, op, b);
        exp = result + restoExp;
    } 
    
    setValueExp(exp);
    
}

//Validar Expresión debe ser correcta matematicamente 
const validarExp = () => {
    let exp = valueExp
    
    if(exp.length == 0) return true;
    
    if(!isNaN(exp)) return true;
    
    if(OPERACIONES.includes(exp[exp.length - 1])) {
      return setValueExp("Math Error");
    }

    const SIGNOS = ['+', '-'];

    if(exp[0] == '×') {
      alert("Pasó la validación");
      setValueExp("Math Error");
    } else {
      alert("No es igual!")
    }
    
    
    while(exp.length > 0){
        while(!OPERACIONES.includes(exp[0])){
            exp = exp.slice(1);
        }
        
        if(OPERACIONES.includes(exp[1])){
            if(exp[0] === exp[1]) {
                return setValueExp("Math Error");
            }
            
            const op = ['÷', '×', '^'];
            const signo = ['+', '-'];
            
            if(op.includes(exp[0]) && signo.includes(exp[1])) {
                exp = exp.slice(2);
            } else {
                return setValueExp("Math Error");
            }
        } else {
            exp = exp.slice(2);
        }
    }

    alert("Pasó la validación")
    
    calcular();
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
          <Button fns={{validarExp}} value={"="}/>
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
