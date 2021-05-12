import Head from 'next/head'
import { useReducer } from 'react';

import Welcome from '../components/welcome';
import Cards from '../components/cards';

import LearningStore from '../store/learning';

/* 

  further features: 
  - Style
  - Use Context API to share state. 
  - Percentage until complete.
  - Switch between code json data i.e. typescript, node etc. 
  - Include GITHUB / Codepen link for displaying code and concepts (there needs to be plenty of examples).
  - Set up a Node based API to serve the data.
  
*/

export default function Home() {

  const initialState = { active: false, topicId: 1, itemId: 1 };

  const [state, dispatch] = useReducer(LearningStore, initialState);

  const startLearning = () => {
    dispatch({ type: 'START_LEARNING' });
  }

  const stopLearning = () => {
    dispatch({ type: 'STOP_LEARNING' });
  }

  const nextCard = () => {
    dispatch({ type: 'NEXT_CARD' });
  }

  const nextTopic = () => {
    dispatch({ type: 'NEXT_TOPIC' });
  }

  return (
    <div className="layout">
      <Head>
        <title>Frontend Developer Learning Cards - Upgrade your knowledge base or do some essential inteview preperation</title>
        <meta name="description" content="Upgrade your knowledge base or do some essential inteview preperation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!state.active ? <Welcome actionFunction={startLearning} /> : <Cards actionFunction={stopLearning} nextCard={nextCard} initialState={state} nextTopic={nextTopic} />}
      </main>
    </div>
  )
}
