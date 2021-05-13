const config = require('../../config/config');
const jwt = require('jsonwebtoken');
const db = require('../../utilities/db');
const { Spend, Earn } = require('../../utilities/db');
const User = db.User;

module.exports = {
    spend,
    getAllSpend,
    getAllEarn,
    getById,
    earn,
    updateSpend,
    updateEarn,
    removebyId
};



/////////////////////////////////////////////////////////////////////////////////
/*                        Spend RELATED API                                     */
/////////////////////////////////////////////////////////////////////////////////


async function getAllSpend(query) {
    return await Spend.find(query);
}

async function spend(spendParams) {
    const spend = new Spend(spendParams);
    await spend.save();
}

async function getById(id) {
    return await Spend.findById(id);
}

async function updateSpend(id, userParam) {
    const spend = await Spend.findById(id);

    // validate
    if (!spend) throw 'Spend not found';
    

    // copy userParam properties to user
    Object.assign(spend, userParam);
    await spend.save();
}



/////////////////////////////////////////////////////////////////////////////////
/*                        EARN RELATED API                                     */
/////////////////////////////////////////////////////////////////////////////////


async function getAllEarn(query) {
    return await Earn.find(query);
}


async function updateEarn(id, userParam) {
    const earn = await Earn.findById(id);

    // validate
    if (!earn) throw 'earn not found';
    

    // copy userParam properties to user
    Object.assign(earn, userParam);
    await earn.save();
}

async function earn(earnParams) {
    const earn = new Earn(earnParams);
    await earn.save();
}


/////////////////////////////////////////////////////////////////////////////////
/*                        COMMON API                                           */
/////////////////////////////////////////////////////////////////////////////////

async function removebyId(id, collection) {
    if(collection === 'Spend') {
        await Spend.findByIdAndRemove(id);
    } else if(collection === 'Earn') {        
        await Earn.findByIdAndRemove(id);
    }
}