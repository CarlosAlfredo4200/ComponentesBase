import React, { useState } from "react";
import Select from "react-select";
import './SelectComp.css'

const paises = [
  { value: "seleccionar", label: "-- Seleccionar --" },
  { value: "mexico", label: "Mexico" },
  { value: "colombia", label: "Colombia" },
  { value: "chile", label: "Chile" },
];

const ciudades = ["Medellin", "Bogota", "Cali"];

const barrios = [
    {id: 123, name:'Cordoba', direccion:'cll80#67a-28'},
    {id: 124, name:'Robledo', direccion:'cll80#67a-29'},
    {id: 125, name:'Kenndy', direccion:'cll80#67a-30'}
]

const SelectComp = () => {
  const [values, setValues] = useState("");

  const handleSelectValue = (value) => {
    setValues(value);
    console.log(values);
  };
  return (
    <>
      <Select className="select"
        //   --Primera opcion --
        //   defaultValue={paises[0]}
        //   options={paises}

        //   -- segunda opcion --

        // options={ciudades.map((data) => ({ label: data, value: data }))}
              
            //   -- tercera opcion --
              
         options={barrios.map((data) => ({ label: data.name, value: data.id }))}
        onChange={handleSelectValue}
      />
    </>
  );
};

export default SelectComp;
