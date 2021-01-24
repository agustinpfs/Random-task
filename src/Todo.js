import React, { useState } from 'react';
import { Modal, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


function Todo(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const updateTodo = () => {
        props.updateT(input, props.todo);
        setOpen(false);
    }

    const deleteTask = () => {
        props.deleteT(props.todo);
    }


    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>I am modal</h1>
                    <input placeholder={props.todo} value={input} onChange={event => setInput(event.target.value)} />
                    <Button onClick={updateTodo}>Update Todo</Button>
                </div>
            </Modal>

            <div>
                {props.todo}
                <button onClick={e => setOpen(true)}>EDIT</button>
                <button onClick={deleteTask}>delete</button>

            </div>
        </>
    )
}

export default Todo;