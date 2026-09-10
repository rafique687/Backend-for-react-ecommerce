const mongoose = require('mongoose');
const userPanelSchema = new mongoose.Schema(
    {
        firstname:{ type : String, required: true},
        lastname:{ type : String, required: true},
        email:{ type : String, required: true},
        dob:{ type : Date, required: true},
        createdAt: { type: Date, default: Date.now },
        updatedAt:{ type : Date, default: Date.now}
    }
   

);
 module.exports=mongoose.model('UserPanel',userPanelSchema);


 