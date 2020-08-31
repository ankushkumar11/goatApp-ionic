import React, { useState } from 'react';
import { IonGrid, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonDatetime, IonIcon, IonRow,IonCol, IonSelect, IonSelectOption, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';
import { add, remove } from 'ionicons/icons';
import * as firebase from 'firebase';



export const InputExamples: React.FC = ({history}) => {

  const [finalList, setFinalList] = useState([]);
  const [babyList, setBabyList] = useState([{ weight: null, sex: "", status: "" }]);
  const [vaccineList, setVaccineList] = useState([{ vaccine: "", date: "" }]);
  const [dewormList, setDewormList] = useState([{ deworm: "", date: "" }]);
  const [pcList, setPcList] = useState([{ pc: "", date: "" }]);
  const [weightList, setWeightList] = useState([{ weight: null, date: "" }]);
  const [generalList, setGeneralList] = useState([{ tagNumber: null, breedDetails: "", dob: "", motherTagNo: "", sex: "", status: ""}]);


  // handle click event of the Add button
  // const handleSubmitClick = () => {
  //   setFinalList([...finalList, ...babyList]);
  // };

  const firebaseConfig = {

  };

  // firebase.initializeApp(firebaseConfig);
  console.log(firebase.apps.length)
  console.log("Helllloooo")
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  function writeUserData(){
    console.log({"generalDetails":generalList,"productionDetails":babyList,"vaccinationDetails":vaccineList,"dewormingDetails":dewormList,"personalCare":pcList,"weightRecords":weightList});
    var body={"generalDetails":generalList,"productionDetails":babyList,"vaccinationDetails":vaccineList,"dewormingDetails":dewormList,"personalCare":pcList,"weightRecords":weightList};
    return body;
  }

  function submit() {
    var body=writeUserData();
    firebase.database().ref('users/' + 10).set(body).then(()=>{})
  }

  // handle click event of the Remove button
  const handleBabyRemoveClick = (index:number) => {
    const list = [...babyList];
    list.splice(index, 1);
    setBabyList(list);
  };

  // handle click event of the Add button
  const handleBabyAddClick = () => {
    setBabyList([...babyList, { weight: null, sex: "", status: "" }]);
  };

  // handle click event of the Remove button
  const handleVaccineRemoveClick = (index:number) => {
    const list = [...vaccineList];
    list.splice(index, 1);
    setVaccineList(list);
  };

  // handle click event of the Add button
  const handleVaccineAddClick = () => {
    setVaccineList([...vaccineList, { vaccine: "", date: "" }]);
  };

  // handle click event of the Remove button
  const handleDewormRemoveClick = (index:number) => {
    const list = [...dewormList];
    list.splice(index, 1);
    setDewormList(list);
  };

  // handle click event of the Add button
  const handleDewormAddClick = () => {
    setDewormList([...dewormList, { deworm: "", date: "" }]);
  };

  // handle click event of the Remove button
  const handlePcRemoveClick = (index:number) => {
    const list = [...pcList];
    list.splice(index, 1);
    setPcList(list);
  };

  // handle click event of the Add button
  const handlePcAddClick = () => {
    setPcList([...pcList, { pc: "", date: "" }]);
  };

  // handle click event of the Remove button
  const handleWeightRemoveClick = (index:number) => {
    const list = [...weightList];
    list.splice(index, 1);
    setWeightList(list);
    console.log(index)
    console.log(list)
  };

  // handle click event of the Add button
  const handleWeightAddClick = () => {
    setWeightList([...weightList, { weight: null, date: "" }]);
  };
  

  // const onBabyChange = (e:any,i:number,f:"weight" | "sex")=> {
  //   const babList = [...babyList];
  //   babList[i][f] = e.target.value;
  //   setBabyList(babList);
  // }

  const onTagChange = (e:any)=> {
    const genList = [...generalList];
    genList[0].tagNumber = e.target.value;
    setGeneralList(genList);
  }

  const onBreedChange = (e:any)=> {
    const genList = [...generalList];
    genList[0].breedDetails = e.target.value;
    setGeneralList(genList);
  }

  const onSexChange = (e:any)=> {
    const genList = [...generalList];
    genList[0].sex = e.target.value;
    setGeneralList(genList);
  }

  const onMotherTagChange = (e:any)=> {
    const genList = [...generalList];
    genList[0].motherTagNo = e.target.value;
    setGeneralList(genList);
  }

  const onDobChange = (e:any)=> {
    const genList = [...generalList];
    genList[0].dob = e.target.value;
    setGeneralList(genList);
  }

  const onStatusChange = (e:any)=> {
    const genList = [...generalList];
    genList[0].status = e.target.value;
    setGeneralList(genList);
  }

  const onWeightChange = (e:any,i:number)=> {
    const wtList = [...weightList];
    wtList[i].weight = e.target.value;
    setWeightList(wtList);
  }

  const onWeightDateChange = (e:any,i:number)=> {
    const wtList = [...weightList];
    wtList[i].date = e.target.value;
    setWeightList(wtList);
  }

  const onBabyWeightChange = (e:any,i:number)=> {
    const babList = [...babyList];
    babList[i].weight = e.target.value;
    setBabyList(babList);
  }

  const onBabySexChange = (e:any,i:number)=> {
    const babList = [...babyList];
    babList[i].sex = e.target.value;
    setBabyList(babList);
  }

  const onBabyStatusChange = (e:any,i:number)=> {
    const babList = [...babyList];
    babList[i].status = e.target.value;
    setBabyList(babList);
  }

  const onVaccineChange = (e:any,i:number)=> {
    const vacList = [...vaccineList];
    vacList[i].vaccine = e.target.value;
    setVaccineList(vacList);
  }

  const onVaccineDateChange = (e:any,i:number)=> {
    const vacList = [...vaccineList];
    vacList[i].date = e.target.value;
    setVaccineList(vacList);
  }

  const onDewormChange = (e:any,i:number)=> {
    const deList = [...dewormList];
    deList[i].deworm = e.target.value;
    setDewormList(deList);
  }
  
  const onDewormDateChange = (e:any,i:number)=> {
    const deList = [...dewormList];
    deList[i].date = e.target.value;
    setDewormList(deList);
  }

  const onPcChange = (e:any,i:number)=> {
    const pList = [...pcList];
    pList[i].pc = e.target.value;
    setPcList(pList);
  }

  const onPcDateChange = (e:any,i:number)=> {
    const pList = [...pcList];
    pList[i].date = e.target.value;
    setPcList(pList);
  }


  return (
    <IonList>
      <IonCard color="danger">
        <IonCardHeader>
          <IonCardTitle>
            <IonItem>
              <IonInput value="GENERAL DETAILS" readonly></IonInput>
            </IonItem>
          </IonCardTitle>
        </IonCardHeader>

      <IonCardContent>
      <IonItem>
        <IonLabel position="floating">Tag Number</IonLabel>
        <IonInput type="number" onIonChange={(e:any)=>onTagChange(e)}></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Breed Details</IonLabel>
        <IonInput onIonChange={(e:any)=>onBreedChange(e)}></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Sex</IonLabel>
        <IonSelect placeholder="Select One" onIonChange={(e:any)=>onSexChange(e)}>
          <IonSelectOption value="F">Female</IonSelectOption>
          <IonSelectOption value="MA">Male Andul</IonSelectOption>
          <IonSelectOption value="MK">Male Khassi</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Mother Tag No.</IonLabel>
        <IonInput type="number" onIonChange={(e:any)=>onMotherTagChange(e)}></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">DOB</IonLabel>
        <IonDatetime onIonChange={(e:any)=>onDobChange(e)} displayFormat="DD/MM/YYYY" min="1994-03-14" max="2042-12-09"></IonDatetime>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Status</IonLabel>
        <IonInput onIonChange={(e:any)=>onStatusChange(e)}></IonInput>
      </IonItem>

      </IonCardContent>
      </IonCard>

      <IonCard color="secondary">
        <IonCardHeader>
          <IonCardTitle>
            <IonItem>
              <IonInput value="PRODUCTION DETAILS" readonly></IonInput>
            </IonItem>
          </IonCardTitle>
        </IonCardHeader>

      <IonCardContent>
      
        <IonGrid>
        {
      babyList.map((x,i) => (
        <IonRow key={i}>
          <IonCol>
            <IonItem>
            <IonLabel position="floating">Baby Weight(in Kg)</IonLabel>
            <IonInput value={x["weight"]} onIonChange={(e:any)=>onBabyWeightChange(e,i)}></IonInput>
          </IonItem>
          </IonCol>
          <IonCol>
          <IonItem>
            <IonLabel position="floating">Baby Sex</IonLabel>
            <IonSelect value={x["sex"]} placeholder="Select One" onIonChange={(e:any)=>onBabySexChange(e,i)}>
              <IonSelectOption value="F">Female</IonSelectOption>
              <IonSelectOption value="MA">Male Andul</IonSelectOption>
              <IonSelectOption value="MK">Male Khassi</IonSelectOption>
            </IonSelect>
          </IonItem>
          </IonCol>
          <IonCol> <IonItem>
            <IonLabel position="floating">Baby Status</IonLabel>
            <IonSelect value={x["status"]} placeholder="Select One" onIonChange={(e:any)=>onBabyStatusChange(e,i)}>
              <IonSelectOption value="alive">Alive</IonSelectOption>
              <IonSelectOption value="died">Died</IonSelectOption>
            </IonSelect>
          </IonItem>
          </IonCol>
          <IonCol>
          
          
            <IonButton color="light" onClick={() => handleBabyRemoveClick(i)}>
              <IonIcon icon={remove}/>
            </IonButton>
          
          </IonCol>
        </IonRow>  ))}
        <IonButton color="light" onClick={handleBabyAddClick}>
            <IonIcon icon={add}/>
          </IonButton>
      </IonGrid>
    
        </IonCardContent>
      </IonCard>  


      <IonCard color="tertiary">
        <IonCardHeader>
          <IonCardTitle>
      <IonItem>
        <IonInput value="VACCINATION DETAILS" readonly></IonInput>
      </IonItem>
      </IonCardTitle>
        </IonCardHeader>

        <IonCardContent>   
        <IonGrid>
               {
      vaccineList.map((x,i) => (
        <IonRow key={i}>
          <IonCol>
          <IonItem>
            <IonLabel position="floating">Vaccine Name</IonLabel>
            <IonSelect value={x["vaccine"]} placeholder="Select One" onIonChange={(e:any)=>onVaccineChange(e,i)}>
              <IonSelectOption value="et">ET</IonSelectOption>
              <IonSelectOption value="fmd">FMD</IonSelectOption>
              <IonSelectOption value="ppr">PPR</IonSelectOption>
              <IonSelectOption value="pox">POX</IonSelectOption>
            </IonSelect>
          </IonItem>
          </IonCol>
          <IonCol>
          <IonItem>
            <IonLabel position="floating">Date</IonLabel>
            <IonDatetime value={x["date"]} onIonChange={(e:any)=>onVaccineDateChange(e,i)} displayFormat="DD/MM/YYYY"></IonDatetime>
          </IonItem>
          </IonCol>
          <IonCol>

            <IonButton color="light" onClick={() => handleVaccineRemoveClick(i)}>
              <IonIcon icon={remove}/>
            </IonButton>
        
          </IonCol>
        </IonRow> ))}
        <IonButton color="light" onClick={handleVaccineAddClick}>
            <IonIcon icon={add}/>
          </IonButton>
      </IonGrid>
    
        </IonCardContent>
      </IonCard>  
    
      <IonCard color="success">
        <IonCardHeader>
          <IonCardTitle>
      <IonItem>
        <IonInput value="DEWORMING DETAILS" readonly></IonInput>
      </IonItem>
      </IonCardTitle>
        </IonCardHeader>

        <IonCardContent>

        <IonGrid>
          
      {
      dewormList.map((x,i) => (
        <IonRow key={i}>
          <IonCol>
          <IonItem>
          <IonLabel position="floating">Deworm Name</IonLabel>
            <IonSelect value={x["deworm"]} placeholder="Select One" onIonChange={(e:any)=>onDewormChange(e,i)}>
              <IonSelectOption value="ivermectin">ivermectin</IonSelectOption>
              <IonSelectOption value="fenbendazole">fenbendazole</IonSelectOption>
              <IonSelectOption value="hitek f inj">hitek f inj</IonSelectOption>
              <IonSelectOption value="albendazole">albendazole</IonSelectOption>
            </IonSelect>
          </IonItem>
          </IonCol>
          <IonCol>
          <IonItem>
            <IonLabel position="floating">Date</IonLabel>
            <IonDatetime value={x["date"]} onIonChange={(e:any)=>onDewormDateChange(e,i)} displayFormat="DD/MM/YYYY"></IonDatetime>
          </IonItem>
          </IonCol>
          <IonCol>
          
            <IonButton color="light" onClick={() => handleDewormRemoveClick(i)}>
              <IonIcon icon={remove}/>
            </IonButton>
        
          </IonCol>
        </IonRow>))}
        <IonButton color="light" onClick={handleDewormAddClick}>
          <IonIcon icon={add}/>
        </IonButton>
      </IonGrid>
      </IonCardContent>
      </IonCard>   
    

      <IonCard color="warning">
        <IonCardHeader>
          <IonCardTitle>
      <IonItem>
        <IonInput value="PERSONAL CARE" readonly></IonInput>
      </IonItem>
      </IonCardTitle>
        </IonCardHeader>

        <IonCardContent>

  
        <IonGrid>
        {
      pcList.map((x,i) => (
        <IonRow key={i}>
          <IonCol>
          <IonItem>
          <IonLabel position="floating">Name</IonLabel>
            <IonSelect value={x["pc"]} placeholder="Select One" onIonChange={(e:any)=>onPcChange(e,i)}>
              <IonSelectOption value="bathing">Bathing</IonSelectOption>
              <IonSelectOption value="khorCutting">Khor Cutting</IonSelectOption>
              <IonSelectOption value="HairCuting">Hair Cutting</IonSelectOption>
            </IonSelect>
          </IonItem>
          </IonCol>
          <IonCol>
          <IonItem>
            <IonLabel position="floating">Date</IonLabel>
            <IonDatetime value={x["date"]} onIonChange={(e:any)=>onPcDateChange(e,i)} displayFormat="DD/MM/YYYY"></IonDatetime>
          </IonItem>
          </IonCol>
          <IonCol>
     
            <IonButton color="light" onClick={() => handlePcRemoveClick(i)}>
              <IonIcon icon={remove}/>
            </IonButton>
          
          </IonCol>
        </IonRow>))}
        <IonButton color="light" onClick={handlePcAddClick}>
          <IonIcon icon={add}/>
        </IonButton>
      </IonGrid>
      </IonCardContent>
      </IonCard>   


      <IonCard color="primary">
        <IonCardHeader>
          <IonCardTitle>
            <IonItem>
              <IonInput value="WEIGHT RECORDS" readonly></IonInput>
            </IonItem>
          </IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
        <IonGrid >
        {
      weightList.map((x,i) => (
        <IonRow key={i}>
          <IonCol>
            <IonItem>
            <IonLabel position="floating">Weight(in Kg)</IonLabel>
            <IonInput value={x["weight"]} onIonChange={(e:any)=>onWeightChange(e,i)}></IonInput>
          </IonItem>
          </IonCol>
          <IonCol>
          <IonItem>
            <IonLabel position="floating">Date</IonLabel>
            <IonDatetime value={x["date"]} onIonChange={(e:any)=>onWeightDateChange(e,i)} displayFormat="DD/MM/YYYY" min="1994-03-14" max="2042-12-09"></IonDatetime>
          </IonItem>
          </IonCol>
          <IonCol>
            <IonButton color="light" onClick={() => handleWeightRemoveClick(i)}>
              <IonIcon icon={remove}/>
            </IonButton>
          </IonCol>
          </IonRow> ))}
        <IonButton color="light" onClick={handleWeightAddClick}>
          <IonIcon icon={add}/>
        </IonButton>
      </IonGrid>
      </IonCardContent>
      </IonCard>   
      <IonButton color="primary" onClick={submit}>Submit</IonButton>
    </IonList>

    
  );
  
  
};