const { people } = require('../data');

const findPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
};

const savePerson = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Please provide name value'
        });
    }

    res.status(201).send({
        success: true,
        person: name
    });
};

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find(person => person.id === Number(id));

    if (!person) {
        return res.status(404).json({
            success: false,
            message: `No person with id ${id}`
        });
    }

    const newPeople = people.map(person => {
        if (person.id === Number(id)) {
            person.name = name;
        }

        return person;
    });

    res.status(200).send({
        success: true,
        data: newPeople
    });
};

const deletePerson = (req, res) => {
    const { id } = req.params;

    const person = people.find(person => person.id === Number(id));

    if (!person) {
        return res.status(404).json({
            success: false,
            message: `No person with id ${id}`
        });
    }

    const newPeople = people.filter(person => person.id !== Number(id));

    res.status(200).send({
        success: true,
        data: newPeople
    });
};

module.exports = {
    findPeople,
    savePerson,
    updatePerson,
    deletePerson
};
