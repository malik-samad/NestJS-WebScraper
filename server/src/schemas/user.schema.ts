import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"
import { CallbackError, HydratedDocument } from "mongoose"
import bcrypt from "bcrypt"
import { isArray } from "util";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ type: Date, default: new Date() })
    createdAt: Date;
}

const UserSchema = SchemaFactory.createForClass(User);
UserSchema.pre("save", async function (this, next) {
    try {
        const user = this;
        if (user.password) {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(user.password, salt);
            user.password = hash;
        }
        next();
    } catch (err) {
        console.log("error occurred while processing 'save' for User Model.", err);
        next(err as CallbackError)
    }
})

UserSchema.pre("findOneAndUpdate", async function (this, next) {
    try {
        const update = this.getUpdate();
        if (update && !isArray(update) && update.$set?.password) {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(update.$set.password, salt);
            this.setUpdate({ ...update, $set: { ...update.$set, password: hash } })
        }
        next();
    } catch (err) {
        console.log("error occurred while processing 'save' for User Model.", err);
        next(err as CallbackError)
    }
})

export { UserSchema };