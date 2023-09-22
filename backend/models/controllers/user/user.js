
const db=require('../../Entity')
const cities=db.location;
const sendDataToServer = async (req,res) => {

  try {
    const data=req.body.cityName;
    console.log("data",data);
    const newCity = await cities.create({city: data });

    console.log('City inserted:', newCity);
  } catch (error) {
    console.error('Error inserting city:', error);
  }
}
module.exports = {
  sendDataToServer
};
