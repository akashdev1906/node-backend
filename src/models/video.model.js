import Mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
  {
    videoFile: {
      type: string,
      required: true,
    },
    thumbNail: {
      type: string,
      required: true,
    },
    title: {
      type: string,
      required: true,
    },
    description: {
      type: string,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: schema.Types.ObjectId,
      ref: " User",
    },
  },
  {
    timestamps: true,
  }
);


export const video = Mongoose.model("video", videoSchema);
