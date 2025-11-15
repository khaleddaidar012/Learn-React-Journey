// 🧠 ------------------------------------------------------
// 🎯 1. الفكرة العامة:
// useRef() = الأب بيعمل "سلك"
// forwardRef() = الابن بيفتح مدخل السلك
// useImperativeHandle() = الابن بيقول للأب إيه المسموحله يتحكم فيه
// ---------------------------------------------------------

import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";

// 🧩 ------------------------------------------------------
// 👶 Child Component (الابن)
// هنا الابن هيسمح للأب يوصلله عن طريق forwardRef
// ---------------------------------------------------------
const Child = forwardRef((props, ref) => {
  // useRef عشان نربط input
  const inputRef = useRef();

  // useImperativeHandle بيقول للأب إيه اللي يقدر يعمله
  useImperativeHandle(ref, () => ({
    // الأب يقدر يستدعي الحاجات دي
    focusInput: () => inputRef.current.focus(),
    clearInput: () => (inputRef.current.value = ""),
  }));

  return (
    <div>
      <h3>👶 أنا الابن (Child)</h3>
      <input ref={inputRef} placeholder="اكتب هنا يا بابا 😄" />
    </div>
  );
});

// 👨 ------------------------------------------------------
// 🧩 Parent Component (الأب)
// هنا الأب بيستخدم useRef يعمل "سلك" ويربطه بالابن
// ---------------------------------------------------------
export default function Parent() {
  const childRef = useRef(); // "السلك" بين الأب والابن

  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: "1.6" }}>
      <h2>👨 أنا الأب (Parent)</h2>
      <p>
        أنا هابعت ref للابن عشان أتحكم في حاجات معينة جواه
        (زي focus أو clear)
      </p>

      {/* هنا الأب وصل السلك بالابن */}
      <Child ref={childRef} />

      <br />

      {/* الأزرار بتتحكم في الابن من برا */}
      <button onClick={() => childRef.current.focusInput()}>
        🔍 ركّز على الخانة
      </button>
      <button onClick={() => childRef.current.clearInput()}>
        🧹 امسح الكلام
      </button>
    </div>
  );
}

// 🧩 ------------------------------------------------------
// 💬 شرح تخيلي:
//
// Parent (الأب)
//   |
//   | ← useRef() = بيعمل "سلك"
//   |
//   ▼
// Child (الابن)
//   |
//   | ← forwardRef() = بيفتح مدخل للسلك
//   |
//   ▼
// useImperativeHandle() = بيقول للأب "انت مسموحلك تتحكم في دول بس"
//
// ------------------------------------------------------

// 🧩 ------------------------------------------------------
// 📘 أمثلة إضافية بسيطة للفهم
// ------------------------------------------------------

// ✅ مثال 2: Counter يتحكم فيه الأب
export function ExampleCounter() {
  const counterRef = useRef();

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>🧮 مثال 2: الأب يتحكم في عداد الابن</h2>
      <CounterChild ref={counterRef} />
      <button onClick={() => counterRef.current.increase()}>➕ زود</button>
      <button onClick={() => counterRef.current.reset()}>🔁 رجّع صفر</button>
      <button onClick={() => alert(counterRef.current.getValue())}>
        🔎 شوف القيمة
      </button>
    </div>
  );
}

const CounterChild = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    increase: () => setCount((c) => c + 1),
    reset: () => setCount(0),
    getValue: () => count,
  }));

  return (
    <div>
      <h3>👶 العداد (Child): {count}</h3>
    </div>
  );
});

// 🧩 ------------------------------------------------------
// ✅ مثال 3: Modal الأب يفتحها ويقفلها
// ------------------------------------------------------
export function ExampleModal() {
  const modalRef = useRef();

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>🪟 مثال 3: تحكم في Modal</h2>
      <button onClick={() => modalRef.current.open()}>افتح المودال</button>
      <ModalChild ref={modalRef} />
    </div>
  );
}

const ModalChild = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
  }));

  if (!visible) return null;

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        width: "200px",
        marginTop: "10px",
      }}
    >
      <p>📦 ده المودال بتاعي</p>
      <button onClick={() => setVisible(false)}>❌ اقفل</button>
    </div>
  );
});









//////////////////////////////////////////////////////////////////////////////////
/*Examples*/
import React, { useRef, useImperativeHandle, forwardRef, useState } from "react";

// ✅ Example 1 - Basic Counter
const Counter = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    reset: () => setCount(0),
    increment: () => setCount((c) => c + 1),
    getCount: () => count,
  }));

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>+ Add</button>
    </div>
  );
});

export default function Example1() {
  const counterRef = useRef();

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Example 1 - Basic Counter</h2>
      <Counter ref={counterRef} />
      <button onClick={() => counterRef.current.reset()}>Reset</button>
      <button onClick={() => alert(counterRef.current.getCount())}>
        Show Count
      </button>
    </div>
  );
}

// ✅ Example 2 - Custom Input Focus
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => inputRef.current.focus(),
    clearInput: () => (inputRef.current.value = ""),
  }));

  return <input ref={inputRef} placeholder="Type something..." />;
});

export function Example2() {
  const inputRef = useRef();

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Example 2 - Custom Input</h2>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focusInput()}>Focus</button>
      <button onClick={() => inputRef.current.clearInput()}>Clear</button>
    </div>
  );
}

// ✅ Example 3 - Modal Control
const Modal = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
  }));

  if (!visible) return null;
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <p>This is a Modal!</p>
      <button onClick={() => setVisible(false)}>Close</button>
    </div>
  );
});

export function Example3() {
  const modalRef = useRef();

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Example 3 - Modal Control</h2>
      <button onClick={() => modalRef.current.open()}>Open Modal</button>
      <Modal ref={modalRef} />
    </div>
  );
}

// ✅ Example 4 - Timer Control
const Timer = forwardRef((props, ref) => {
  const [seconds, setSeconds] = useState(0);
  let timer;

  useImperativeHandle(ref, () => ({
    start: () => {
      timer = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    },
    stop: () => clearInterval(timer),
    reset: () => setSeconds(0),
  }));

  return <h3>Time: {seconds}s</h3>;
});

export function Example4() {
  const timerRef = useRef();

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Example 4 - Timer Control</h2>
      <Timer ref={timerRef} />
      <button onClick={() => timerRef.current.start()}>Start</button>
      <button onClick={() => timerRef.current.stop()}>Stop</button>
      <button onClick={() => timerRef.current.reset()}>Reset</button>
    </div>
  );
}

// ✅ Example 5 - Child Functions (for forms)
const Form = forwardRef((props, ref) => {
  const [data, setData] = useState({ name: "", age: "" });

  useImperativeHandle(ref, () => ({
    getData: () => data,
    clearForm: () => setData({ name: "", age: "" }),
  }));

  return (
    <div>
      <input
        placeholder="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        placeholder="Age"
        value={data.age}
        onChange={(e) => setData({ ...data, age: e.target.value })}
      />
    </div>
  );
});

export function Example5() {
  const formRef = useRef();

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Example 5 - Form Control</h2>
      <Form ref={formRef} />
      <button onClick={() => alert(JSON.stringify(formRef.current.getData()))}>
        Show Data
      </button>
      <button onClick={() => formRef.current.clearForm()}>Clear</button>
    </div>
  );
}

