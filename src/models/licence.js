import {sequelize} from '../config/conn.js';
import {Model, INTEGER, STRING} from 'sequelize';

class Licence extends Model {};

Licence.init(
   {
     licence_id:{type:INTEGER,allowNull:false, primaryKey: true, autoIncrement: true},
     licence_name: {type: STRING, allowNull: false, defaultValue: ""},
     licence_description: {type: STRING, allowNull:false, defaultValue: ""},  
     licence_image: {type: STRING, allowNull:true, defaultValue: ""}  
   }, 
   { sequelize, 
     modelName: 'licence',
     tableName: 'licence', 
     timestamps: false
   }
 );

const getAllLicence = async() => {
  let data = await Licence.findAll()
  .then(licences => licences.map(licence => licence.dataValues))
  return data;
}

const getLicence= async(id) =>{
  const data = await Licence.findOne({where: {id}});
  return data;
}

const postLicence= async (data) =>{
  const result = await Licence.create(data);
  return result;
}

const updLicence= async(id,data) =>{
  const result = await Licence.update(data, {where:{id}})
  return result[0];
}

const delLicence= async(id) =>{
  const result = await Licence.destroy({where:{id}});
  return result;
}


const model = {
  getAllLicence,
  getLicence,
  postLicence,
  updLicence,
  delLicence
}

export {Licence, model};