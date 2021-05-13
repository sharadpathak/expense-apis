const express = require('express');
const router = express.Router();
const expenseService = require('./expenseService');


/////////////////////////////////////////////////////////////////////////////////
/*                        Spend RELATED ROutes                                 */
/////////////////////////////////////////////////////////////////////////////////
router.post('/spend',  spend);
router.get('/all-spend-list', getAllSpend);
router.put('/spend/:id', editSpendById);
router.delete('/spend/:id', removeSpendById);


/////////////////////////////////////////////////////////////////////////////////
/*                        Earn RELATED Routes                                  */
/////////////////////////////////////////////////////////////////////////////////
router.post('/earn', earning);
router.get('/all-earn-list', getAllEarn);
router.put('/earn/:id', editEarnById);
router.delete('/earn/:id', removeEarnById);


module.exports  = router;


/////////////////////////////////////////////////////////////////////////////////
/*                        Spend RELATED API                                     */
/////////////////////////////////////////////////////////////////////////////////



// Edit Spend by ID 
function editSpendById(req,res,next) {
    expenseService.updateSpend(req.params.id, req.body)
    .then((data) => {
        res.json({ "status": 200, "data": data})
    })
    .catch(err => next(err));
}

// Return List of Spend
function getAllSpend(req, res, next) {
    expenseService.getAllSpend(req.query)
        .then((data) => {
            res.json({ "status": 200, "data": data})
        })
        .catch(err => next(err));
}

// Save Spend
function spend(req,res,next) {
    console.log("SPEND ", req.body);
    expenseService.spend(req.body)
        .then(() => res.json({ "status": 200}))
        .catch(err => next(err));
}


// Remove Spend By ID
function removeSpendById(req,res,next){
    console.log(req.params.id)
    expenseService.removebyId(req.params.id, 'Spend')
    .then(() => res.json({"status": 200}))
    .catch(err => next(err));
}


/////////////////////////////////////////////////////////////////////////////////
/*                        EARN RELATED API                                     */
/////////////////////////////////////////////////////////////////////////////////



// Save Earning
function earning(req,res,next) {
    expenseService.earn(req.body)
    .then(() => res.json({ "status": 200}))
    .catch(err => next(err));
}

/// Return List of All earnning
function getAllEarn(req, res, next) {
    expenseService.getAllEarn(req.query)
        .then((data) => {
            res.json({ "status": 200, "data": data})
        })
        .catch(err => next(err));
}


// Remove Earning by ID
function removeEarnById(req,res,next){
    console.log(req.params.id)
    expenseService.removebyId(req.params.id, 'Earn')
    .then(() => res.json({"status": 200}))
    .catch(err => next(err));
}

// Edit Earn by ID 
function editEarnById(req,res,next) {
    expenseService.updateEarn(req.params.id, req.body)
    .then((data) => {
        res.json({ "status": 200, "data": data})
    })
    .catch(err => next(err));
}


