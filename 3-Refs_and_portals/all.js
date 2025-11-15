// 🧩 مثال 1 (Refs) — أبسط مثال: التركيز على input لما نضغط زر
import { useRef } from "react";

function RefExample1() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="اكتب هنا..." />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default RefExample1;

///////////////////////////////






























// 🧩 مثال 2 (Refs) — قراءة قيمة input بدون state
import { useRef } from "react";

function RefExample2() {
  const inputRef = useRef();

  const showValue = () => {
    alert("القيمة هي: " + inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} placeholder="اكتب اسمك" />
      <button onClick={showValue}>عرض</button>
    </div>
  );
}





///////////////////////////////

// 🧩 مثال 3 (Refs) — تغيير لون عنصر مباشرة
import { useRef } from "react";

function RefExample3() {
  const boxRef = useRef();

  const changeColor = () => {
    boxRef.current.style.background = "orange";
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: 100, height: 100, background: "gray", margin: 10 }}
      ></div>
      <button onClick={changeColor}>غير اللون</button>
    </div>
  );
}

///////////////////////////////

// 🧩 مثال 4 (Refs) — عداد من غير re-render
import { useRef, useState } from "react";

function RefExample4() {
  const [_, setRender] = useState(false);
  const counter = useRef(0);

  const add = () => {
    counter.current += 1;
    alert("القيمة الحالية: " + counter.current);
  };

  return (
    <div>
      <button onClick={add}>زياده</button>
      <p>مش هيعمل rerender!</p>
    </div>
  );
}

///////////////////////////////

// 🧩 مثال 5 (Refs) — تحريك عنصر بلـ style
import { useRef } from "react";

function RefExample5() {
  const boxRef = useRef();

  const moveBox = () => {
    boxRef.current.style.transform = "translateX(100px)";
    boxRef.current.style.transition = "0.5s";
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: 100, height: 100, background: "blue", margin: 10 }}
      ></div>
      <button onClick={moveBox}>حرّك</button>
    </div>
  );
}

///////////////////////////////

// 🌀 مثال 6 (Portals) — عرض نص في مكان تاني بالـ DOM
import { createPortal } from "react-dom";

function PortalExample1() {
  return createPortal(
    <p style={{ color: "red" }}>ده جاي من Portal!</p>,
    document.body
  );
}








///////////////////////////////

// 🌀 مثال 7 (Portals) — نافذة منبثقة بسيطة
import { createPortal } from "react-dom";

function PortalExample2() {
  const popup = (
    <div
      style={{
        background: "rgba(0,0,0,0.5)",
        color: "white",
        padding: "20px",
        position: "fixed",
        top: "30%",
        left: "30%",
      }}
    >
      مرحبًا! 👋
    </div>
  );

  return createPortal(popup, document.body);
}










///////////////////////////////

// 🌀 مثال 8 (Portals) — Popup يظهر بزر
import { useState } from "react";
import { createPortal } from "react-dom";

function PortalExample3() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "اخفي" : "اظهر"} البوب أب
      </button>
      {show &&
        createPortal(
          <div
            style={{
              background: "black",
              color: "white",
              padding: "20px",
              position: "fixed",
              top: "40%",
              left: "40%",
            }}
          >
            Popup ظاهر من Portal!
          </div>,
          document.body
        )}
    </div>
  );
}






///////////////////////////////

// 🌀 مثال 9 (Portals) — نقل مكون لعنصر محدد في index.html
import { createPortal } from "react-dom";

function PortalExample4() {
  return createPortal(
    <h3 style={{ color: "green" }}>ده اتعرض داخل div مخصص!</h3>,
    document.getElementById("special-root")
  );
}

///////////////////////////////

// 🌀 مثال 10 (Portals) — تراكب (Overlay) فوق الصفحة
import { useState } from "react";
import { createPortal } from "react-dom";

function PortalExample5() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>افتح overlay</button>
      {open &&
        createPortal(
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.8)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 20,
            }}
            onClick={() => setOpen(false)}
          >
            اضغط في أي مكان للقفل ✖️
          </div>,
          document.body
        )}
    </div>
  );
}
