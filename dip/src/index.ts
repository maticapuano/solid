import { Messaging } from "./services/Messaging";
import { Order } from "./classes/Order";
import { MysqlPersistency } from "./services/Persistency";
import { Product } from "./classes/Product";
import { ShoppingCart } from "./classes/ShoppingCart";
import { BlackFridayDiscount } from "./classes/Discount/BlackFridayDiscount";
import { IndividualCustomer } from "./classes/Customer";

//BlackFridayDiscount = 30% off
const discount = new BlackFridayDiscount();
const shoppingCart = new ShoppingCart(discount);

shoppingCart.add(new Product("Macbook pro", 100));
shoppingCart.add({ name: "coca cola", price: 250 });

const messaging = new Messaging();

const persistency = new MysqlPersistency();
const customer = new IndividualCustomer("Matías Capuano", "20413928088");
const order = new Order(shoppingCart, messaging, persistency, customer);

order.checkout();
