const noteRouts = require('./note-routes');

module.exports = async (app, db) => {
    await noteRouts(app, db);
};
