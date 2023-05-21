const yup = require('yup')
const validate = async function (req, res, next) {
    try {
        const schema = yup.object().shape({
            nom: yup.string().required(),
            prenom: yup.string().required(),
            email: yup.string().email().required(),
            Option: yup.string().required(),
            cin: yup.number().required().integer().positive().min(10000000).max(99999999),
      Option: yup.string().oneOf(['Twin', 'SIM', 'SE']).required()
   
        });
        await schema.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        res.status(400).json({
            error: error.errors,
        });
    }
};
module.exports = validate;