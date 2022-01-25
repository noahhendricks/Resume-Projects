// External Resources collections model

// const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// External Resources Table

// External Resources schema for External Resources collection using mongoose
let External_Resources= new Schema({

        // Name of external resource (Primary Key), name updates will be disabled
        Name:{
                type:String,
                required:true,
                unique:true
        },

        // Web address ex: www.help.com
        Web:{
                type:String,
                required: false
        },

        // Phone Number ex: 713-000-2323
        Phone: {
                type:String,
                required: false
        }
}
, {
        // collection name
        collection: 'External_Resources'
});
    
//Exports External Resources schema into custom routes
module.exports = mongoose.model('External_Resources', External_Resources)
