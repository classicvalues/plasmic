import { Scope, Status, Triggers } from "./types";

export class Layer<S extends Scope> {
  readonly status: Status<S>;
  readonly triggers: Triggers<S>;
}
