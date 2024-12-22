import react,{useState} from 'react';
import Card from './Card';
import S from './S';
import Onchange from './Onchange';
import Useffect from './Useffect';
import FormData from './FormData';
import Map from './Map';
import Filter from './Filter';
import LogInForm from './LogInForm';
import SignUp from './SignUp';
import Calculator from './Calculator';
import FetchApi from './FetchApi';


function App() {
 
  return (
    <div className="App">
      {/* <Card title="Eren Yeager" body="Eren Yeager (エレン・イェーガー Eren Yēgā?) was a former member of the Survey Corps. He was the main protagonist of Attack on Titan. He lived in Shiganshina District with his parents until the fall of Wall Maria, where he impotently witnessed his mother being eaten by a Titan."/>
      <Card title="Shikamaru Nara" body="Shikamaru Nara (奈良シカマル, Nara Shikamaru) is a shinobi of Konohagakure's Nara clan. Though lazy by nature, Shikamaru has a rare intellect that consistently allows him to prevail in combat. The responsibilities that these successes leave him with cause him frequent annoyance, "/>
      <Card title="Temari" body="Temari Nara (奈良テマリ, Nara Temari) is a former kunoichi of Sunagakure's Kazekage Clan and the eldest of the Three Sand Siblings. After marrying Shikamaru Nara, she becomes a member of the Nara Clan and emigrates to Konohagakure, where she works as a kunoichi for the village. "/>
      <S/>
      <Onchange/>
      <Useffect/>
      <FormData/>
      <Map/>
      <Filter/> 
      <LogInForm/>
      <SignUp/>
<Calculator/>*/}
<FetchApi/>
    </div>
  );
}

export default App;
