const FindCard = (data, topicId, itemId) => {

    console.log("find card data: ", data, " topic id: ", topicId, " item id: ", itemId);

    return data.find(o => o.topicId === topicId && o.itemId === itemId);

}

export default FindCard;