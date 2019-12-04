const router = require('express').Router();
let Carer = require('../models/carer.model');

router.route('/').get((req, res) => {
    Carer.find()
        .then(carers => res.json(carers))
        .catch(err => res.status(400).json('Error: ' + err));
}); 

router.route('/add').post((req, res) => {
    const fullName = req.body.fullName;
    const qualifications = req.body.qualifications;
    const rate = req.body.rate;
    const zip = req.body.zip;

    const newCarer = new Carer({
        fullName,
        qualifications,
        rate,
        zip
    });

    newCarer.save()
        .then(() => res.json('Carer added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Carer.findById(req.params.id)
        .then(carers => res.json(carers))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').delete((req, res) => {
    Carer.findByIdAndDelete(req.params.id)
        .then(() => res.json('Carer deleted.'))
        .catch(err => res.status(400).json ('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Carer.findById(req.params.id)
        .then(carers => {
            carers.fullName = req.body.fullName;
            carers.qualifications = req.body.qualifications;
            carers.rate = req.body.rate;
            carers.zip = req.body.zip;

            carers.save()
                .then(() => res.json('Carer updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;