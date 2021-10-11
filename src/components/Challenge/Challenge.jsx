// Inicio del código
import React, { useState } from "react";

export default function Challenge() {
  const [formState, setFormState] = useState({ name: "", surname: "", age: 0 });

  function onInputChange(evt) {
    setFormState((prevState) => ({ ...prevState, [evt.target.name]: evt.target.value }));
  }

  function onSubmit(evt) {
    evt.preventDefault();
    console.log(`Your name is ${formState.name} ${formState.surname} and you have ${formState.age} years`);
  }

  return (
    <form onSubmit={onSubmit}>
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="name" style={{ marginRight: 4 }}>
          Nombre
        </label>
        <input id="name" type="text" name="name" onChange={onInputChange} />
      </div>
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="surname" style={{ marginRight: 4 }}>
          Apellido
        </label>
        <input id="surname" type="text" name="surname" onChange={onInputChange} />
      </div>
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="age" style={{ marginRight: 4 }}>
          Edad
        </label>
        <input id="age" type="number" name="age" onChange={onInputChange} />
      </div>

      <button type="submit" disabled={!(formState.name !== "" && formState.surname !== "" && formState.age !== "")}>
        Crear orden
      </button>
    </form>
  );
}
