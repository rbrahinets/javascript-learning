const { ObjectId } = require('mongodb');

module.exports = async (app, db) => {
    const collection = db.collection('notes');

    app.get('/api/notes', async (req, res) => {
        try {
            const result = await collection.find().toArray();
            return res.send(result);
        } catch (err) {
            console.error(err);
            return res.send({ error: 'An error has occurred', message: err });
        }
    });

    app.get('/api/notes/:id', async (req, res) => {
        const id = req.params.id;
        const details = { _id: new ObjectId(id) };

        try {
            const result = await collection.findOne(details);
            return res.send(result);
        } catch (err) {
            console.error(err);
            return res.send({ error: 'An error has occurred', message: err });
        }
    });

    app.post('/api/notes', async (req, res) => {
        const note = {
            title: req.body.title,
            text: req.body.body,
        };

        try {
            const result = await collection.insertOne(note);
            return res.send(result);
        } catch (err) {
            console.error(err);
            return res.send({ error: 'An error has occurred' });
        }
    });

    app.put('/api/notes/:id', async (req, res) => {
        const id = req.params.id;
        const details = { _id: new ObjectId(id) };
        const note = {
            title: req.body.title,
            text: req.body.body,
        };

        try {
            const result = await collection.updateOne(details, note);
            return res.send(result);
        } catch (err) {
            console.error(err);
            return res.send({ error: 'An error has occurred' });
        }
    });

    app.delete('/api/notes/:id', async (req, res) => {
        const id = req.params.id;
        const details = { _id: new ObjectId(id) };

        try {
            await collection.deleteOne(details);
            return res.send(`Note ${id} deleted`);
        } catch (err) {
            console.error(err);
            return res.send({ error: 'An error has occurred' });
        }
    });
};
