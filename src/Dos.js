import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todo from './Todo';
import Tres from "./Tres";



function Dos(props) {
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
    const deleteT = (ide) => {
        setTodos(
            // todos.map(todo => (todo === ide ? todo = inp : todo))
            todos.filter(todo => todo !== ide)
        );

    }
    // let value = 3

    // let arr = [1, 2, 3, 4, 5, 3]

    // arr = arr.filter(item => item !== value)

    return (
        <Router>

            <Route exact path="/dos" render={() => {
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
                                    <Todo todo={todo} updateT={updateT} deleteT={deleteT} /> //cambio string por objeto(delete)
                                ))
                            }
                        </ul>
                        <Link to='/tres'>Siguiente</Link>
                    </div>
                )

            }}>


            </Route>
            <Route path="/tres" >
                <Tres newTime={props.newTime} />
            </Route>
        </Router>
    )
}

export default Dos;
