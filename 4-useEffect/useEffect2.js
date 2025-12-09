import React, { useState, useEffect } from 'react';

/*
  ===================================================================
   دمج setTimeout مع useEffect وتنظيفه (Cleanup)
   5 أمثلة من الأسهل للأصعب
  ===================================================================
*/

// ------------------------------------------------------------------
// 1. المثال الأسهل: رسالة ترحيب تختفي تلقائياً
// الفكرة: عرض رسالة "أهلاً بك" لمدة 3 ثوانٍ ثم إخفاؤها.
// التنظيف: إذا أغلق المستخدم الصفحة قبل الـ 3 ثوانٍ، نلغي الأمر.
// ------------------------------------------------------------------

const FlashMessage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // 1. إعداد المؤقت
    const timerId = setTimeout(() => {
      setVisible(false);
      console.log('اختفت الرسالة');
    }, 3000);

    // 2. تنظيف المؤقت (إيقافه) عند الخروج
    return () => {
      clearTimeout(timerId);
      console.log('تم إلغاء المؤقت (Cleanup)');
    };
  }, []); // مصفوفة فارغة: يعمل مرة واحدة عند البدء

  return (
    <div>
      {visible ? <div className="alert">مرحباً بك في موقعنا!</div> : null}
    </div>
  );
};

// ------------------------------------------------------------------
// 2. مثال سهل/متوسط: محاكاة إعادة التوجيه (Redirect)
// الفكرة: بعد عملية ناجحة، ننتظر قليلاً ثم ننقل المستخدم لصفحة أخرى.
// التنظيف: لو المستخدم ضغط "إلغاء" قبل الوقت، نوقف النقل.
// ------------------------------------------------------------------

const DelayedRedirect = () => {
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    if (!isRedirecting) return; // لو المستخدم ألغى التوجيه، لا تفعل شيئاً

    const timer = setTimeout(() => {
      console.log('--> تم نقلك للصفحة الرئيسية الآن!');
      // window.location.href = '/home'; 
    }, 5000);

    // دالة الإيقاف
    return () => clearTimeout(timer);
  }, [isRedirecting]); // يعتمد على حالة التوجيه

  return (
    <div>
      <h3>جاري نقلك للصفحة الرئيسية خلال 5 ثوانٍ...</h3>
      <button onClick={() => setIsRedirecting(false)}>إلغاء النقل</button>
    </div>
  );
};

// ------------------------------------------------------------------
// 3. مثال متوسط: البحث المؤجل (Debounce) - "أشهر مثال عملي"
// الفكرة: لا نريد البحث مع كل حرف، ننتظر حتى يتوقف المستخدم عن الكتابة.
// التنظيف: كلما كتب حرفاً جديداً، نقوم بمسح المؤقت القديم ونبدأ واحداً جديداً.
// ------------------------------------------------------------------

const DebouncedSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // لا تبحث إذا كان الحقل فارغاً
    if (!searchTerm) return;

    // ابدأ مؤقت لمدة نصف ثانية
    const delayDebounceFn = setTimeout(() => {
      console.log(`جاري إرسال طلب للسيرفر للبحث عن: ${searchTerm}`);
      // API Call here...
    }, 800);

    // السحر هنا: لو المستخدم كتب حرف جديد قبل الـ 800ms
    // هذه الدالة ستعمل فوراً وتلغي المؤقت السابق
    return () => clearTimeout(delayDebounceFn);
    
  }, [searchTerm]); // يتنفذ مع كل حرف يكتب

  return (
    <input 
      placeholder="ابحث عن منتج..." 
      onChange={(e) => setSearchTerm(e.target.value)} 
    />
  );
};

// ------------------------------------------------------------------
// 4. مثال متقدم: تسلسل أحداث (Animation Sequence)
// الفكرة: عرض خطوات متتالية بتوقيتات مختلفة (Step 1 -> Step 2 -> Step 3).
// الصعوبة: إدارة التنظيف عند الانتقال بين الخطوات.
// ------------------------------------------------------------------

const InstallationWizard = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    let timer;

    if (step === 0) {
      // ابدأ العملية
      timer = setTimeout(() => setStep(1), 2000); // انتظر ثانيتين
    } else if (step === 1) {
      // الخطوة الثانية
      timer = setTimeout(() => setStep(2), 3000); // انتظر 3 ثوان
    } else if (step === 2) {
      // الانتهاء
      timer = setTimeout(() => setStep(3), 1500); 
    }

    // هذا السطر يحميك من الأخطاء لو المستخدم أغلق الـ Popup في نصف العملية
    return () => clearTimeout(timer);
    
  }, [step]); // كلما تغيرت الخطوة، يتم إعداد المؤقت للخطوة التالية

  return (
    <div>
      <h3>حالة التثبيت:</h3>
      {step === 0 && <p>جاري تهيئة الملفات...</p>}
      {step === 1 && <p>جاري تنزيل البيانات...</p>}
      {step === 2 && <p>جاري التثبيت...</p>}
      {step === 3 && <p style={{color:'green'}}>تم الانتهاء بنجاح!</p>}
    </div>
  );
};

// ------------------------------------------------------------------
// 5. المثال الأصعب: مهلة الإجابة (Quiz Timeout) مع حالتين للإيقاف
// الفكرة: لديك 10 ثوان للإجابة.
// التعقيد: يجب إيقاف المؤقت في حالتين:
// 1. إذا انتهى الوقت (Time's up).
// 2. إذا أجاب المستخدم قبل انتهاء الوقت (User answered).
// ------------------------------------------------------------------

const QuizTimer = () => {
  const [status, setStatus] = useState('active'); // active | answered | failed
  const [timeLeft, setTimeLeft] = useState(10); // للعرض فقط

  // Effect 1: المسؤول عن الخسارة (Logic)
  useEffect(() => {
    if (status !== 'active') return; // لو جاوب أو خسر خلاص، لا تفعل شيئاً

    const failTimer = setTimeout(() => {
      setStatus('failed');
      console.log('انتهى الوقت! لقد خسرت.');
    }, 10000); // 10 ثواني

    // أهم نقطة: إذا ضغط المستخدم زر الإجابة وتغيرت الـ status
    // سيتم تنفيذ هذا السطر وإلغاء مؤقت الخسارة فوراً
    return () => clearTimeout(failTimer);
  }, [status]);


  // Effect 2: (إضافي) فقط لتحديث العداد في الشاشة كل ثانية (Visual only)
  // وضعته هنا لترى الفرق بين المنطق والعرض
  useEffect(() => {
    if (status !== 'active' || timeLeft <= 0) return;
    
    const interval = setTimeout(() => {
      setTimeLeft(t => t - 1);
    }, 1000);
    
    return () => clearTimeout(interval);
  }, [timeLeft, status]);


  return (
    <div style={{ border: '2px solid #ccc', padding: '20px', margin: '10px' }}>
      <h2>سؤال: ما هي عاصمة مصر؟</h2>
      
      {status === 'active' && <h3>الوقت المتبقي: {timeLeft}</h3>}

      {status === 'active' && (
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => setStatus('answered')}>القاهرة (إجابة صحيحة)</button>
          <button onClick={() => setStatus('failed')}>الإسكندرية (إجابة خاطئة)</button>
        </div>
      )}

      {status === 'answered' && <h3 style={{color: 'green'}}>أحسنت! تم إيقاف المؤقت.</h3>}
      {status === 'failed' && <h3 style={{color: 'red'}}>للأسف انتهى الوقت أو إجابة خاطئة.</h3>}
    </div>
  );
};

export default FlashMessage;