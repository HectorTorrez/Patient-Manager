import { Patients } from "./Patients"

export const PatientsList = ({ patients, setPatient, onDelete }) => {



  return (
    <div className="md:w-1/2  lg:w-3/5 ">
      {patients && patients.length ? (
        <>
          <h2 className="font-black  text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-2 mb-2  text-center">
            Administra tus
            <span className="text-indigo-600 font-bold ml-1.5">Pacientes y Citas</span>
          </p>

          <div className="md:h-full overflow-y-scroll">

            {
              patients.map(patient => (
                <Patients
                  key={patient.id}
                  patient={patient}
                  setPatient={setPatient}
                  onDelete={onDelete}
                />

              ))
            }

          </div>
        </>
      ) : (
        <>
          <h2 className="font-black  text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-2 mb-2  text-center">
            Comienza agregando paciente
            <span className="text-indigo-600 font-bold ml-1.5">y apareceran en este lugar</span>
          </p>
        </>
      )
      }

    </div>
  )
}