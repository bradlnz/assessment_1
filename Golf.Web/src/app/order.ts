import Component = require("./component");
import ComponentModel = Component.ComponentModel;

export class Order {
  number: string;
  dateRequired: Date;
  description: string;
  created: Date;
  components: ComponentModel[];
}
