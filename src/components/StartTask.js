import React, { useState } from 'react';
import { makeStyles, Container, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '100vh',
        background: '#583d72'
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80px',
        background: '#16697a',
        color: 'white'
    },
    containerTasks: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#ffa62b',
        // border: '2px solid white',
        marginTop: '20px',
        width: '90%'
    },
    containerRandom: {
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        bottom: 0
    },
    containerNameTask: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        border: '2px solid #ffa62b',
        padding: '10px',
        minWidth: '180px',
    },
    containerButtonStart: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // background: 'white',
        width: '30%',   
    },
    button: {
        background: 'white',
        fontWeight: 900
    }
}))

const tasks = [
    {
        taskName: 'random task',
        taskTime: '02:00'
    },
    {
        taskName: 'curso node',
        taskTime: '02:00'
    },
    {
        taskName: 'smart contract',
        taskTime: '02:00'
    },
    {
        taskName: 'tesis',
        taskTime: '02:00'
    }
]




const StartTask = () => {
    const classes = useStyles()
    const [count, setCount] = useState(0)

    const listTasks = tasks.length ? tasks.map((task) => {
        return( 
            <Container className={classes.containerTasks} key={task}>
                <div className={classes.containerNameTask} >
                    <Typography variant="h5">
                        {task.taskName} 
                    </Typography>
                    <Typography variant="h5">
                        {task.taskTime}
                    </Typography>
                </div>
                <div className={classes.containerButtonStart}>
                    <Button className={classes.button} variant="contained">START</Button>
                </div>
            
            </Container>
        )
    }) : <></>

    const cuentaRegresiva = (hora) => {
        hora -= 1
        console.log(hora)
    }

    setInterval( cuentaRegresiva(7), 4000)

    const Random = () => {
        return(
            <Container className={classes.containerRandom}>
                <Button>RANDOM</Button>
            </Container>
        )
    }

    return ( 
        <div className={classes.container}>
            <div className={classes.header}>
                <Typography variant="h4">08:00</Typography>
            </div>
            <div>
                {listTasks}
            </div>
            <Random />
        </div>
    );
}
 
export default StartTask;