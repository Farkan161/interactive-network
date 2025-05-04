import { Schema, model, Types, Document } from 'mongoose';
import dateFormat from '../utils/dateFormat';

interface Reaction {
  reactionId: Types.ObjectId;
  reactionBody: string;
  username: string;
  createdAt: Date;
}

export interface IPost extends Document {
  postText: string;
  createdAt: Date;
  username: string;
  reactions: Reaction[];
  reactionCount: number;
}

const reactionSchema = new Schema<Reaction>(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp: Date): string => dateFormat(timestamp),
    } as any, // Explicitly cast to bypass Mongoose's type checking
  },
  {
    _id: false,
    toJSON: {
      getters: true,
    },
  }
);

const postSchema = new Schema<IPost>(
  {
    postText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp: Date): string => dateFormat(timestamp),
    } as any, // Explicitly cast to bypass Mongoose's type checking
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

postSchema.virtual('reactionCount').get(function (this: IPost) {
  return this.reactions.length;
});

export default model<IPost>('Post', postSchema);