const ClientModel = require('../models/client.model');

module.exports = {
  save: async (name, sex, birthDate, age, city) => {
    const client = new ClientModel({
      name, sex, birthDate, age, city,
    });

    await client.save();

    return client;
  },
  update: async (id, body) => {
    const client = await ClientModel.findByIdAndUpdate(id, body, { new: true });

    return client;
  },
  find: async (query) => {
    const tempQuery = {};

    if (query.id) tempQuery._id = query.id;
    if (query.name) tempQuery.name = query.name;

    const client = await ClientModel.findOne(tempQuery).populate('city');

    return client;
  },
  destroy: async (id) => {
    const client = await ClientModel.findOneAndDelete(id);

    return client;
  },
};
