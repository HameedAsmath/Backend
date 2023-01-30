const User = require("../models/userModel");

exports.home = (req, res) => {
  res.send("Iam hameed");
};

exports.createUser = async (req, res) => {
  try {
    console.log(req.body)
    const { name, email } = req.body;
    if (!name || !email) {
      res.status(401).send("Name and Email are Required");
    }
    const extUser = await User.findOne({ email });
    if (extUser) {
      throw new Error("Email already present");
    }
    const user = User.create({ name, email });
    res.status(200).json({
      success: true,
      message: "User added successfully",
      user,
    });
  } catch (error) {
    console.log(error)
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editUser = async(req,res)=>{
    try {
        const user =await User.findByIdAndUpdate(req.params.id,req.body)
        res.status(201).json({
            success: true,
            message: "Updated successfully"
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
          });
    }
}

exports.deleteUser = async(req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
        
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
          });
    }
}