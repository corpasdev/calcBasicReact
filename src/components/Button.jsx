
export const Button = ({value, fns}) => {
    const {setExpresion, clear, clearEnd} = fns;

    const handleFunction = (value) => {
        switch(value) {
            case 'D':
                clearEnd();
                break;
            case 'C':
                clear();
                break;
            default:
                setExpresion(value);
        }
    }

    const OPERADORES = ['+', '-', '×', '÷', '^'];

    return (
        <button 
        onClick={() => handleFunction(value)} 
        className="flex justify-center items-center text-white bg-sky-500 rounded font-bold bg-gray-200 px-2 py-2" 
        style={OPERADORES.includes(value)? {fontSize: "20px", width: "60px"}: null}
        >
            {value}
        </button>
    )
}