const resolvers = {
  Query: {
    orders: async(_, {status}, {dataSources}) => {
        const result =  await (status 
            ? dataSources.db.getOrderByStatus(status)
            : dataSources.db.getOrders());
        return result ? result.map(val => ({...val, items: val.items ? val.items.split(',') : val.items})) : []
    },
    order: async (_, {id}, {dataSources}) => {
        const result = await dataSources.db.getOrder(id);
        return {
            ...result,
            items: result.items ? result.items.split(',') : items
        }
    }
},
Mutation: {
    updateStatus: async(_, {id, status}, {dataSources}) => {
        await dataSources.db.updateStatus(id, status);
        return dataSources.db.getOrder(id);
    }
}
};

module.exports = resolvers;
