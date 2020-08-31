import React, { useState, useEffect } from 'react';
import './ViewGoat.css';
import { IonCardHeader, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import * as firebase from 'firebase';

interface ContainerProps { }

const ViewGoat: React.FC<ContainerProps> = () => {

  const [data, setData] = useState([]);
  

  const firebaseConfig = {
  
  };

  // firebase.initializeApp(firebaseConfig);
  console.log(firebase.apps.length)
  console.log("Helllloooo")
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  var user=firebase.database().ref("/");

  useEffect(() => {

    document.title = `You clicked times`;
    
  // user.on("child_added",function(data){
  // var userValue=data.val();
  // console.log(userValue);
    
  }, []);


  return (
    <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
        </IonCard>
  );
};

export default ViewGoat;
