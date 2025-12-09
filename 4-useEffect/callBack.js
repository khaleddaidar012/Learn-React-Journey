import React, { useState, useEffect, useCallback } from 'react';

function AutoCounter({ maxCount }) {
  const [currentCount, setCurrentCount] = useState(0);

  // 5. الدالة المُستخدمة كاعتمادية: startCounting
  const startCounting = useCallback(() => {
    if (currentCount >= maxCount) {
      console.log('Max count reached. Not starting interval.');
      return null; // لا تبدأ المؤقت
    }

    const id = setInterval(() => {
      setCurrentCount(c => {
        if (c + 1 >= maxCount) {
          return maxCount; // تتوقف عند الوصول إلى الحد الأقصى
        }
        return c + 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [currentCount, maxCount]); // تعتمد على currentCount و maxCount

  useEffect(() => {
    const cleanup = startCounting(); // يمكن أن تُرجع دالة تنظيف أو null
    return cleanup;
  }, [startCounting]); // الاعتمادية هي startCounting

  // ...
}

/////////////////////////////////////////////////
import React, { useState, useEffect, useCallback } from 'react';

function CartItem({ itemId, price }) {
  const [quantity, setQuantity] = useState(1);

  // 4. الدالة المُستخدمة كاعتمادية: updateItemQuantity
  const updateItemQuantity = useCallback((newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
    console.log(`Item ${itemId} quantity updated to ${newQuantity}. Total cost: ${newQuantity * price}`);
  }, [itemId, price]); // تعتمد على itemId و price

  useEffect(() => {
    // مثال: تحديث الكمية إلى 5 بعد تحميل المكون
    updateItemQuantity(5);
  }, [updateItemQuantity]); // الاعتمادية هي updateItemQuantity

  // ...
}

//////////////////////////////////////////////
import React, { useState, useEffect, useCallback } from 'react';

function StatusLogger({ status }) {
  const [logCount, setLogCount] = useState(0);

  // 3. الدالة المُستخدمة كاعتمادية: logStatus
  const logStatus = useCallback(() => {
    console.log(`Current Status: ${status} - Logged ${logCount} times`);
    setLogCount(c => c + 1);
  }, [status, logCount]); // تعتمد logStatus على status و logCount

  useEffect(() => {
    // نقوم بتشغيل الدالة المساعدة
    logStatus(); 
  }, [logStatus]); // الاعتمادية هي logStatus

  // ...
}
//////////////////////////////////////
import React, { useState, useEffect, useCallback } from 'react';

function GlobalClickHandler() {
  const [count, setCount] = useState(0);

  // 2. الدالة المُستخدمة كاعتمادية: handleClick
  const handleClick = useCallback(() => {
    // تعتمد الدالة على أحدث قيمة لـ count
    setCount(prevCount => prevCount + 1); 
    console.log('Document clicked!');
  }, []); // لا تعتمد على count مباشرة، نستخدم تحديث الدالة (functional update)

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      // وظيفة التنظيف لإزالة المعالج
      document.removeEventListener('click', handleClick); 
    };
  }, [handleClick]); // الاعتمادية هي handleClick

  // ... (JSX لعرض العداد)
}
/////////////////////////////////////////////////












import React, { useState, useEffect, useCallback } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  // 1. الدالة المُستخدمة كاعتمادية: fetchData
  const fetchData = useCallback(async () => {
    console.log(`Fetching user ${userId}`);
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    setUser(data);
  }, [userId]); // تعتمد fetchData على userId

  useEffect(() => {
    // نُطلق الدالة fetchData
    fetchData(); 
  }, [fetchData]); // الاعتمادية هي الدالة المعزولة (memoized)

  // ... (JSX لعرض بيانات المستخدم)
}