const csv=require("csvtojson");
exports.jsonConvert= async (file)=>{
    try{
        const data=csv().fromFile(file.tempFilePath);
        return data;
    }
    catch(err){
        throw err;
    }
}