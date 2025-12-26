/*********************************************************
 * 1️⃣ MODULE PATTERN (Node.js Style)
 *********************************************************/

/*
🔹 يعني إيه Module Pattern في Node.js؟
- كل ملف في Node هو Module لوحده
- Node بيخلي المتغيرات خاصة بالملف
- اللي نصدّره بس هو اللي يطلع برّه

فايدته:
- تنظيم الكود
- منع تضارب الأسماء
*/

/* مثال 1:
- متغير عادي جوه الملف
- مش متشاف برّه
*/
const appName = "My Node App";

/* مثال 2:
- تصدير قيمة واحدة
*/
module.exports.appName = appName;

/* مثال 3:
- تصدير function
*/
module.exports.sayHello = function () {
  return "Hello from Node";
};

/* مثال 4:
- متغير private
*/
let counter = 0;
module.exports.increment = function () {
  counter++;
  return counter;
};

/* مثال 5:
- Module كـ config
*/
const config = {
  port: 3000,
  env: "dev"
};
module.exports.config = config;



/*********************************************************
 * 2️⃣ FACTORY PATTERN
 *********************************************************/

/*
🔹 يعني إيه Factory Pattern في Node؟
- بدل ما تنشئ object بنفسك
- تخلي function هي المسؤولة عن الإنشاء

فايدته:
- مرونة
- تقليل التكرار
*/

/* مثال 1:
- Factory بسيطة
*/
function createUser(name) {
  return { name };
}
console.log(createUser("Ali"));

/* مثال 2:
- Factory حسب النوع
*/
function userFactory(role) {
  if (role === "admin") {
    return { role, permissions: ["all"] };
  }
  return { role, permissions: ["read"] };
}
console.log(userFactory("admin"));

/* مثال 3:
- Factory بترجع methods
*/
function serviceFactory(serviceName) {
  return {
    start() {
      return `${serviceName} started`;
    }
  };
}
console.log(serviceFactory("Auth").start());

/* مثال 4:
- Factory مع validation
*/
function productFactory({ name, price }) {
  if (!name || price <= 0) {
    throw new Error("Invalid product");
  }
  return { name, price };
}
console.log(productFactory({ name: "Book", price: 100 }));

/* مثال 5:
- Factory لإنشاء Middleware
*/
function middlewareFactory(role) {
  return function (req, res, next) {
    if (req.userRole === role) next();
    else res.end("Unauthorized");
  };
}



/*********************************************************
 * 3️⃣ SINGLETON PATTERN
 *********************************************************/

/*
🔹 يعني إيه Singleton في Node؟
- Instance واحدة بس
- Node بيعمل cache للـ modules
- أي require لنفس الملف يرجع نفس النسخة

فايدته:
- Database connection
- Logger
- Config
*/

/* مثال 1:
- Object واحد
*/
const logger = {
  log(msg) {
    console.log(msg);
  }
};

/* مثال 2:
- Singleton باستخدام module caching
*/
let dbInstance = null;

function connectDB() {
  if (!dbInstance) {
    dbInstance = { connected: true };
  }
  return dbInstance;
}
console.log(connectDB());

/* مثال 3:
- نفس الـ instance
*/
const db1 = connectDB();
const db2 = connectDB();
console.log(db1 === db2);

/* مثال 4:
- Singleton باستخدام Class
*/
class Cache {
  constructor() {
    if (Cache.instance) return Cache.instance;
    this.store = {};
    Cache.instance = this;
  }
  set(key, value) {
    this.store[key] = value;
  }
}
const c1 = new Cache();
const c2 = new Cache();
console.log(c1 === c2);

/* مثال 5:
- Singleton عملي (App Config)
*/
class AppConfig {
  constructor() {
    if (AppConfig.instance) return AppConfig.instance;
    this.port = 3000;
    AppConfig.instance = this;
  }
}
module.exports.AppConfig = new AppConfig();



/*********************************************************
 * 4️⃣ OBSERVER / EVENT EMITTER PATTERN
 *********************************************************/

/*
🔹 يعني إيه Observer في Node؟
- Node مبني أساسًا على Events
- أي تغيير → Event
- Listeners تسمع وترد

فايدته:
- async logic
- loose coupling
*/

const EventEmitter = require("events");

/* مثال 1:
- EventEmitter بسيط
*/
const emitter = new EventEmitter();
emitter.on("start", () => console.log("App Started"));
emitter.emit("start");

/* مثال 2:
- تمرير بيانات
*/
emitter.on("login", user => console.log("User:", user));
emitter.emit("login", "Ali");

/* مثال 3:
- أكتر من listener
*/
emitter.on("data", d => console.log("A", d));
emitter.on("data", d => console.log("B", d));
emitter.emit("data", 123);

/* مثال 4:
- Custom class
*/
class Order extends EventEmitter {
  create() {
    this.emit("created", { id: 1 });
  }
}
const order = new Order();
order.on("created", o => console.log("Order:", o));
order.create();

/* مثال 5:
- عملي (logs)
*/
const logEmitter = new EventEmitter();
logEmitter.on("error", err => console.log("Error:", err));
logEmitter.emit("error", "DB Error");



/*********************************************************
 * 5️⃣ MIDDLEWARE PATTERN
 *********************************************************/

/*
🔹 يعني إيه Middleware؟
- سلسلة دوال
- كل واحدة تعمل حاجة
- وبعدين تسلّم للي بعدها

فايدته:
- تنظيم الطلبات
- شائع جدًا في Express
*/

/* مثال 1:
- Middleware بسيط
*/
function loggerMiddleware(req, res, next) {
  console.log("Request received");
  next();
}

/* مثال 2:
- Middleware للتأكد من auth
*/
function authMiddleware(req, res, next) {
  if (req.isAuth) next();
  else res.end("Not Authorized");
}

/* مثال 3:
- تنفيذ يدوي
*/
function runMiddlewares(req, res, middlewares) {
  let index = 0;
  function next() {
    const mw = middlewares[index++];
    if (mw) mw(req, res, next);
  }
  next();
}

/* مثال 4:
- استخدام
*/
const req = { isAuth: true };
const res = { end: console.log };
runMiddlewares(req, res, [loggerMiddleware, authMiddleware]);

/* مثال 5:
- Middleware عملي (validation)
*/
function validateBody(req, res, next) {
  if (!req.body) return res.end("Invalid Body");
  next();
}
