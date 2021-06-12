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
    const client = await ClientModel.find(query).populate('city');

    return client;
  },
  destroy: async (id) => {
    const client = await ClientModel.findOneAndDelete(id);

    return client;
  },
};
