import React, { useState, useEffect, useRef } from 'react';

/*
  ===================================================================
   دليل الـ useEffect الشامل - 20 مثال عملي
  ===================================================================
*/

// ******************************************************************
//  القسم الأول: 5 أمثلة بدون مصفوفة تبعيات (No Dependency Array)
//  الملاحظة: هذا الكود يتنفذ بعد *كل* عملية Render للمكون.
// ******************************************************************







// 1. تتبع كل تحديث (Logger) - الأسهل
// الفكرة: نريد معرفة متى يتم إعادة رسم المكون لأغراض التصحيح (Debugging).
const ComponentRenderLogger = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('تم تحديث المكون أو إعادة رسمه الآن!');
  }); 
  // لا يوجد أقواس [] -> يعمل مع كل ضغطة زر

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>زد العداد: {count}</button>
    </div>
  );
};

// -------------------------------















// 2. تحديث عنوان الصفحة (Document Title) مع كل حركة
// الفكرة: عرض آخر وقت تفاعل للمستخدم في عنوان المتصفح باستمرار.
const AlwaysUpdateTitle = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    document.title = `جاري الكتابة... ${new Date().toLocaleTimeString()}`;
  });
  // كل حرف يكتبه المستخدم يسبب Render، وبالتالي يحدث العنوان

  return (
    <input 
      placeholder="اكتب شيئاً..." 
      value={text} 
      onChange={(e) => setText(e.target.value)} 
    />
  );
};

// -------------------------------

// 3. التحقق من التركيز (Focus Checker)
// الفكرة: التأكد من العنصر النشط في الصفحة بعد أي تحديث.
const ActiveElementChecker = () => {
  const [val, setVal] = useState('');

  useEffect(() => {
    console.log('العنصر النشط حالياً هو:', document.activeElement.tagName);
  });

  return (
    <div>
      <input value={val} onChange={(e) => setVal(e.target.value)} placeholder="Input 1" />
      <button onClick={() => setVal('')}>Clear</button>
    </div>
  );
};

// -------------------------------

// 4. تأثير الرسم العشوائي (Visual Chaos)
// الفكرة: تغيير لون الخلفية عشوائياً مع كل تحديث (مثال توضيحي لقوة التكرار).
const RandomBackground = () => {
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    console.log(`تغير اللون إلى ${randomColor} بسبب إعادة الرسم`);
    // تحذير: هذا مجرد مثال تعليمي، التغيير المباشر للـ DOM يفضل تجنبه
  });

  return (
    <div style={{ padding: 20, border: '1px solid black' }}>
      <button onClick={() => setUpdate(u => u + 1)}>لون جديد ({update})</button>
    </div>
  );
};

// -------------------------------

// 5. مراقبة الأداء (Performance Monitor)
// الفكرة: حساب الوقت المستغرق منذ آخر تحديث.
const RenderTimeMonitor = () => {
  const [count, setCount] = useState(0);
  const lastRender = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();
    const timeSinceLast = now - lastRender.current;
    console.log(`الوقت منذ آخر تحديث: ${timeSinceLast}ms`);
    lastRender.current = now;
  });

  return <button onClick={() => setCount(c => c + 1)}>تحديث ({count})</button>;
};


// ******************************************************************
//  القسم الثاني: 5 أمثلة بمصفوفة فارغة [] (Empty Dependency Array)
//  الملاحظة: هذا الكود يتنفذ *مرة واحدة فقط* عند ظهور المكون (Mount).
// ******************************************************************

// 6. جلب بيانات مرة واحدة (Simple API Fetch) - الأسهل
// الفكرة: جلب قائمة مستخدمين عند فتح الصفحة.
const UserFetcher = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); 
  // الأقواس الفارغة تضمن عدم تكرار الطلب للسيرفر

  return <div>عدد المستخدمين: {users.length}</div>;
};

// -------------------------------

// 7. التركيز التلقائي (Auto Focus)
// الفكرة: وضع المؤشر داخل حقل الإدخال تلقائياً عند فتح النموذج.
const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="أكتب هنا مباشرة..." />;
};

// -------------------------------

// 8. تفعيل مكتبة خارجية (3rd Party Lib Init)
// الفكرة: لنفترض أننا نريد تشغيل مكتبة خرائط أو فيديو عند التحميل.
const MapInitializer = () => {
  useEffect(() => {
    console.log('جاري تهيئة الخريطة...');
    // const map = new GoogleMap(...)
    
    return () => {
      console.log('تنظيف الخريطة عند الخروج');
    };
  }, []);

  return <div id="map">خريطة</div>;
};

// -------------------------------

// 9. قراءة الإعدادات المحفوظة (Load from LocalStorage)
// الفكرة: قراءة الثيم (فاتح/داكن) المحفوظ مسبقاً مرة واحدة في البداية.
const ThemeLoader = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return <p>الثيم الحالي: {theme}</p>;
};

// -------------------------------

// 10. مستمع لحجم النافذة (Global Event Listener) - الأصعب في هذه الفئة
// الفكرة: نريد معرفة عرض الشاشة، ويجب تنظيف المستمع عند إغلاق المكون.
const WindowSizeListener = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);

    // Cleanup function: ضروري جداً لإزالة المستمع عند اختفاء المكون
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div>عرض الشاشة: {width}px</div>;
};


// ******************************************************************
//  القسم الثالث: 10 أمثلة بتبعيات محددة [deps] (With Dependencies)
//  الملاحظة: ينفذ الكود عند البداية، وعندما تتغير القيم داخل المصفوفة.
//  مرتبة من الأسهل للأصعب.
// ******************************************************************

// 11. تزامن العنوان مع العداد (Basic Sync) - الأسهل
// الفكرة: تغيير عنوان الصفحة ليعكس رقم الإشعار.
const NotificationTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `لديك (${count}) رسائل جديدة`;
  }, [count]); // يتنفذ فقط لما count يتغير

  return <button onClick={() => setCount(c => c + 1)}>استلام رسالة</button>;
};

// -------------------------------

// 12. التحقق من صحة كلمة المرور (Validation)
// الفكرة: إظهار رسالة خطأ إذا كانت كلمة المرور قصيرة أثناء الكتابة.
const PasswordValidator = () => {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(password.length >= 8);
  }, [password]); 

  return (
    <div>
      <input type="password" onChange={e => setPassword(e.target.value)} />
      {isValid ? <span style={{color:'green'}}>قوية</span> : <span style={{color:'red'}}>ضعيفة</span>}
    </div>
  );
};

// -------------------------------

// 13. الحفظ التلقائي (Auto Save to LocalStorage)
// الفكرة: حفظ بيانات النموذج في المتصفح كلما عدل المستخدم شيئاً.
const AutoSaveForm = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    localStorage.setItem('draft-name', name);
    console.log('تم الحفظ في LocalStorage');
  }, [name]);

  return <input value={name} onChange={e => setName(e.target.value)} placeholder="الاسم..." />;
};

// -------------------------------










// 14. جلب بيانات معتمد على فلتر (Dependent API Fetch)
// الفكرة: جلب مقالات بناءً على الفئة المختارة (رياضة، أخبار، تكنولوجيا).
const NewsFilter = () => {
  const [category, setCategory] = useState('sports');
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(`جاري جلب أخبار قسم: ${category}...`);
    // fetch(`/api/news?cat=${category}`)...
  }, [category]); // يعيد الجلب فقط عند تغيير الفئة

  return (
    <select onChange={e => setCategory(e.target.value)}>
      <option value="sports">رياضة</option>
      <option value="tech">تكنولوجيا</option>
    </select>
  );
};

// -------------------------------




















// 15. المؤقت التنازلي (Countdown Timer) - متوسط
// الفكرة: عداد ينقص كل ثانية، يتوقف عند الصفر.
const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]); // يعيد ضبط المؤقت بناء على الوقت المتبقي

  return <div>وقت متبقي: {timeLeft}</div>;
};

// -------------------------------

// 16. البحث مع تأخير (Debounced Search) - مهم جداً
// الفكرة: لا نريد البحث مع كل حرف، ننتظر حتى يتوقف المستخدم عن الكتابة لمدة 500ms.
const SearchBar = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) console.log(`بحث عن: ${query}`);
    }, 500);

    // دالة التنظيف (Cleanup) تلغي المؤقت السابق إذا كتب المستخدم حرفاً جديداً بسرعة
    return () => clearTimeout(handler);
  }, [query]);

  return <input onChange={e => setQuery(e.target.value)} placeholder="ابحث..." />;
};

// -------------------------------

// 17. التحكم في مشغل الصوت (Audio Player Control)
// الفكرة: تشغيل وإيقاف الصوت بناءً على متغير state.
const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(src));

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]); // يراقب زر التشغيل/الإيقاف

  return <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'إيقاف' : 'تشغيل'}</button>;
};

// -------------------------------

// 18. تحديث العملات (Dynamic Calculation)
// الفكرة: تحويل العملة تلقائياً عند تغيير المبلغ أو سعر الصرف.
const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [rate, setRate] = useState(30); // EGP to USD example
  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(amount * rate);
  }, [amount, rate]); // يعمل عند تغيير المبلغ *أو* سعر الصرف

  return <div>{amount} دولار = {result} جنيه</div>;
};

// -------------------------------

// 19. محاكاة غرفة محادثة (Chat Room Subscription) - متقدم
// الفكرة: الاتصال بغرفة شات معينة، وفصل الاتصال عند تغيير الغرفة.
const ChatRoom = () => {
  const [roomId, setRoomId] = useState('general');

  useEffect(() => {
    console.log(`✅ تم الاتصال بالغرفة: ${roomId}`);
    
    // دالة التنظيف: تنفذ قبل الانتقال للغرفة الجديدة (أو إغلاق المكون)
    return () => {
      console.log(`❌ تم قطع الاتصال عن الغرفة: ${roomId}`);
    };
  }, [roomId]); 

  return (
    <button onClick={() => setRoomId('sports')}>انتقل لغرفة الرياضة</button>
  );
};

// -------------------------------

// 20. تحريك العناصر (Animation Trigger) - الأصعب
// الفكرة: تشغيل أنيميشن Canvas معقد فقط عندما تتغير بيانات معينة.
const ChartAnimator = ({ dataPoints }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // منطق رسم معقد هنا (Complex Drawing Logic)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, dataPoints * 10, 50); // يرسم مستطيل طوله يعتمد على البيانات

    console.log('تم إعادة رسم الشارت بناءً على البيانات الجديدة');
  }, [dataPoints]); // يعيد الرسم فقط عند تغير الأرقام

  return <canvas ref={canvasRef} width={300} height={100} />;
};

export default ComponentRenderLogger;