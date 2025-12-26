import { useRef } from "react";

/* =====================================================
   Example 2: Focus input
   -----------------------------------------------------
   الفكرة:
   - بنستخدم useRef علشان نمسك عنصر input من الـ DOM
   - لما نضغط على الزرار نعمل focus على الـ input مباشرة

   ليه useRef؟
   - علشان نتعامل مع DOM مباشرة
   - من غير ما نعمل re-render
===================================================== */
export function RefExample2() {
  const inputRef = useRef(); // ref هيمسك الـ input

  function focusInput() {
    // current بتشير للعنصر نفسه
    inputRef.current.focus();
  }

  return (
    <div>
      <h4>Example 2: Focus input</h4>
      <input ref={inputRef} placeholder="Click button to focus" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}















/* =====================================================
   Example 3: Clear input value
   -----------------------------------------------------
   الفكرة:
   - مسح قيمة input مباشرة من غير useState
   - تعديل القيمة من الـ DOM نفسه

   ملاحظة:
   - useRef مناسب لما التغيير مش محتاج يظهر في UI
===================================================== */
export function RefExample3() {
  const inputRef = useRef();

  function clearInput() {
    // مسح القيمة مباشرة
    inputRef.current.value = "";
  }

  return (
    <div>
      <h4>Example 3: Clear input</h4>
      <input ref={inputRef} placeholder="Type something" />
      <button onClick={clearInput}>Clear</button>
    </div>
  );
}

/* =====================================================
   Example 4: Multiple inputs
   -----------------------------------------------------
   الفكرة:
   - كل input ليه ref خاص بيه
   - بنجمع القيم وقت الضغط على زر Login

   تستخدمه إمتى؟
   - فورم بسيط
   - Submit مرة واحدة
   - مش محتاج validation لحظي
===================================================== */
export function RefExample4() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleLogin() {
    // قراءة القيم من الـ DOM
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }

  return (
    <div>
      <h4>Example 4: Multiple inputs</h4>
      <input ref={emailRef} placeholder="Email" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

/* =====================================================
   Example 5: Track previous value
   -----------------------------------------------------
   الفكرة:
   - تخزين القيمة القديمة من غير re-render
   - useRef بتحتفظ بالقيمة بين الريندرات

   ليه مش useState؟
   - useState بتسبب re-render
   - useRef لأ، وده المطلوب هنا
===================================================== */
export function RefExample5() {
  const inputRef = useRef();
  const prevValue = useRef(""); // تخزين القيمة القديمة

  function handleBlur() {
    alert(
      `Previous: ${prevValue.current} | Current: ${inputRef.current.value}`
    );

    // تحديث القيمة القديمة
    prevValue.current = inputRef.current.value;
  }

  return (
    <div>
      <h4>Example 5: Track previous value</h4>
      <input
        ref={inputRef}
        onBlur={handleBlur}
        placeholder="Change and blur"
      />
    </div>
  );
}
