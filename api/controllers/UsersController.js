/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    /*login: async function (req, res) {
        var result;
        var params = req.allParams();
        if(params.email==undefined){
            res.json({result:"no email"});
        }
        if(params.pw==undefined){
            res.json({result:"no pw"});
        }
        try {
            result = await Users.find({ email: params.email, pw:params.pw });
            if(result.length){
                sails.log(result);
                res.json({result:"ok"});
            }else{
                res.json({result:"ko"});
            }
        } catch (err) {
            switch (err.name) {
                case 'UsageError': return res.badRequest(err);
                default: throw err;
            }
        }
    },

    createUser: async function(req,res){
        var result;
        var lastUser;
        try {
            lastUser = await Users.find({select: ['id']}).sort('id DESC').limit(1);
            sails.log("lastUser.length : ");sails.log(lastUser.length);
            if(!lastUser.length){
                lastUser = [{id:0}];
            }
            sails.log(lastUser);
            result = await Users.create({
                id:(lastUser[0].id)+1,
                name:'Defrances',
                first_name:'Maxime',
                email:'maxime.defrances@hotmail.fr',
                login:'m.defrances',
                pw:'123456'}).fetch();
        }catch(err){
            switch (err.name) {
                case 'UsageError': return res.badRequest(err);
                default: throw err;
            }
        }

        return res.json(result);
    }*/
};

