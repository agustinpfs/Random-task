import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Favorites from './Favorites';
import Dos from './Dos'

function SelectTime() {

    const [newTime, setNewTime] = useState('0');
    const [input, setInput] = useState('')

    // const [favorites, setFavorites] = useState(['1', '2', '3', '4']);
    const [favorites, setFavorites] = useState([
        { id: "1", time: "3" },
        { id: "2", time: "4" },
        { id: "3", time: "6" },
        { id: "4", time: "8" }
    ]);

    // const updateNewTime = e => setNewTime(e.target.value); //cambio al estado con lo que tipea el user

    const createNewTime = (event) => {
        event.preventDefault();
        setNewTime(input)
        setInput('');
    }

    const updateFav = (inp, ide) =>
        setFavorites(
            favorites.map(fav => (fav.id === ide ? { ...fav, time: inp } : fav))
        );

    const useFav = (time) => setNewTime(time);


    return (
        <Router>

            <Route exact path="/" render={() => {
                return (
                    <div>
                        <h1>¿Cuánto tiempo trabajarás hoy?</h1>
                        <div>
                            <form>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    // onChange={updateNewTime}
                                    placeholder="add hours"
                                />
                                <button onClick={createNewTime}>
                                    Add Hours!!
                        </button>
                            </form>
                            <h1>
                                {
                                    // const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
                                    `${newTime < 10 ? '0' : ''}${newTime}:00 HORAS`


                                }
                            </h1>
                            {/* <h1>{newTime}</h1> */}
                        </div>
                        <h1>Favoritos</h1>
                        <div>
                            <p>
                                {
                                    favorites.map(fav => (
                                        <Favorites fav={fav} updateFav={updateFav} useFav={useFav} />
                                    ))
                                }
                            </p>

                        </div>
                        {/* <button>SIGUIENTE</button> */}
                        <Link to='/dos'>Siguiente</Link>
                    </div>
                )
            }}>
            </Route>
            <Route path="/dos" component={Dos} />

        </Router>
    )
}

export default SelectTime
