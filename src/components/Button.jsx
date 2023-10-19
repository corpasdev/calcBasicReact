
export const Button = ({value, fn}) => {
    return (
        <button onClick={()=> fn(value)} className="rounded font-bold bg-gray-200 px-2 py-0">{value}</button>
    )
}