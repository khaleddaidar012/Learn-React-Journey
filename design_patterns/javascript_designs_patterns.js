/*********************************************************
 * 1️⃣ MODULE PATTERN
 *********************************************************/

/*
🔹 يعني إيه Module Pattern؟
- طريقة لتنظيم الكود
- نخلي فيه حاجات "خاصة" محدش يقدر يوصلها
- ونطلع بس الحاجات اللي محتاجينها

فايدته:
- يمنع اللخبطة
- يقلل الأخطاء
- يخليك تكتب كود نظيف
*/

/* مثال 1:
- أبسط Module
- مجرد Object متغلف
*/
const module1 = (function () {
  return {
    name: "My Module"
  };
})();
console.log(module1.name);


/* مثال 2:
- هنا عندنا متغير خاص (count)
- محدش يقدر يوصله غير عن طريق الدوال
*/
const counterModule = (function () {
  let count = 0; // private

  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    }
  };
})();
counterModule.increment();
console.log(counterModule.getCount());


/* مثال 3:
- نفس المثال بس زودنا reset
- تحكم أكتر في الحالة
*/
const counterModule2 = (function () {
  let count = 0;

  return {
    inc() { count++; },
    reset() { count = 0; },
    get() { return count; }
  };
})();
counterModule2.inc();
counterModule2.reset();
console.log(counterModule2.get());


/* مثال 4:
- دالة private جوه الموديول
- مش متاحة من بره
*/
const authModule = (function () {
  function isValid(user) {
    return user === "admin";
  }

  return {
    login(user) {
      return isValid(user);
    }
  };
})();
console.log(authModule.login("admin"));


/* مثال 5:
- Module بيحتفظ بـ config
- شائع جدًا في المشاريع
*/
const configModule = (function () {
  let apiUrl = "";

  return {
    setUrl(url) {
      apiUrl = url;
    },
    getUrl() {
      return apiUrl;
    }
  };
})();
configModule.setUrl("https://api.test.com");
console.log(configModule.getUrl());



/*********************************************************
 * 2️⃣ FACTORY PATTERN
 *********************************************************/

/*
🔹 يعني إيه Factory Pattern؟
- بدل ما تعمل object بنفسك كل مرة
- بتعمل دالة "مصنع"
- هي اللي تنشئلك الـ object

فايدته:
- يقلل التكرار
- يخليك تغير طريقة الإنشاء بسهولة
*/

/* مثال 1:
- Factory بسيطة جدًا
*/
function userFactory(name) {
  return { name };
}
console.log(userFactory("Ali"));


/* مثال 2:
- Factory بتحدد النوع
*/
function createUser(role) {
  if (role === "admin") {
    return { role, permissions: ["all"] };
  }
  return { role, permissions: ["read"] };
}
console.log(createUser("admin"));


/* مثال 3:
- Object فيه methods
*/
function carFactory(type) {
  return {
    type,
    drive() {
      return `${type} is driving`;
    }
  };
}
console.log(carFactory("BMW").drive());


/* مثال 4:
- Factory بتعمل validation
*/
function productFactory(product) {
  if (!product.name || product.price <= 0) {
    throw new Error("Invalid product");
  }
  return product;
}
console.log(productFactory({ name: "Book", price: 50 }));


/* مثال 5:
- Factory مع Classes
*/
class User {
  constructor(name) {
    this.name = name;
  }
}
class Admin extends User {
  isAdmin() {
    return true;
  }
}
function createUserByType(type, name) {
  return type === "admin" ? new Admin(name) : new User(name);
}
console.log(createUserByType("admin", "Khaled"));



/*********************************************************
 * 3️⃣ SINGLETON PATTERN
 *********************************************************/

/*
🔹 يعني إيه Singleton؟
- Object واحد فقط
- طول عمر البرنامج
- أي حد يطلبه ياخد نفس النسخة

فايدته:
- مناسب للـ config
- store
- logger
*/

/* مثال 1:
- Object عادي (Singleton طبيعي)
*/
const settings = {
  theme: "dark"
};
console.log(settings.theme);


/* مثال 2:
- Singleton باستخدام closure
*/
const appSettings = (function () {
  let instance;

  function createInstance() {
    return { lang: "ar" };
  }

  return {
    getInstance() {
      if (!instance) instance = createInstance();
      return instance;
    }
  };
})();
console.log(appSettings.getInstance());


/* مثال 3:
- نفس النسخة بتتغير
*/
appSettings.getInstance().lang = "en";
console.log(appSettings.getInstance().lang);


/* مثال 4:
- Singleton باستخدام Class
*/
class Logger {
  constructor() {
    if (Logger.instance) return Logger.instance;
    this.logs = [];
    Logger.instance = this;
  }
}
const logger1 = new Logger();
const logger2 = new Logger();
console.log(logger1 === logger2);


/* مثال 5:
- Singleton عملي (Store)
*/
class Store {
  constructor() {
    if (Store.instance) return Store.instance;
    this.state = {};
    Store.instance = this;
  }
  set(key, value) {
    this.state[key] = value;
  }
}
const storeA = new Store();
const storeB = new Store();
storeA.set("user", "Ali");
console.log(storeB.state.user);



/*********************************************************
 * 4️⃣ OBSERVER PATTERN
 *********************************************************/

/*
🔹 يعني إيه Observer؟
- فيه Object أساسي
- Objects تانية بتراقبه
- أول ما يتغير → يبلغهم

فايدته:
- Events
- State Management
*/

/* مثال 1:
- subscribe + notify
*/
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}
const subject = new Subject();
subject.subscribe(data => console.log("Observer:", data));
subject.notify("Hello");


/* مثال 2:
- unsubscribe
*/
class Subject2 extends Subject {
  unsubscribe(fn) {
    this.observers = this.observers.filter(o => o !== fn);
  }
}


/* مثال 3:
- أكتر من observer
*/
const subject3 = new Subject();
subject3.subscribe(d => console.log("A", d));
subject3.subscribe(d => console.log("B", d));
subject3.notify("Update");


/* مثال 4:
- مراقبة state
*/
class StoreObserver extends Subject {
  setState(state) {
    this.state = state;
    this.notify(this.state);
  }
}
const storeObs = new StoreObserver();
storeObs.subscribe(s => console.log("State:", s));
storeObs.setState({ count: 1 });


/* مثال 5:
- Event Bus
*/
const EventBus = new Subject();
EventBus.subscribe(e => console.log("Event:", e));
EventBus.notify({ type: "LOGIN" });



/*********************************************************
 * 5️⃣ STRATEGY PATTERN
 *********************************************************/

/*
🔹 يعني إيه Strategy؟
- نفس العملية
- بس طرق تنفيذ مختلفة
- تختار الطريقة وقت التشغيل

فايدته:
- بدل if/else كتير
- كود أنضف
*/

/* مثال 1:
- Strategy بسيطة
*/
function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function calc(strategy, a, b) {
  return strategy(a, b);
}
console.log(calc(add, 5, 2));


/* مثال 2:
- Strategies في object
*/
const mathStrategies = {
  add: (a, b) => a + b,
  mul: (a, b) => a * b
};
console.log(mathStrategies.mul(2, 3));


/* مثال 3:
- اختيار strategy ديناميكي
*/
function payment(type) {
  const map = {
    cash: amount => amount,
    visa: amount => amount * 1.02
  };
  return map[type];
}
console.log(payment("visa")(100));


/* مثال 4:
- Validation strategies
*/
const validators = {
  required: v => !!v,
  minLength: v => v.length >= 3
};
function validate(value, rule) {
  return validators[rule](value);
}
console.log(validate("Ali", "minLength"));


/* مثال 5:
- Permissions
*/
const permissions = {
  admin: () => "Full Access",
  user: () => "Limited Access"
};
function checkAccess(role) {
  return permissions[role]();
}
console.log(checkAccess("admin"));
