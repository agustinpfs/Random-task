import React, { useState } from 'react';
import { Modal, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        height: "max-content",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Favorites(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    // const [favorites, setFavorites] = useState(['1', '2', '3', '4']);


    const updateFavorites = () => {
        props.updateFav(input, props.fav.id)
        setOpen(false);
    }

    const useFavorite = () => {
        props.useFav(props.fav.time)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>Edit Time</h1>
                    <input placeholder={props.fav.time} value={input} onChange={event => setInput(event.target.value)} />
                    <Button onClick={updateFavorites}>Update time</Button>
                </div>
            </Modal>


            {/* {console.log(props.fav.fav, 'aca fav')} */}

            <p style={{ border: "2px dashed blue" }}>
                <button onClick={useFavorite}>{props.fav.time}</button>
                <button onClick={e => setOpen(true)}>EDIT</button>
            </p>
        </div>
    )
}

export default Favorites
