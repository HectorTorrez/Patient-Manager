import { useEffect, useState } from "react"
import { Error } from './Error'

export const Formulario = ({ setPatients, patients, patient, setPatient }) => {

  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [symptom, setSymptom] = useState('')
  const [error, setError] = useState(false)


  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptom(patient.symptom)

    }
  }, [patient])

  const generateId = () => {
    let name = Date.now()
    let time = Math.floor(Math.random() * 100)

    return name + time
  }

  const onNameChange = ({ target }) => {
    setName(target.value)
  }

  const onOwnerChange = ({ target }) => {
    setOwner(target.value)
  }
  const onEmailChange = ({ target }) => {
    setEmail(target.value)
  }

  const onDateChange = ({ target }) => {
    setDate(target.value)
  }

  const onSymptomChange = ({ target }) => {
    setSymptom(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if ([name, owner, email, date, symptom].includes('')) {
      setError(true)
      return
    }
    setError(false)

    const objectPatients = {
      name,
      owner,
      email,
      date,
      symptom,
    }

    if (patient.id) {
      //editando registro
      objectPatients.id = patient.id
      const patientsUpdate = patients.map(patientState => patientState.id === patient.id ? objectPatients : patientState)
      setPatients(patientsUpdate)
      setPatient({})
    } else {
      //nuevo registro
      objectPatients.id = generateId()
      setPatients([...patients, objectPatients,])
    }

    setName('')
    setOwner('')
    setEmail('')
    setDate('')
    setSymptom('')
  }
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y
        <span className="text-indigo-600 font-bold ml-1.5">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 ">
        {
          error && <Error message='Es necesario que todos los campos esten llenos' />
        }
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={onOwnerChange}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={onEmailChange}


          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={onDateChange}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
          <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Sintomas"
            name="" id="sintomas"
            value={symptom}
            onChange={onSymptomChange}
          />

        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase hover:bg-indigo-700 cursor-pointer transition-color"
          value={patient.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  )
}