/*🚀 أولًا: يعني إيه async / await؟
🎯 الفكرة ببساطة (بطريقة مصطلحات المطورين):

async: معناها إن الفانكشن دي وعد (Promise)، يعني هترجع نتيجة “بعدين”.

await: معناها “استنى النتيجة دي قبل ما تكمل”.

يعني بدل ما تعمل .then() و .catch() وتبوظ شكل الكود، بتخلي الكود شكله سهل ومفتوح زي الكود العادي.

🧠 ليه أصلاً بنستخدم async/await؟

لأن في حاجات مش بتحصل فورًا وبتاخد وقت زي:

إنك تجيب Data من API

تحفظ Data في Database

تقرأ ملف

تستخدم Timer

ترفع صورة أو ملف (Upload)

كل ده اسمه عمليات غير متزامنة (Asynchronous).*/


// ================================================
// ASYNC / AWAIT — 5 REAL WORLD EXAMPLES (WITH EXPLANATION)
// خالد هشام — أمثلة واقعية جاهزة للتجربة
// ================================================

// =====================================================
// 1) SIGNUP — إرسال بيانات مستخدم جديد للسيرفر
// =====================================================
// الفكرة: بتبعت بيانات للمستخدم — السيرفر يحفظها — يرجعلك رد
// async/await هنا بتخلي الكود مفهوم وبسيط من غير .then()

async function signupUser(userData) {
  try {
    const response = await fetch("https://example.com/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    });

    const data = await response.json();
    console.log("✔ User Created:", data);
  } catch (error) {
    console.log("❌ Signup Error:", error);
  }
}

// استخدام:
// signupUser({ name: "Khaled", email: "test@mail.com", password: "1234" });


// =====================================================
// 2) LOGIN + FETCH PROFILE — تسجيل دخول وجلب بيانات المستخدم
// =====================================================
// هنا عندك عمليتين وراء بعض لازم يحصلوا بالترتيب:
// 1) login -> يرجع token
// 2) تستخدم token -> تجيب profile
// await بيضمن إن الخطوات دي تحصل واحدة واحدة

async function loginAndGetProfile(email, password) {
  try {
    const loginRes = await fetch("https://example.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const { token } = await loginRes.json();

    const profileRes = await fetch("https://example.com/api/profile", {
      headers: { Authorization: "Bearer " + token }
    });

    const profile = await profileRes.json();
    console.log("✔ User Profile:", profile);
  } catch (err) {
    console.log("❌ Login/Profile Error:", err);
  }
}

// استخدام:
// loginAndGetProfile("test@mail.com", "1234");


// =====================================================
// 3) UPLOAD IMAGE — رفع صورة للسيرفر
// =====================================================
// هنا async/await مهم جدًا لأن الرفع بياخد وقت كبير
// FormData بتستخدم لرفع ملفات بدون JSON

async function uploadImage(file) {
  try {
    const form = new FormData();
    form.append("image", file);

    const res = await fetch("https://example.com/api/upload", {
      method: "POST",
      body: form
    });

    const data = await res.json();
    console.log("✔ Image Uploaded:", data.url);
  } catch (err) {
    console.log("❌ Upload Error:", err);
  }
}

// استخدام:
// uploadImage(selectedFile);


// =====================================================
// 4) DASHBOARD MULTI-REQUESTS — جلب بيانات الداشبورد
// =====================================================
// هنا بنستخدم Promise.all علشان نجيب 3 APIs مع بعض
// أسرع 3 مرات من await لوحدها

async function loadDashboard() {
  try {
    const [stats, notifications, messages] = await Promise.all([
      fetch("https://example.com/api/stats").then(r => r.json()),
      fetch("https://example.com/api/notifications").then(r => r.json()),
      fetch("https://example.com/api/messages").then(r => r.json())
    ]);

    console.log("📊 Stats:", stats);
    console.log("🔔 Notifications:", notifications);
    console.log("💬 Messages:", messages);
  } catch (err) {
    console.log("❌ Dashboard Error:", err);
  }
}

// استخدام:
// loadDashboard();


// =====================================================
// 5) DELETE ITEM + REFRESH LIST — حذف عنصر وتحديث الليست
// =====================================================
// هنا العملية منطقيًا تكون:
// 1) تمسح عنصر → DELETE
// 2) تجيب الليست الجديدة → GET

async function deleteItemAndRefresh(id) {
  try {
    await fetch(`https://example.com/api/items/${id}`, {
      method: "DELETE"
    });

    const newListRes = await fetch("https://example.com/api/items");
    const updatedList = await newListRes.json();

    console.log("✔ Updated List:", updatedList);
  } catch (err) {
    console.log("❌ Delete Error:", err);
  }
}

// استخدام:
// deleteItemAndRefresh(3);

// ===============================
// جاهز يا معلم ✨🔥
// لو عايزهم React Components بدل JS قولي
// أو لو عايز أحولهم مشاريع جاهزة أرفعهملك ZIP
// ===============================

