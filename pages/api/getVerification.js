import connectDb from "@/middleware/mongoose";
import Certificates from "@/models/Certificates";

const handler = async (req, res) => {
  try {
    if (req.query.CertificateId) {
        console.log(req.query.CertificateId); 
        const certificate = await Certificates.findOne({ certificateId: req.query.CertificateId });
        if (certificate) {
            return res
                .status(200)
                .json({ success: true, msg: certificate });
        }else{
          return res
          .status(200)
          .json({ success: true, msg: "Not Verified" });
        }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export default connectDb(handler);