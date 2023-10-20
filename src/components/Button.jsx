
export const Button = ({value, fns}) => {
    const {setExpresion, clear, clearEnd, getResult} = fns;

    const handleFunction = (value) => {
        switch(value) {
            case 'D':
                clearEnd();
                break;
            case 'C':
                clear();
                break;
            case '=':
                getResult();
                break;
            default:
                setExpresion(value);
        }
    }

    const OPERADORES = ['+', '-', '×', '÷', '^'];

    let styleAdd;

    switch(value) {
        case 'C': 
            styleAdd =  "col-span-2 bg-blue-700";
            break;
        case 'D': 
            styleAdd = "bg-red-500";
            break;
        case '=': 
            styleAdd = "bg-lime-500";
            break;
        default: 
            styleAdd = "";
    }

    OPERADORES.includes(value)? styleAdd = "bg-orange-600": null;

    return (
        <button 
        onClick={() => handleFunction(value)} 
        className={"flex justify-center items-center text-white bg-sky-500 rounded font-bold bg-gray-200 px-2 py-2 "+styleAdd} 
        style={OPERADORES.includes(value)? {fontSize: "20px", width: "60px"}: null}
        >
            {value}
        </button>
    )
}