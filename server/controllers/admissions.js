const Admission = require('../models/admissionsForm');
const multer = require('multer');
const fs = require('fs');


// Set up multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination folder where files should be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name as the saved file name
  },
});

const upload = multer({ storage: storage });



const createAdmissionsForm = async (req, res) => {
  try {
    upload.any()(req, res, async function (err) {
      const formData = req.body;
      const files = req.files;

      console.log(formData);
      console.log(files);

      if (err) {
        console.error(err);
        return res.status(500).send('Error uploading files');
      }

      formData.KcpeCertificate = files.find(file => file.fieldname === 'KcpeCertificate')
      ? fs.readFileSync(files.find(file => file.fieldname === 'KcpeCertificate').path)
      : null;
    formData.LeavingCertificate = files.find(file => file.fieldname === 'LeavingCertificate')
      ? fs.readFileSync(files.find(file => file.fieldname === 'LeavingCertificate').path)
      : null;
    formData.TransferKcpeCertificate = files.find(file => file.fieldname === 'TransferKcpeCertificate')
      ? fs.readFileSync(files.find(file => file.fieldname === 'TransferKcpeCertificate').path)
      : null;
    formData.TransferLetter = files.find(file => file.fieldname === 'TransferLetter')
      ? fs.readFileSync(files.find(file => file.fieldname === 'TransferLetter').path)
      : null;
    formData.TransferTranscript = files.find(file => file.fieldname === 'TransferTranscript')
      ? fs.readFileSync(files.find(file => file.fieldname === 'TransferTranscript').path)
      : null;


      const AdmissionForm = new Admission(formData)

      const savedForm = await AdmissionForm.save();

      res.status(201).json(savedForm);

    });
  } catch (error) {
    console.log(error);
  }
};


module.exports = createAdmissionsForm;
