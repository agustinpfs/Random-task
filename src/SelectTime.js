import React, { useState } from "react";

function SelectTime() {

    const [newTime, setNewTime] = useState('00:00');

    const updateNewTime = e => setNewTime(e.target.value); //cambio al estado con lo que tipea el user



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
                {/* <button onClick={createNewTime}>
                    Add
            </button> */}
                <h1>{newTime}</h1>
            </div>

        </div>
    )
}

export default SelectTime
