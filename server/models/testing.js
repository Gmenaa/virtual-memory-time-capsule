const mongoose = require('mongoose')

const TestingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    }
})

const TestingModel = mongoose.model("testing", TestingSchema, "testing"); // non-plural: const Model = mongoose.model(modelName, schema, [collectionName]);
// plural: const Model = mongoose.model(modelName, schema);

module.exports = TestingModel;