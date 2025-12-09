import React, { useState, useCallback, useEffect, memo } from 'react';

/*
  ===================================================================
   دليل الـ useCallback الشامل
   ملاحظة هامة جداً:
   الـ useCallback لا يفيد بمفرده، فائدته تظهر في حالتين:
   1. تمرير الدالة لمكون ابن محمي بـ React.memo
   2. وضع الدالة داخل مصفوفة تبعيات useEffect
  ===================================================================
*/

// ******************************************************************
//  القسم الأول: الأساسيات (Syntax & Basics)
// ******************************************************************

// 1. أبسط مثال (Syntax Only) - الأسهل
// الفكرة: طريقة كتابة الـ Hook. هنا نقوم بتثبيت الدالة لكي لا يعاد إنشاؤها.
const BasicSyntax = () => {
  const handleClick = useCallback(() => {
    console.log('تم الضغط على الزر');
  }, []); // [] تعني: احفظ هذه النسخة للأبد ولا تنشئ غيرها

  return <button onClick={handleClick}>اضغطني</button>;
};

// ------------------------------------------------------------------

// 2. دالة تعتمد على State (With Dependencies)
// الفكرة: الدالة تحتاج لقراءة أحدث قيمة للعداد، لذا نضعه في المصفوفة.
const CounterCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []); // لاحظ: استخدمنا دالة التحديث (c => c+1) فبقيت المصفوفة فارغة، وهذا أفضل أداء

  const logCount = useCallback(() => {
    console.log('العدد الحالي:', count);
  }, [count]); // هنا يجب وضع count، وإلا ستطبع الدالة 0 دائماً (القيمة القديمة)

  return (
    <div>
      <button onClick={increment}>زود</button>
      <button onClick={logCount}>اطبع</button>
    </div>
  );
};


// ******************************************************************
//  القسم الثاني: تحسين الأداء مع React.memo (الاستخدام الأشهر)
// ******************************************************************

// * مكون فرعي محمي بـ memo (لن يعيد الرسم إلا إذا تغيرت الـ props)
const ChildButton = memo(({ onClick, label }) => {
  console.log(`ChildButton Rendered: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

// 3. منع إعادة رسم الابن (Prevent Child Re-render)
// الفكرة: لو لم نستخدم useCallback، زر "مسح" سيعيد الرسم كلما كتبنا حرفاً!
const MemoExample = () => {
  const [text, setText] = useState('');

  // هذه الدالة "مستقرة" ولن تتغير هويتها في الذاكرة
  const clearText = useCallback(() => {
    setText('');
  }, []);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {/* ChildButton لن يعمل له render وأنت تكتب، لأن clearText ثابتة */}
      <ChildButton onClick={clearText} label="مسح النص" />
    </div>
  );
};

// ------------------------------------------------------------------

// 4. تحديث القوائم (Optimized List Item)
// الفكرة: عند حذف عنصر، لا نريد إعادة رسم باقي العناصر في القائمة.
const TodoItem = memo(({ id, onDelete }) => {
  console.log(`Todo Item Rendered: ${id}`);
  return <button onClick={() => onDelete(id)}>حذف {id}</button>;
});

const TodoList = () => {
  const [todos, setTodos] = useState([1, 2, 3, 4]);

  // الدالة ثابتة ولا تتغير بتغير الـ State الخاص بالقائمة
  const handleDelete = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item !== id));
  }, []);

  return (
    <div>
      {todos.map((id) => (
        <TodoItem key={id} id={id} onDelete={handleDelete} />
      ))}
    </div>
  );
};


// ******************************************************************
//  القسم الثالث: حالات متقدمة (Advanced Use Cases)
// ******************************************************************

// 5. تثبيت دالة لاستخدامها في useEffect (Dependency Fix)
// الفكرة: useEffect يطلب وضع الدالة في التبعيات، ولو لم نثبتها بـ useCallback سيدخل في Loop لانهائي.
const FetchInEffect = ({ userId }) => {
  const [data, setData] = useState(null);

  const fetchData = useCallback(() => {
    console.log('جلب بيانات المستخدم:', userId);
    // fetch(`/api/user/${userId}`)...
  }, [userId]); // الدالة تتغير فقط لو تغير الـ userId

  useEffect(() => {
    fetchData();
  }, [fetchData]); // الآن هذا آمن ولن يسبب Loop

  return <div>User Data Loaded</div>;
};

// ------------------------------------------------------------------

// 6. التعامل مع الـ Custom Hooks
// الفكرة: عند بناء Hook خاص، يجب تغليف الدوال المرجعة بـ useCallback ليتمكن المستخدم من وضعها في useEffect بأمان.
const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);

  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return [state, toggle];
};

const ToggleComponent = () => {
  const [isDark, toggleTheme] = useToggle();

  useEffect(() => {
    console.log('تغير الثيم أو تم إنشاء دالة التبديل');
  }, [toggleTheme]); // آمن لأن toggleTheme ثابتة

  return <button onClick={toggleTheme}>تبديل الوضع</button>;
};

// ------------------------------------------------------------------

// 7. تحسين النماذج المتعددة (Form Handlers)
// الفكرة: دالة واحدة تتعامل مع عدة حقول، ونريد تمريرها لمكونات فرعية دون مشاكل.
const HeavyInput = memo(({ name, onChange }) => {
  console.log(`Input Rendered: ${name}`);
  return <input name={name} onChange={onChange} placeholder={name} />;
});

const ComplexForm = () => {
  const [formData, setFormData] = useState({ user: '', email: '' });

  // دالة واحدة ذكية وثابتة للتعامل مع كل الحقول
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <div>
      <HeavyInput name="user" onChange={handleChange} />
      <HeavyInput name="email" onChange={handleChange} />
    </div>
  );
};

// ------------------------------------------------------------------

// 8. تأخير التنفيذ (Debouncing Logic Wrap) - متقدم
// الفكرة: دالة البحث (Search) نريدها أن تحتفظ بهويتها لكي لا يتم إلغاء الـ Timer مع كل Render.
const DebouncedSearchCallback = () => {
  const [term, setTerm] = useState('');

  // نستخدم useCallback لإنشاء نسخة "Debounced" واحدة فقط طوال حياة المكون
  const debouncedLog = useCallback(
    (value) => {
      // محاكاة Lodash debounce
      const handler = setTimeout(() => {
        console.log('API CALL SEARCH:', value);
      }, 500);
      
      // ملاحظة: هذا تبسيط، التنفيذ الحقيقي يحتاج logic أكثر للـ cleanup
      // ولكن الفكرة هنا أن الدالة نفسها يجب أن تكون مستقرة
    },
    [] 
  );

  const handleChange = (e) => {
    setTerm(e.target.value);
    debouncedLog(e.target.value);
  };

  return <input value={term} onChange={handleChange} placeholder="Search..." />;
};

// ------------------------------------------------------------------

// 9. التعامل مع الـ Refs (Refs & Callbacks)
// الفكرة: نريد قياس عنصر DOM بمجرد ظهوره، useCallback هنا يعمل كـ "Ref Callback".
const MeasureExample = () => {
  const [height, setHeight] = useState(0);

  // هذه الدالة ستتنفذ عندما يتم ربط الـ div بالـ ref
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []); // [] تضمن التنفيذ مرة واحدة عند التركيب (Mount)

  return (
    <>
      <h1 ref={measuredRef}>عنوان بحجم متغير</h1>
      <h2>الطول المقاس: {height}px</h2>
    </>
  );
};

// ------------------------------------------------------------------

// 10. مستمعات الأحداث (Event Listeners) - الأصعب والأكثر دقة
// الفكرة: إضافة مستمع للنافذة (Window) وإزالته. يجب أن تكون دالة الإزالة هي "نفس" دالة الإضافة بالضبط في الذاكرة.
const ScrollTracker = () => {
  const [scrollY, setScrollY] = useState(0);

  // يجب استخدام useCallback هنا لأننا سنستخدم هذه الدالة في removeEventListener
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
    console.log('Scrolling...');
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      // لو لم نستخدم useCallback، هذه الدالة كانت ستكون مختلفة عن التي أضيفت
      // وبالتالي لن يتم حذف المستمع بشكل صحيح (Memory Leak)
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return <div style={{ height: '200vh' }}>Scroll Position: {scrollY}</div>;
};

export default MemoExample;