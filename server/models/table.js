import mongoose from 'mongoose';

const TableSchema = new mongoose.Schema({
    tableName: {
        type: String,
        required: true,
    },
    tableNumber: {
        type: Number,
        required: true,
        unique: true
    },
    qrCode: {
        type: String,
    },
    status: {
        type: String,
        enum: ['available', 'occupied', 'reserved'],
        default: 'available'
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }],
    
}, { collection: 'tables' }); // Specify your collection name here

const Table = mongoose.model('Table', TableSchema);

export default Table;
