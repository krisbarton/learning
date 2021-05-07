const LearningStore = (state, action) => {

    switch (action.type) {
        case 'START_LEARNING':
            console.log("learning started...");
            return { ...state, active: true };
        case 'STOP_LEARNING':
            return { ...state, itemId: 1, topicId: 1, active: false };
        case 'NEXT_CARD':
            console.log("next card clicked. current state is ", state);
            return { ...state, itemId: state.itemId + 1 }
        case 'NEXT_TOPIC':
            return { ...state, itemId: 1, topicId: state.topicId + 1 }
        default:
            return 'nowts bin done';
    }

}

export default LearningStore;