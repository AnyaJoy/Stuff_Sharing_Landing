
import { Db, MongoClient, Document, Collection } from "mongodb";
import { User } from "../types";

class Mongo {
  private connection: Promise<Db>;

  constructor(uri: string) {
    this.connection = MongoClient.connect(uri).then((client) => {
      return client.db();
    });
  }
  private collection = <Y extends Document>(name: string): Promise<Collection<Y>> =>
    this.connection.then((db) => db.collection<Y>(name));

  public user = () => this.collection<User>("user");
}

export default Mongo;
