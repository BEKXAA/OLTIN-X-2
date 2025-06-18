// Foydalanuvchi ma'lumotlarini saqlash
let currentUser = null;

// Bo'limlarni ko'rsatish
function showSection(id) {
  document.querySelectorAll(".section").forEach(section => {
    section.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

// Kirish funksiyasi
function login() {
  const nick = document.getElementById("loginNick").value.trim();
  const pass = document.getElementById("loginPass").value.trim();
  if (!nick || !pass) return alert("Iltimos, nickname va parol kiriting!");

  let users = JSON.parse(localStorage.getItem("users") || "{}");

  // Yangi foydalanuvchi qo‘shish
  if (!users[nick]) {
    users[nick] = { password: pass, balance: 0 };
  } else if (users[nick].password !== pass) {
    return alert("Parol noto‘g‘ri!");
  }

  currentUser = nick;
  localStorage.setItem("users", JSON.stringify(users));
  alert("Muvaffaqiyatli kirildi!");

  updateProfile();
  showSection("profile");
}

// Profilni yangilash
function updateProfile() {
  if (!currentUser) return;
  const users = JSON.parse(localStorage.getItem("users"));
  document.getElementById("profileName").innerText = currentUser;
  document.getElementById("profileBalance").innerText = users[currentUser].balance;
}

// Admindan coin yuborish
function sendCoins() {
  const admin = currentUser;
  const adminUsers = ["Behruz", "Maga"];

if (!adminUsers.includes(admin)) {
  return alert("Faqat admin kirishi mumkin!");
}

  

  const nick = document.getElementById("adminNick").value.trim();
  const amount = parseInt(document.getElementById("adminAmount").value);

  if (!nick || isNaN(amount) || amount <= 0) return alert("To‘g‘ri nickname va miqdor kiriting!");

  let users = JSON.parse(localStorage.getItem("users") || "{}");

  if (!users[nick]) return alert("Bunday foydalanuvchi mavjud emas!");

  users[nick].balance += amount;
  localStorage.setItem("users", JSON.stringify(users));
  alert(`${nick} foydalanuvchisiga ${amount} coin yuborildi!`);
  updateProfile();
}

// Admindan coin yechib olish
function removeCoins() {
  const admin = currentUser;
  if (admin !== "Behruz") return alert("Faqat admin kirishi mumkin!");

  const nick = document.getElementById("adminNick").value.trim();
  const amount = parseInt(document.getElementById("adminAmount").value);

  if (!nick || isNaN(amount) || amount <= 0) return alert("To‘g‘ri nickname va miqdor kiriting!");

  let users = JSON.parse(localStorage.getItem("users") || "{}");

  if (!users[nick]) return alert("Bunday foydalanuvchi mavjud emas!");

  users[nick].balance = Math.max(0, users[nick].balance - amount);
  localStorage.setItem("users", JSON.stringify(users));
  alert(`${nick} foydalanuvchisidan ${amount} coin olib tashlandi!`);
  updateProfile();
}

// Keyslar ro'yxati (internetdan rasm bilan)
const keys = [
  { name: "Game Case", image: "https://cdn.bulldrop.vip/media/cases/CS2_CompClub_vipka.png", min: 500, max: 2000 },
  { name: "Neymar", image: "https://cdn.bulldrop.vip/media/cases/BD_NEYMAR.png", min: 500, max: 1000 },
  { name: "Somsa", image: "https://cdn.bulldrop.vip/media/cases/NEW_BD_SAMSA.png", min: 10, max: 5000 },
  { name: "Mbappe", image: "https://cdn.bulldrop.vip/media/cases/BD_MBAPPE.png", min: 100, max: 5000 },
  { name: "Messi", image: "https://cdn.bulldrop.vip/media/cases/BD_MESSI.png", min: 10, max: 5000 },
  { name: "Somsa", image: "https://cdn.bulldrop.vip/media/cases/NEW_BD_SAMSA.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Asalka", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKh_o91CYFwDTd4WBcNPiF2sS0i140t5l--g&s", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "M4", image: "https://cdn.bulldrop.vip/media/cases/CS2_Wear_FACTORY%20NEW.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "G22", image: "https://cdn.bulldrop.vip/media/cases/CS2_Wear_Battle-Scarred.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKh_o91CYFwDTd4WBcNPiF2sS0i140t5l--g&s", min: 10, max: 5000 },
  { name: "Asalka", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Asalka", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKh_o91CYFwDTd4WBcNPiF2sS0i140t5l--g&s", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "BMW", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnjsk0j1HRhGg5MbDymd2Hz9VZlUoo36gSQ&s", min: 1000, max: 50000 },
  { name: "BMW", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnjsk0j1HRhGg5MbDymd2Hz9VZlUoo36gSQ&s", min: 1000, max: 50000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "G22", image: "https://cdn.bulldrop.vip/media/cases/CS2_Wear_Battle-Scarred.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://cdn.bulldrop.vip/media/cases/CS2_WeaponStorage_AK47.png", min: 10, max: 5000 },
  { name: "Megoladon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5HaQo06gDrq6PEj_-VDg1oaWko4nlpGq8w&s", min: 10, max: 5000 },
  { name: "Ak-47", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXhR7EoFKcGO6hrAQnpK3S6e6mmyGuCXKVW6oiZ9kVtSJiMsFtaEOHiLYG_mCgKBdoG3U&usqp=CAU", min: 10, max: 5000 },
  { name: "Pichoqlar", image: "https://cdn.bulldrop.vip/media/cases/CS2_PlayersChoice_allornot.png", min: 10, max: 5000 },
];


function createKeys() {
  const container = document.getElementById("keysContainer");
  keys.forEach(key => {
    const el = document.createElement("div");
    el.className = "key";
    el.innerHTML = `
      <img src="${key.image}" alt="${key.name}">
      <span>${key.name}</span>
    `;
    el.onclick = () => openKey(key);
    container.appendChild(el);
  });
}

function openKey(key) {
  if (!currentUser) return alert("Avval login qiling!");
  const reward = Math.floor(Math.random() * (key.max - key.min + 1)) + key.min;

  let users = JSON.parse(localStorage.getItem("users"));
  users[currentUser].balance += reward;
  localStorage.setItem("users", JSON.stringify(users));
  alert(`${key.name} ochildi! Siz ${reward} 🪙 yutdingiz.`);
  updateProfile();
}

// Dastlabki yuklash
window.onload = () => {
  createKeys();
  showSection("login");
};







