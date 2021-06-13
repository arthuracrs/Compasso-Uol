const citiesRepository = require('../repositories/cities.repository');

module.exports = {
  create: async (req, res) => {
    try {
      const { name, state } = req.body;
      const newCity = await citiesRepository.save(name, state);
      return res.status(201).json({
        message: 'Cidade criada com sucesso!',
        data: newCity,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: 'Falhou',
      });
    }
  },
  getMany: async (req, res) => {
    try {
      const query = {};
      if (req.query.city) query.name = req.query.city;
      if (req.query.state) query.state = req.query.state;

      if (query && Object.keys(query).length === 0 && query.constructor === Object) {
        throw 'Deliberate Error!';
      }

      const city = await citiesRepository.find(query);
      return res.status(200).send({
        message: 'Cidade buscada com sucesso!',
        data: city,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: 'Falhou',
      });
    }
  },
  update: async (req, res) => {
    try {
      const { cityId } = req.params;
      const city = await citiesRepository.update(cityId, req.body);
      return res.status(200).send({
        message: 'Cidade atualizada com sucesso!',
        data: city,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: 'Falhou',
      });
    }
  },
  destroy: async (req, res) => {
    try {
      const { cityId } = req.params;
      const city = await citiesRepository.destroy(cityId);
      return res.status(200).send({
        message: 'Cidade deletada com sucesso!',
        data: city,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: 'Falhou',
      });
    }
  },
};
