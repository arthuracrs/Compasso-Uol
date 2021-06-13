const clientRepository = require('../repositories/clients.repository');
const cityRepository = require('../repositories/cities.repository');

module.exports = {
  create: async (req, res) => {
    try {
      const {
        name, sex, birthDate, age, city,
      } = req.body;

      const cityDocument = await cityRepository.find({ name: city });
      if (!cityDocument) {
        return res.status(400).json({
          message: 'A cidade informada não existe!',
        });
      }

      const newClient = await clientRepository.save(name, sex, birthDate, age, cityDocument[0]._id);

      return res.status(201).json({
        message: 'Cliente criado com sucesso!',
        data: newClient,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: 'Falhou',
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const query = {};
      if (req.query.id) query.id = req.query.id;
      if (req.query.name) query.name = req.query.name;

      if (query && Object.keys(query).length === 0 && query.constructor === Object) {
        throw 'Deliberate Error!';
      }

      const client = await clientRepository.find(req.query);

      return res.status(200).json({
        message: 'Cliente buscado com sucesso!',
        data: client,
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
      const { clientId } = req.params;
      const client = await clientRepository.update(clientId, { name: req.body.name });

      return res.status(200).json({
        message: 'Cliente atualizado com sucesso!',
        data: client,
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
      const { clientId } = req.params;
      const client = await clientRepository.destroy(clientId);

      return res.status(200).json({
        message: 'Cliente deletado com sucesso!',
        data: client,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        message: 'Falhou',
      });
    }
  },
};
