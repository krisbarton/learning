import ReactData from '../../data/react.json';
import FindCard from '../../utilities/findCard';
import CardDisplay from '../cards/display';

const Cards = ({ actionFunction, nextCard, initialState, nextTopic }) => {

    const card = FindCard(ReactData, initialState.topicId, initialState.itemId);
    const nextCardThisTopic = FindCard(ReactData, initialState.topicId, initialState.itemId + 1);
    const nextTopicFirstCard = FindCard(ReactData, initialState.topicId + 1, 1);

    return (
        <>
            { card ?
                <>
                    <CardDisplay title={card.title} content={card.content} />
                    { nextCardThisTopic ? <button onClick={nextCard}>Next Card</button> : ''}
                    { nextTopicFirstCard ? <button onClick={nextTopic}>Next Topic</button> : ''}
                    <button onClick={actionFunction}>Stop Learning</button>
                </> :
                <p>No more cards!</p>
            }
        </>
    )

}

export default Cards;