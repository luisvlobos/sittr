const router = require('express').Router();
let Parent = require('../models/parent.model');

router.route('/').get((req, res) => {
    Parent.find()
        .then(parents => res.json(parents))
        .catch(err => res.status(400).json('Error: ' + err));
}); 

router.route('/add').post((req, res) => {
    const fullName = req.body.fullName;
    const requirements = req.body.requirements;
    const email = req.body.email;
    const zip = req.body.zip;

    const newParent = new Parent({
        fullName,
        requirements,
        email,
        zip
    });

    newParent.save()
        .then(() => res.json('Parent added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Parent.findById(req.params.id)
        .then(parents => res.json(parents))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').delete((req, res) => {
    Parent.findByIdAndDelete(req.params.id)
        .then(() => res.json('Parent deleted.'))
        .catch(err => res.status(400).json ('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Parent.findById(req.params.id)
        .then(parents => {
            parents.fullName = req.body.fullName;
            parents.requirements = req.body.requirements;
            parents.email = req.body.email;
            parents.zip = req.body.zip;

            parents.save()
                .then(() => res.json('Parent updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;