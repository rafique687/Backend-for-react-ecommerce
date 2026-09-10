const userpanel = require('../models/userpanel');

const viewuserpanel = async (req, res) => {


    const dummyData = [
        {
            id: 1,
            name: "Rahul",
            email: "rahul@example.com",
            role: "user"
        },
        {
            id: 2,
            name: "Amit",
            email: "amit@example.com",
            role: "admin"
        }
    ];

    res.status(200).json({
        success: true,
        message: "Dummy user panel data",
        data: dummyData
    });
};

module.exports = { viewuserpanel };