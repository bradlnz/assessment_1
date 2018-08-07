import { ComponentModel } from "./component";


export class Order {
  number: string;
  dateRequired: Date;
  description: string;
  created: Date;
  components: ComponentModel[];
}
