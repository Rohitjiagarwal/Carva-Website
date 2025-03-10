const mongoose = require("mongoose");

const BlacklistTokenSchema = new mongoose.Schema(
    {
        token: { type: String, required: true }
    },
    { timestamps: true }
);

// ✅ Prevent model overwriting
const BlacklistToken = mongoose.models.BlacklistToken || mongoose.model("BlacklistToken", BlacklistTokenSchema);

module.exports = BlacklistToken;
