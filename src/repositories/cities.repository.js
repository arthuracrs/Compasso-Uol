const CityModel = require('../models/city.model');

module.exports = {
  save: async (name, state) => {
    const city = new CityModel({
      name,
      state,
    });

    await city.save();

    return city;
  },
  find: async (query) => {
    const city = await CityModel.find(query);

    return city;
  },
  update: async (id, body) => {
    const city = await CityModel.findByIdAndUpdate(id, body, { new: true });

    return city;
  },
  destroy: async (id) => {
    const city = await CityModel.findByIdAndDelete(id);

    return city;
  },
};
