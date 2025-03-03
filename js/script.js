document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        // Kiểm tra xem liên kết có trỏ đến một phần tử trong trang hay không
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault(); // Chỉ ngăn chặn hành vi mặc định nếu là liên kết nội bộ
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth', // Hiệu ứng cuộn mượt
                block: 'start' // Căn lên đầu trang
            });
        }
        // Nếu không phải liên kết nội bộ, để trình duyệt chuyển trang bình thường
    });
});

// Hiệu ứng khi di chuột qua nút
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)'; // Phóng to nút
        this.style.transition = 'transform 0.3s ease';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)'; // Trả về kích thước ban đầu
    });
});

// Hiệu ứng khi nhấp vào nút
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        this.style.backgroundColor = '#0056b3'; // Đổi màu nền khi nhấp
        setTimeout(() => {
            this.style.backgroundColor = '#007BFF'; // Trả về màu ban đầu sau 0.3s
        }, 300);
    });
});