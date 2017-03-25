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
                  var teleNumber  = ""
                  var state  = ""
                  var city  = ""
                  if(p.telecom != undefined){
                    let telecom = p.telecom[0];
                     teleNumber = telecom.value;
                  }
                  if(p.address != undefined){
                    let address = p.address[0];
                    var city = p.address[0].city;
                    var state = p.address[0].state;
                  }
                  let mrn = p.id
                  let dob= p.birthDate
                  let fullName = name.given.join(" ") + " " + name.family.join(" ");
                  let patient = {name:fullName, mrn: mrn, dob: dob, state: state, city: city, tele: teleNumber}
                  return {name:fullName, mrn: mrn, dob: dob, state: state, city: city, tele: teleNumber}
        })
        return patientName
      },
getBloodPressure(id){

  let smarter = window.FHIR.client({
        serviceUrl: 'https://fhir-open-api-dstu2.smarthealthit.org',
         patientId: id,
        auth: {
          type: 'none'
        }
      });
      let patientInfo = smarter.patient;
    let bloodP =  patientInfo.api.search({type: "Observation", query: {code:  {$or: ["55284-4" ]}}}) // Query lonic code for systolic and diastolic pressure
   .then(function(bps) {
       var data=[];
       var datas=[];
       var bloodSys=[['Date', 'BloodPressure']];
       var x=[];
       var dia=0
       var sys=0;
       [1,2],[3,3]
      bps.data.entry.forEach(function(bp){            // how can we access diffrent datat from the model for a set of blood pressures do it for one blood pressure
             var blood= bp.resource.component;

x.push(bp.resource.effectiveDateTime)
             blood.forEach(function(b){
            if(b.code.coding[0].code=="8480-6" ){

           datas.push(b.valueQuantity.value)
           x.push(b.valueQuantity.value)
           bloodSys.push(x)
              sys=b.valueQuantity.value
           x=[]
           }
            if(b.code.coding[0].code=="8462-4" ){

           data.push(b.valueQuantity.value)}
             dia=b.valueQuantity.value
             })
             console.log(bloodSys)
       });
       return {sys:bloodSys, dia:data}
     })
     return bloodP
  }
}
