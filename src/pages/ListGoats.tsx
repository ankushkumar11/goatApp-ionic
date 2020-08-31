import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSpinner } from '@ionic/react';
import React, { useState } from 'react';
// import ExploreContainer from '../components/ExploreContainer';
import './ListGoats.css';
import ViewGoat from '../components/ViewGoat';
// import { InputExamples } from '../components/AddGoat';

const ListGoats: React.FC = () => {
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
        <ViewGoat />
      </IonContent>
      <IonSpinner name="bubbles" />
    </IonPage>
  );
};

export default ListGoats;
