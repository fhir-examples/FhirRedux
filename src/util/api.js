export const smart = window.FHIR.client({
      serviceUrl: 'https://fhir-open-api-dstu2.smarthealthit.org',
       patientId: "99912345",
      auth: {
        type: 'none'
      }
    });


    export const api = {

      getPatientName(id) {

        let smarter = window.FHIR.client({
              serviceUrl: 'https://fhir-open-api-dstu2.smarthealthit.org',
               patientId: id,
              auth: {
                type: 'none'
              }
            });
        let patientInfo = smarter.patient.read();
        let patientName =  patientInfo.then((p)=> {
                  let name = p.name[0];
                  let mrn = p.id
                  let dob= p.birthDate
                  let fullName = name.given.join(" ") + " " + name.family.join(" ");
                  return {name:fullName, mrn: mrn, dob: dob}
        })
        return patientName
      }
  }
