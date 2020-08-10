import React, { useState, useEffect }  from 'react';
import Banner from './components/Banner';
import Medlist from './components/Medlist';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentName, setCurrentName] = useState(0);
  const [currentLastName, setCurrentLastName] = useState(0);
  const [currentMedications, setCurrentMedications] = useState(0);



// get the patient name from the fhir server.
  useEffect(() => {
    fetch('http://localhost:8080/hapi-fhir-jpaserver/fhir/Patient/1652').then(res => res.json()).then(data => {
      setCurrentTime(data);
      setCurrentName(data.name[0])
      setCurrentLastName(data.name[0].given[0])
    });
  }, []);

// get a list of mediaitons from the fhir server based on patient id.
  useEffect(() => {
    fetch('http://localhost:8080/hapi-fhir-jpaserver/fhir/MedicationRequest?patient=1652').then(res => res.json()).then(data => {
      setCurrentMedications(data);
      for (var meds of data.entry){
        console.log(meds);
      }

      console.log(data.entry[0].resource.medicationCodeableConcept.text);



    });
  }, []);

  // useEffect(() => {
  //   fetch('/price/8').then(res => res.json()).then(data => {
  //     console.log(data);
  //     setCurrentTime(data.price);
  //   });
  // }, []);

  return (
  <div>
<Banner dem={currentTime} namePatient={currentName.family} lastName={currentLastName}/>
<Medlist meds={currentMedications.entry}/>
  </div>
  );
}

export default App;
