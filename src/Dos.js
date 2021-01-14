import React, { useState } from 'react';
import Todo from './Todo';



function Dos() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = event => {
        // this will fire off when we click the button
        event.preventDefault();

        // db.collection('todos').add({
        //   todo: input,
        //   timestamp: firebase.firestore.FieldValue.serverTimestamp() //marca la hora del servidor correcto
        // })

        setTodos([...todos, input]);
        setInput('');
    }

    const updateT = (inp, ide) => {
        setTodos(
            todos.map(todo => (todo === ide ? todo = inp : todo))
        );

    }


    return (
        <div>
            <h1>¿Qué harás?</h1>
            <h2>¡Crea tus tareas!</h2>
            <form>
                <input value={input} placeholder="Escribe una tarea" onChange={event => setInput(event.target.value)} />
                <button disabled={!input} onClick={addTodo}>
                    Add Task
                </button>
            </form>

            <ul>
                {
                    todos.map(todo => (
                        <Todo todo={todo} updateT={updateT} /> //cambio string por objeto(delete)
                    ))
                }
            </ul>

        </div>
    )
}

export default Dos
