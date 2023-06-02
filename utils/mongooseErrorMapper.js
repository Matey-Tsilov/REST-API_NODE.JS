module.exports = (err) => {
  if (err.name == "ValidationError") {
    const mongooseError = Object.values(err.errors).map(err => err.properties.message).join('\n ')
    return mongooseError
  }
  else {
    return err
  }
};
