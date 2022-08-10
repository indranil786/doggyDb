const db = require("../models/index");
const { jsonConvert } = require("../helpers/conversion");
const { Dogs } = db;

exports.addPets = async (req, res) => {
    let jsonData;
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
           throw new Error('No File was uploaded');
        }        
        jsonData = await jsonConvert(req.files.dogs);
    }
    catch (err) {
        return res.status(400).json({ statusCode: 400, status: "error", message: "Problem in Conversion of Data", error: err.message });
    }
    try {
        await Dogs.create(jsonData);
        return res.status(200).json({ statusCode: 200, status: "ok", message: "Data inserted Successfully", data: [] })
    }
    catch (err) {
        return res.status(500).json({ statusCode: 500, status: "error", message: "Problem in Insertion of Data in Database", error: err.message });
    }
}
exports.getPets = async (req, res) => {
    try {
        const data = await Dogs.find().select("-__v").lean();
        return res.status(200).json({ statusCode: 200, status: "ok", message: "Data fetched Successfully", data: data })
    }
    catch (err) {
        return res.status(500).json({ statusCode: 500, status: "error", message: "Problem in Fetching of Data from Database", error: err.message });
    }
}
exports.getpetById = async (req, res) => {
    try {
        const { petId } = req.params;
        const data = await Dogs.findById(petId).select("-__v").lean();
        return res.status(200).json({ statusCode: 200, status: "ok", message: "Data fetched Successfully", data: data });
    }
    catch (err) {
        return res.status(500).json({ statusCode: 500, status: "error", message: "Problem in Fetching of Data from Database", error: err.message });
    }

}
exports.updatePet = async (req, res) => {
    try {
        const { petId } = req.params;
        const payload = req.body;
        await Dogs.findByIdAndUpdate(petId, payload);
        return res.status(200).json({ statusCode: 200, status: "ok", message: "Data Updated Successfully", data: [] });
    }
    catch (err) {
        return res.status(500).json({ statusCode: 500, status: "error", message: "Problem in Inserting Data in Database", error: err.message });
    }

}
exports.deletePet = async (req, res) => {
    try {
        const { petId } = req.params;
        await Dogs.findByIdAndRemove(petId);
        return res.status(200).json({ statusCode: 200, status: "ok", message: "Data Deleted Successfully", data: [] });
    }
    catch (err) {
        return res.status(500).json({ statusCode: 500, status: "error", message: "Problem in Inserting Data in Database", error: err.message });
    }
}