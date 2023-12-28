const { Schema, model, models } = require("mongoose");

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    unique: true,
    trim: true
  }
}, {
  timestamps: true
})

export default models.Task || model('Task', taskSchema)