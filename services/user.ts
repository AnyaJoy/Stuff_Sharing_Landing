import { User } from "@/shared/types";
import Mongo from "@/shared/utils/db";
import { config as appConfig } from "../src/config";
import { v4 as uuid } from 'uuid';


export class UserService {
    constructor(
        private db: Mongo,
    ) {}
        createUser = async (user: User) => {
          const insertedUser = await (await this.db.user()).updateOne({ email: user.email }, { $setOnInsert: { uuid: uuid() }}, {upsert: true});
          return(insertedUser.upsertedId)
        }
}
