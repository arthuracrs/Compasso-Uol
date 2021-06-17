const {
  body, query, param, validationResult,
} = require('express-validator');

module.exports = {
  chain: {
    getMany: [
      query('city').custom((value, { req }) => {
        if (!value && !req.query.state) {
          throw new Error('Nenhum parametro válido foi informado!');
        }

        return true;
      })],
    create: [
      body('name', 'Nome não informado')
        .exists(),
      body('state', 'Estado não informado')
        .exists(),
    ],
    update: [
      param('cityId', 'Id invalido!')
        .exists(),
    ],
    destroy: [
      param('cityId', 'Id invalido!')
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
