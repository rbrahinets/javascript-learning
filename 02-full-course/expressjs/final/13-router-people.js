const express = require('express');
const {
    findPeople,
    savePerson,
    updatePerson,
    deletePerson
} = require('../controllers/people');
const { people } = require('../data');

const router = express.Router();

// router.get('/', findPeople);
// router.post('/', savePerson);
// router.put('/:id', updatePerson);
// router.delete('/:id', deletePerson);

router.route('/').get(findPeople).post(savePerson);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
