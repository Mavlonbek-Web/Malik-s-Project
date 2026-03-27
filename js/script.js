// Sahifa to'liq yuklangandan keyin ishlaydi
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. "Order Now" tugmasini bosganda xabar chiqarish
    const alertBtn = document.getElementById('alertBtn');
    if(alertBtn) {
        alertBtn.addEventListener('click', () => {
            alert("Rahmat! Sizning buyurtmangiz qabul qilinmoqda... 🚚");
        });
    }

    // 2. Navigatsiya menyulariga bosilganda "active" klassini almashtirish
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Avvalgi active klassini o'chirish
            document.querySelector('.nav-item.active').classList.remove('active');
            // Bosilganiga active qo'shish
            this.classList.add('active');
            
            console.log(this.innerText + " bo'limiga o'tildi.");
        });
    });

    // 3. Sidebar elementlariga effekt berish
    const sidebars = document.querySelectorAll('.quick-link');
    sidebars.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.boxShadow = "inset 0 0 20px rgba(0,0,0,0.2)";
        });
        link.addEventListener('mouseout', () => {
            link.style.boxShadow = "none";
        });
    });
});


fetch("/api/salom")
  .then(res => res.json())
  .then(data => {
    console.log(data.message); // "Salom frontend!"
  });
