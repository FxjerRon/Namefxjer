let db;

// เปิดหรือสร้างฐานข้อมูล
const request = indexedDB.open('myDatabase', 1);

request.onerror = function(event) {
  console.log("Database error: " + event.target.errorCode);
};

request.onupgradeneeded = function(event) {
  db = event.target.result;
  
  // สร้าง Object Store
  const objectStore = db.createObjectStore('customers', { keyPath: 'id' });
  
  // เพิ่ม Indexes ต่างๆ
  objectStore.createIndex('name', 'name', { unique: false });
  objectStore.createIndex('email', 'email', { unique: true });
};

request.onsuccess = function(event) {
  db = event.target.result;
  // ใช้ db เพื่อทำงานกับฐานข้อมูล เช่น เพิ่มข้อมูล, อ่านข้อมูล, ลบข้อมูล, แก้ไขข้อมูล
};