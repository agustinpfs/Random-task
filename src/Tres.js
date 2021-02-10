import React from 'react';

function Tres(props) {
    return (
        <div>
            <h1>Soy Tres!!!!</h1>
            <h1>{props.newTime}</h1>
            <div>
                <ul>
                    {
                        props.todos.map(t => (
                            <div>
                                <li>{t}</li>
                                <input type="text" />
                            </div>
                        )

                        )
                    }
                </ul>
            </div>
            <h2>{props.todos}</h2>
        </div>
    )
}

export default Tres;
// {
//     todos.map(todo => (
//         <Todo todo={todo} updateT={updateT} deleteT={deleteT} /> //cambio string por objeto(delete)
//     ))
// }