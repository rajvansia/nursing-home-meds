import React from 'react';
import '../meds.css';

export default function Banner(props) {

  return (

<div class="header">
<h1 >MIMI Medication Tracker</h1>
<h1>Name {props.namePatient} {props.lastName} DOB {props.dem.birthDate} Location</h1>
</div>

);
}
