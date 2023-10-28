// import connectDb from "@/middleware/mongoose";
// import Certificates from "@/models/Certificates";

// const handler = async (req, res) => {
//   try {
//     if (req.method == 'POST') {
//       console.log(req.body);
//         if(req.body.studentName || req.body.certificateId || req.body.studentCollege || req.body.issueDate ){
//             const newCertificate = new Certificates({
//                 studentName: req.body.studentName,
//                 certificateId: req.body.certificateId,
//                 issueDate: req.body.issueDate,
//                 studentCollege: req.body.studentCollege,
//             });

//             let certificate = await newCertificate.save();
//             if(certificate){
//                 res.status(200).json({ success: true, msg: "ok saved" });
//             }
//         }
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


// export default connectDb(handler);
