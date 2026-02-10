// قائمة المواقع المسموح لها باستخدام القالب
var allowedDomains = [
    "your-blog.blogspot.com",  // رابط مدونتك للتجربة
    "client1.com",             // رابط العميل الأول
    "client2.blogspot.com"     // رابط العميل الثاني
];

// الحصول على رابط الموقع الحالي الذي يعمل عليه القالب
var currentDomain = window.location.hostname;

// التحقق: هل الرابط الحالي موجود في القائمة؟
var isAllowed = false;
for (var i = 0; i < allowedDomains.length; i++) {
    if (currentDomain.includes(allowedDomains[i])) {
        isAllowed = true;
        break;
    }
}

// إذا لم يكن مسموحاً له
if (!isAllowed) {
    // إخفاء محتوى الموقع بالكامل
    document.querySelector("html").innerHTML = "";
    
    // إظهار رسالة تحذير
    alert("عفواً، هذا القالب غير مفعل لهذا النطاق. يرجى شراء النسخة الأصلية.");
    
    // تحويله لصفحة الشراء الخاصة بك (غير الرابط التالي لرابط صفحتك)
    window.location.href = "https://facebook.com/your-page"; 
}
