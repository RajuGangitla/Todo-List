import React,{useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const updateTodo= ( title,id,completed)=>{
        const newTodo = todos.map((todo)=>
            todo.id === id ? {title,id,completed}:todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }

    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("")
        }
    }, [setInput,editTodo])

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleEvent = (e) => {
        e.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
            setInput("")
        }else{
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }
    return (
        <div className='form' >
            <form onSubmit={handleEvent}>
                <input
                    type="text"
                    placeholder='Enter a todo . . .'
                    onChange={handleInput}
                    className='task-input'
                    value={input}
                    required
                />
                <button type='submit'
                    className='button-add'>
                    {editTodo ? "OK" : "Add"}</button>
            </form>
        </div>
    )
}

export default Form