const userPanel = require('../models/userpanel');
exports.adduserpanel = async (req, res){
   try{
     const { fname, lnamme, email, dob } = req.body;
     const newuerp = new userPanel({
         firstname : fname,
         lastname : lnamme,
         email : email;
         dob : dob
     });
        const savedUserPanel = await newuerp.save();
        res.statust(201).json({ message : 'user added', userPanel : savedUserpanel});
       

   }catch(error){
        res.statust(500).json({message : 'error adding uerpanel', error});
   };
   )
}

exports.viewuserpanel = async (req, res) =>{
    try{ 
        const userpanels = await userpanel.find();
        res.status(200).json(userpanels);
    }catch(error){
        res.status(500).json({ message : 'somenting went wrong',error});
    }
}