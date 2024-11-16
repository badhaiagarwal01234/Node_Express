const userModel = require("../Model/UserModel");

exports.createUser = async (req, res) => {
  const userData = req.body;
  const user = new userModel(userData);
  await user.save();
  res.status(200).json(user);
};

exports.getAllUser = async (req, res) => {
  const allUserData = await userModel.find();
  res.status(200).send(allUserData);
};

exports.getOneUser = async (req, res) => {
    const {id} = req.params;
  const allUserData = await userModel.findById(id);
  res.status(200).send(allUserData);
};

exports.deletebyid = async(req, res)=>{
  const {id} = req.params;
  const deleteData=await userModel.findByIdAndDelete(id)
  res.status(200).send(deleteData)
}

//for existing data
exports.updateUser = async(req, res)=>{
  const {id} = req.params;
  const updateData = await userModel.findByIdAndUpdate(id,{email:"mukks@gmail.com"})
  res.status(200).json(updateData)
}

//for create and update user
exports.createandupdateUser = async(req, res)=>{
  console.log(">>>>hjkjjhhvjhk>>>>")
  const {id} = req.body;
  const data = req.body;
  const updateData = await userModel.findByIdAndUpdate(id, data)
  res.status(200).json(updateData)
}