import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { InputExamples } from '../components/AddGoat';

const Home: React.FC = () => {
  // const [weightRecord, setWeightRecord] = useState([{weight: 0, date: ''}]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Goat App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <InputExamples />
      </IonContent>
    </IonPage>
  );
};

export default Home;
