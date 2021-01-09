import React, { useState } from "react";
import Favorites from './Favorites'

function SelectTime() {

    const [newTime, setNewTime] = useState('00:00');
    const [input, setInput] = useState('')

    const [favorites, setFavorites] = useState(['1', '2', '3', '4']);

    // const updateNewTime = e => setNewTime(e.target.value); //cambio al estado con lo que tipea el user

    const createNewTime = (event) => {
        event.preventDefault();
        setNewTime(input)
        setInput('');
    }


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
                        newTime
                    }
                </h1>
                {/* <h1>{newTime}</h1> */}
            </div>
            <h1>Favoritos</h1>
            <div>
                <p>
                    {
                        favorites.map(fav => (
                            <Favorites fav={fav} />
                        ))
                    }
                </p>

            </div>

        </div>
    )
}

export default SelectTime
