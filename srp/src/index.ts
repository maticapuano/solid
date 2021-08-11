import { Messaging } from "./services/Messaging";
import { Order } from "./entities/Order";
import { MysqlPersistency } from "./services/Persistency";
import { Product } from "./entities/Product";
import { ShoppingCart } from "./entities/ShoppingCart";

const shoppingCart = new ShoppingCart();

shoppingCart.add(new Product("Macbook pro", 990));

const messaging = new Messaging();
const persistency = new MysqlPersistency();
const order = new Order(shoppingCart, messaging, persistency);

order.checkout();
