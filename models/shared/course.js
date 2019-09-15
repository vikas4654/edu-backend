const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        default:'NO_CODE'
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: "UG"
    },
    activeForAdmission: Boolean,
    isActive: {
        type: Boolean,
        default: true
    },
    isLateral: {
        type: Boolean,
        default: true
    },
    departmentName: String,
    department: {
        type: mongoose.Types.ObjectId,
        ref: "AcademicDepartment"
    }
}, { timestamps: true });

module.exports = mongoose.model('Course', schema);