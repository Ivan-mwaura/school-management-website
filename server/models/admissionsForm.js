const mongoose = require('mongoose')

const AdmissionsFormSchema = new mongoose.Schema({
    
    StudentFirstName:{
        type:String,
        required:[true, 'Please provide a first name'],
    },
    StudentSecondName:{
        type:String,
        required:[true, 'Please provide a second name'],
    },
    StudentLastName:{
        type:String,
        required:[true, 'Please provide a last name'],
    },
    StudentAge:{
        type:String,
        required:[true, 'Please provide an age'],
    },
    ParentFirstName:{
        type:String,
        required:[true, 'Please provide a first name'],
    },
    ParentSecondName:{
        type:String,
        required:[true, 'Please provide a second name'],
    },
    ParentLastName:{
        type:String,
        required:[true, 'Please provide a last name'],
    },
    ParentEmail:{
        type:String,
        required:[true, 'Please provide an email'],
    },
    ParentPhoneNumber:{
        type:String,
        required:[true, 'Please provide a phone number'],
    },
    EnrollmentType:{
        type:String,
        required:[true, 'Please provide an enrollment type'],
    },
    KcpeMarks:{
        type:String,
        
    },
    KcpeCertificate:{
        type:Buffer,
        default:null,
        
    },
    LeavingCertificate:{
        type:Buffer,
        default:null,
    },

    TransferKcpeMarks:{
        type:String,
        default:null,
        
    },
    TransferKcpeCertificate:{
        type:Buffer,
        default:null,
    },
    TransferLetter:{
        type:Buffer,
        default:null,
    },
    TransferTranscript:{
        type:Buffer,
        default:null,
    }

})

module.exports = mongoose.model('AdmissionsForm', AdmissionsFormSchema)