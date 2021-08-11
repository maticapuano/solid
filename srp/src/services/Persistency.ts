import { IPersistency } from "../interfaces/IPersistency";

export class PostgresPersistency implements IPersistency {
  public save(): void {
    console.log(`Order saved in postgres persistency`);
  }
}

export class MysqlPersistency implements IPersistency {
  public save(): void {
    console.log(`Order saved in mysql persistency`);
  }
}

export class MongoPersistency implements IPersistency {
  public save(): void {
    console.log(`Order saved in mongo persistency`);
  }
}
