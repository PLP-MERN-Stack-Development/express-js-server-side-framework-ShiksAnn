const { ValidationError } = require('../utils/errors');

exports.validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || !description || !price || !category || typeof inStock !== 'boolean') {
    return next(new ValidationError('All fields are required and must be valid.'));
  }
  next();
};
