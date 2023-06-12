const db = require("../models");
const Tutorial = db.tutorials;
// const Op = db.Sequelize.Op;

// // Create and Save a new Tutorial
// exports.create = async (req, res) => {
//     console.log("Resp ~~~>>", res);
//     if (!req.body.title) {
//         res.status(400).send({
//             message: "Content can not be empty!"
//         });
//         return;
//     }
//     // Create a Tutorial
    const tutorial = {
        title:"tuttorial",
        description: "A Sample 2 Description",
        Gender: "Male",
        name: "Yaa yoo party",
        ID: 1
    };

    const testBulk = {
        title:"Bulk Test",
        description: "A Sample 2 Description",
        Gender: "FeMale",
        name: "Yaa yoo party",
        ID: 5
    };
//     // Save Tutorial in the database
//     await Tutorial.create(tutorial)
//         .then(data => {
//             res.send(data);
//             console.log(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while creating the Tutorial."
//             });
//         });
// };


// ====================================== Method One Using Build ================
// let addData =  async (req, res) => {
//     let data  = await Tutorial.build(tutorial);
//     await data.save();

//     let response = {
//         data : "OK",
//         data2 : "Insertion Using Build Successfully"
//     }
//     res.status(200).json(response);
// }

// ====================================== Bulk Insert ================
let bulkAdd =  async (req, res) => {
    let data  = await Tutorial.bulkCreate([tutorial,testBulk]);

    let response = {
        data : "OK",
        data2 : "Bulk Add Successful"
    }
    res.status(200).json(response);
}

// ====================================== Method two Using Create ================
let addData =  async (req, res) => {
    let data  = await Tutorial.create(tutorial);
    // console.log("Data ~~>>",data);

    // Update values
    data.Gender = "Female";
    data.save()

    let response = {
        data : "OK",
        data2 : "Insertion Using Create Successfully"
    }
    res.status(200).json(response);
}

// ====================================== Delete ================
let delData =  async (req, res) => {
    let data  = await Tutorial.destroy({
        where:{
            id:2
        }
    });

    let response = {
        data : "OK",
        data2 : "Deletion Successful"
    }
    res.status(200).json(response);
}

// ====================================== Update ================
let updateData =  async (req, res) => {
    let data  = await Tutorial.update({name: 'Test', Gender: "Male"},{
        where:{
            id:1
        }
    });

    let response = {
        data : "OK",
        data2 : "Updation Successful"
    }
    res.status(200).json(response);
}

module.exports = {
    addData, delData, updateData
}

// ====================================== Truncate ================
let cleanData =  async (req, res) => {
    let data  = await Tutorial.destroy({
        truncate: true
    });

    let response = {
        data : "OK",
        data2 : "Clean Successful"
    }
    res.status(200).json(response);
}

// ====================================== Query / Null ================
let quryData =  async (req, res) => {
    let data  = await Tutorial.create(tutorial,{
    fields:["title", "Gender"]
    });

    let response = {
        data : "OK",
        data2 : "Query Data Successful"
    }
    res.status(200).json(response);
}

// ====================================== Find One ================
let getOne =  async (req, res) => {
    let getData  = await Tutorial.findOne({})

    let response = {
        data : getData,
        data2 : "Query Successful"
    }
    res.status(200).json(response);
}

// ====================================== Find One ================
let fetchAll =  async (req, res) => {
    let getData = await Tutorial.findAll({})
    let response = {
        data : getData,
        data2 : "Query Successful"
    }
    res.status(200).json(response);
}

module.exports = {
    addData, fetchAll, getOne, quryData, delData, updateData, cleanData, bulkAdd
}
