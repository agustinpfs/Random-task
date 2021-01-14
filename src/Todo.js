import React, { useState } from 'react';
import { Modal, List, ListItem, ListItemText, makeStyles, Button } from '@material-ui/core';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import './Todo.css';
// import db from './firebase';

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

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        props.updateT(input, props.todo)
        // update todo with the new input text

        // db.collection('todos').doc(props.todo.id).set({
        //     todo: input
        // }, { merge: true });

        setOpen(false);
    }



    // const updateFavorites = () => {
    //     props.updateFav(input, props.fav.id)
    //     setOpen(false);
    // }


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
            </div>
        </>
    )
}

export default Todo