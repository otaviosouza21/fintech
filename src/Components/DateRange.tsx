import React from "react";
import DateInput from "./DateInput";
import { useData } from "../Context/DataContext";

const DateRange = () => {
 const {data,inicio,setInicio,final,setFinal} = useData()
console.log(data);

 
  return (
    <form className='box flex' onSubmit={(e)=>e.preventDefault()}>
      <DateInput label="Inicio" onChange={({target}) =>setInicio(target.value)} />
      <DateInput label="Final" onChange={({target}) =>setFinal(target.value)} />
    </form>
  );
};

export default DateRange;
