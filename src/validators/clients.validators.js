const {
  body, param, query, validationResult,
} = require('express-validator');

module.exports = {
  chain: {
    getOne: [
      query('id').custom((value, { req }) => {
        if (!value && !req.query.name) {
          throw new Error('Nenhum parametro válido foi informado!');
        }

        return true;
      }),
    ],
    create: [
      body('name', 'Nome não informado')
        .exists(),
      body('sex', 'Sexo não informado')
        .exists(),
      body('birthDate', 'Data de nascimento não informada')
        .exists(),
      body('age', 'Idade não informada')
        .exists(),
      body('city', 'Cidade não informada')
        .exists(),
    ],
    update: [
      param('clientId', 'Id invalido!')
        .exists(),
    ],
    destroy: [
      param('clientId', 'Id invalido!')
        .exists(),
    ],
  },
  result: (req, res, next) => { // eslint-disable-line no-unused-vars
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return next();
  },
};
