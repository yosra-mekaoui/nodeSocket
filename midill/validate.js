const yup = require('yup')
const validate = async function (req, res, next) {
    try {
        const schema = yup.object().shape({
            name: yup.string().required(),
            cin: yup.number().required(),
            email: yup.string().email().required(),
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