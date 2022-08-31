const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    schools: {
      type: Schema.Types.ObjectId,
      default: [],
      ref: 'School'
    },
    contributor: { type: Boolean },
    banned: { type: Boolean },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    // versionKey: true,
  }
);

const UserModel = model("User", UserSchema);

module.exports = UserModel;