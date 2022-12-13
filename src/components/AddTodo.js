import {useState} from 'react';
const AddTodo = (props) => {
    const [inputValue, setInputValue] = useState('');

    const formSubmit = (e) =>{
        console.log(e);
        e.preventDefault();
        props.adder(inputValue);
        setInputValue('');
    }

    const updateInputValue = (e) =>{
        setInputValue(e.target.value);


    }

    return <form onSubmit={formSubmit}>
        <label htmlFor="todo">Enter Item:</label>
        <input type="text" id="todo" onChange={updateInputValue} value={inputValue}/>
        <input type="submit" />
    </form>;
}

export default AddTodo;