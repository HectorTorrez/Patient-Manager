import { useEffect, useState } from "react"
import { Formulario, Header, PatientsList } from "./components"


function App() {

  const [patients, setPatients] = useState(()=>{
    const localData = localStorage.getItem('patients')
    return localData ? JSON.parse(localData) : []
  })
  const [patient, setPatient] = useState({})

  const onDelete = (id) => {
    const patientsUpdate = patients.filter(pt => pt.id !== id)
    setPatients(patientsUpdate)
  }

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  return (
    <div className='container mx-auto h-screen'>
      <Header />
      <div className='mt-7 md:flex h-5/6'>
        <Formulario
          setPatients={setPatients}
          patients={patients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          onDelete={onDelete}
        />
      </div>
    </div>
  )
}

export default App
