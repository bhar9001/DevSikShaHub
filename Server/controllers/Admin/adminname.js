import Admin from '../../Model/Admin.js'

const adminName = async (req, res) => {
  try {
    const id = req.params._id;
    if (!id) {
      return res.status(400).json({
        message: 'Id required',
      });
    }

    const admin = await Admin.findById({_id:id});

    if (!admin) {
      return res.status(404).json({
        message: 'Admin not found',
      });
    }

    res.status(200).json({
      adminName: admin.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Server Error',
    });
  }
};

export default adminName;
