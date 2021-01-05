import React, { useState } from "react";

function SelectTime() {

    const [newTime, setNewTime] = useState('00:00');
    const [favorites, setFavorites] = useState(['1', '2', '3', '4']);

    const updateNewTime = e => setNewTime(e.target.value); //cambio al estado con lo que tipea el user

    const createNewTime = () => {
        return (<h2>{newTime}</h2>)
    }


    return (
        <div>
            <h1>¿Cuánto tiempo trabajarás hoy?</h1>
            <div>
                <input
                    type="text"
                    // value={newTime}
                    onChange={updateNewTime}
                    placeholder="add hours"
                />
                <button onClick={createNewTime}>
                    Add
            </button>
                {/* <h1>{newTime}</h1> */}
            </div>
            <h1>Favoritos</h1>
            <div>
                <p>
                    {
                        favorites.map(fav => (
                            <p style={{ border: "2px dashed blue" }}>
                                <h2>{fav}</h2>
                                <button>edit</button>
                            </p>
                        ))
                    }
                </p>

            </div>

        </div>
    )
}

export default SelectTime
