import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const storySchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        text:{
            type: String,
            required: true
        }
    },

    {
        collection: 'stories',
        timestamps: true,
    }

);

const Story = model('Story', storySchema);
export default Story;