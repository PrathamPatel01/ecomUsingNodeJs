module.exports = {
  getError(errors, prop) {
    // prop===email||pass||passcon
    try {
      return errors.mapped()[prop].msg;
    } catch (err) {
      return ``;
    }
    // mapped ===object of error
  },
};
