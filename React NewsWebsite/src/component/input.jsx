import react, {useState} from "react"

const Input = (props)=>{
    const [value, setValue] = useState("");

    const getInput = (event)=>{
        setValue(event.target.value)
    }


    console.log(props.val)

    return(
        <input val={props.val}   onChange={props.searchange} onClick={props.action} placeholder="Search for News Here !" className = "search-input" type="text"/>
    )
}
export default Input;
