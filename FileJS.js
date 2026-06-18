// ================= DANH SÁCH DỮ LIỆU SÁCH =================
const mangSach = [
    // ================= THỂ LOẠI 1: VĂN HỌC (van-hoc) =================
    { id: 1, title: 'Nhà Giả Kim', author: 'Paulo Coelho', price: 79000, category: 'van-hoc', img: 'https://www.fahasa.com/blog/wp-content/uploads/2024/12/nha-gia-kim.jpg' },
    { id: 2, title: 'Số Đỏ', author: 'Vũ Trọng Phụng', price: 68000, category: 'van-hoc', img: 'https://down-vn.img.susercontent.com/file/923a128a105332523dd17e2ebdf01f18' },
    { id: 3, title: 'Rừng Na Uy', author: 'Haruki Murakami', price: 125000, category: 'van-hoc', img: 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935235242425.jpg' },
    { id: 4, title: 'Chúa Tể Những Chiếc Nhẫn', author: 'J.R.R. Tolkien', price: 250000, category: 'van-hoc', img: 'https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_14861.jpg' },
    { id: 5, title: 'Bắt Trẻ Đồng Xanh', author: 'J. D. Salinger', price: 85000, category: 'van-hoc', img: 'https://upload.wikimedia.org/wikipedia/vi/b/b7/B%E1%BA%AFt_tr%E1%BA%BB_%C4%91%E1%BB%93ng_xanh%28s%C3%A1ch%29.jpg' },
    { id: 6, title: 'Kiêu Hãnh Và Định Kiến', author: 'Jane Austen', price: 110000, category: 'van-hoc', img: 'https://cdn1.fahasa.com/media/catalog/product/k/h/khvdk1.jpg' },
    { id: 7, title: 'Ông Già Và Biển Cả', author: 'Ernest Hemingway', price: 52000, category: 'van-hoc', img: 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935236434249.jpg' },
    { id: 8, title: 'Trăm Năm Cô Đơn', author: 'Gabriel García Márquez', price: 165000, category: 'van-hoc', img: 'https://pos.nvncdn.com/fd5775-40602/ps/20240516_7O36vNSb2Q.png?v=1715842249' },
    { id: 9, title: 'Tắt Đèn', author: 'Ngô Tất Tố', price: 45000, category: 'van-hoc', img: 'https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_39597.jpg' },
    { id: 10, title: 'Chí Phèo', author: 'Nam Cao', price: 48000, category: 'van-hoc', img: 'https://cdn1.fahasa.com/media/catalog/product/v/n/vn-11134207-7ra0g-m6nr4tgwi1k706_1.jpg' },

    // ================= THỂ LOẠI 2: TRUYỆN TRANH (truyen-tranh) =================
    { id: 11, title: 'One Piece - Tập 100', author: 'Eiichiro Oda', price: 30000, category: 'truyen-tranh', img: 'https://cdn1.fahasa.com/media/catalog/product/o/n/one-piece---tap-100---bia-r_i-_-obi.jpg' },
    { id: 12, title: 'Hunter x Hunter - Tập 1', author: 'Yoshihiro Togashi', price: 30000, category: 'truyen-tranh', img: 'https://dilib.vn/img/news/2024/06/larger/15833-tho-san-hunter-x-hunter-1.webp?v=7953' },
    { id: 13, title: 'Naruto - Tập 72', author: 'Masashi Kishimoto', price: 30000, category: 'truyen-tranh', img: 'https://pictures.abebooks.com/isbn/9788483573006-us.jpg' },
    { id: 14, title: 'Thám Tử Lừng Danh Conan - Tập 103', author: 'Gosho Aoyama', price: 30000, category: 'truyen-tranh', img: 'https://cdn1.fahasa.com/media/catalog/product/9/7/9784098520268.jpg' },
    { id: 15, title: 'Doraemon Ngắn - Tập 1', author: 'Fujiko F. Fujio', price: 25000, category: 'truyen-tranh', img: 'https://img.websosanh.vn/v2/users/wss/images/doraemon-truyen-ngan-tap-1/413f856e66644.jpg' },
    { id: 16, title: 'Dragon Ball - Tập 42', author: 'Akira Toriyama', price: 30000, category: 'truyen-tranh', img: 'https://cdn1.fahasa.com/media/catalog/product/d/r/dragon-ball_tap-42_tb-2025.jpg' },
    { id: 17, title: 'Attack on Titan - Tập 34', author: 'Hajime Isayama', price: 40000, category: 'truyen-tranh', img: 'https://cdn1.fahasa.com/media/catalog/product/a/t/attack_on_titan_34_english_edition_1_2023_09_21_16_00_44.jpg' },
    { id: 18, title: 'Demon Slayer - Tập 23', author: 'Koyoharu Gotouge', price: 35000, category: 'truyen-tranh', img: 'https://static.fnac-static.com/multimedia/PE/Images/FR/NR/de/67/d8/14182366/1540-1/tsp20251125080706/Demon-Slayer-T23.jpg' },
    { id: 19, title: 'Jujutsu Kaisen - Tập 20', author: 'Gege Akutami', price: 35000, category: 'truyen-tranh', img: 'https://cdn1.fahasa.com/media/catalog/product/9/7/9784088832012.jpg' },
    { id: 20, title: 'Bleach - Tập 74', author: 'Tite Kubo', price: 30000, category: 'truyen-tranh', img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3c9v0j9hi94c0' },

    // ================= THỂ LOẠI 3: THIẾU NHI (thieu-nhi) =================
    { id: 21, title: 'Dế Mèn Phiêu Lưu Ký', author: 'Tô Hoài', price: 55000, category: 'thieu-nhi', img: 'https://www.netabooks.vn/Data/Sites/1/Product/31071/de-men-phieu-luu-ky-1.jpg' },
    { id: 22, title: 'Kính Vạn Hoa', author: 'Nguyễn Nhật Ánh', price: 95000, category: 'thieu-nhi', img: 'https://www.netabooks.vn/Data/Sites/1/Product/47493/kinh-van-hoa-tap-6-ki-niem-65-nam-nxb-kim-dong-bia-cung.jpg' },
    { id: 23, title: 'Hoàng Tử Bé', author: 'Antoine de Saint-Exupéry', price: 65000, category: 'thieu-nhi', img: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/576/749/products/hoang-tu-be-tb-2022-6e3dfd01ace949c6b114186402117726-5f8abf11a050414eb4996caabc94e49a.jpg?v=1760792123947' },
    { id: 24, title: 'Chuyện Con Mèo Dạy Hải Âu Bay', author: 'Luis Sepúlveda', price: 49000, category: 'thieu-nhi', img: 'https://www.fahasa.com/blog/wp-content/uploads/2025/04/Screenshot-2025-04-10-134607.png' },
    { id: 25, title: 'Totto-chan Bên Cửa Sổ', author: 'Kuroyanagi Tetsuko', price: 98000, category: 'thieu-nhi', img: 'https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/052024/z5382052575312_b21c976817e14ec93c131e87dddc3dd7_20240523191338_20240524160319.jpg' },
    { id: 26, title: 'Không Gia Đình', author: 'Hector Malot', price: 135000, category: 'thieu-nhi', img: 'https://cdn1.fahasa.com/media/catalog/product/9/7/9786049766046.jpg' },
    { id: 27, title: 'Pippi Tất Dài', author: 'Astrid Lindgren', price: 75000, category: 'thieu-nhi', img: 'https://www.netabooks.vn/Data/Sites/1/Product/6525/thumbs/1.jpg' },
    { id: 28, title: 'Bác Sĩ Dolittle', author: 'Hugh Lofting', price: 60000, category: 'thieu-nhi', img: 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935244877144.jpg' },
    { id: 29, title: 'Heidi - Cô Bé Ở Vùng Núi Alps', author: 'Johanna Spyri', price: 80000, category: 'thieu-nhi', img: 'https://file.hstatic.net/1000328521/file/photo_2020-06-04_11-15-38_787b2c8f076643ed8998e2e056bf9eae_grande.jpg' },
    { id: 30, title: 'Gió Qua Rặng Liễu', author: 'Kenneth Grahame', price: 88000, category: 'thieu-nhi', img: 'https://dinhtibooks.com.vn/images/products/large/900x900_602868d7ac7c45948fdcc5b23fa812d3.webp' },

    // ================= THỂ LOẠI 4: KHOA HỌC (khoa-hoc) =================
    { id: 31, title: 'Vũ Trụ (Cosmos)', author: 'Carl Sagan', price: 145000, category: 'khoa-hoc', img: 'https://www.netabooks.vn/Data/Sites/1/Product/687/thumbs/vu-tru-carl-sagan.jpg' },
    { id: 32, title: 'Lược Sử Thời Gian', author: 'Stephen Hawking', price: 115000, category: 'khoa-hoc', img: 'https://cdn1.fahasa.com/media/catalog/product/8/9/8934974179238.jpg' },
    { id: 33, title: 'Tự Nhiên Và Khám Phá', author: 'Đội ngũ Khoa Học', price: 180000, category: 'khoa-hoc', img: 'https://pos.nvncdn.com/fd5775-40602/ps/20210113_VqhfPkirnYiLy9qGH5FzA70f.png?v=1673774094' },
    { id: 34, title: 'Gen - Lược Sử Mật Mã Sự Sống', author: 'Siddhartha Mukherjee', price: 210000, category: 'khoa-hoc', img: 'https://baocantho.com.vn/image/fckeditor/upload/2018/20180614/images/mat-ma-su-song-sggp_wxwg.jpg' },
    { id: 35, title: 'Nguồn Gốc Các Loài', author: 'Charles Darwin', price: 155000, category: 'khoa-hoc', img: 'https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_31026.jpg' },
    { id: 36, title: 'Thế Giới Bị Quỷ Ám', author: 'Carl Sagan', price: 130000, category: 'khoa-hoc', img: 'https://www.netabooks.vn/Data/Sites/1/Product/37467/the-gioi-bi-quy-am.jpg' },
    { id: 37, title: 'Lược Sử Loài Người', author: 'Yuval Noah Harari', price: 195000, category: 'khoa-hoc', img: 'https://pos.nvncdn.com/fd5775-40602/ps/content/20240108_GXuwBhSP.jpg' },
    { id: 38, title: 'Vật Lý Và Cuộc Sống', author: 'Nhiều Tác Giả', price: 90000, category: 'khoa-hoc', img: 'https://images.nxbbachkhoa.vn/Picture/2024/4/2/image-20240402152927303.jpg' },
    { id: 39, title: 'Hóa Học Cơ Bản', author: 'Đội Ngũ Sư Phạm', price: 85000, category: 'khoa-hoc', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYKlih5j7ZM-aKLqtTXFblCe_PlfZxGAURLQ&s' },
    { id: 40, title: 'Toán Học Vui', author: 'Raymond Smullyan', price: 75000, category: 'khoa-hoc', img: 'https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_18071.jpg' },

    // ================= THỂ LOẠI 5: KỸ NĂNG SỐNG (ky-nang) =================
    { id: 41, title: 'Tuổi Trẻ Đáng Giá Bao Nhiêu', author: 'Rosie Nguyễn', price: 72000, category: 'ky-nang', img: 'https://cdn1.fahasa.com/media/catalog/product/i/m/image_239651.jpg' },
    { id: 42, title: 'Đắc Nhân Tâm', author: 'Dale Carnegie', price: 86000, category: 'ky-nang', img: 'https://cdn1.fahasa.com/media/catalog/product/d/n/dntttttuntitled.jpg' },
    { id: 43, title: 'Hạt Giống Tâm Hồn', author: 'Jack Canfield', price: 65000, category: 'ky-nang', img: 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935086857434.jpg' },
    { id: 44, title: 'Khéo Ăn Nói Sẽ Có Được Thiên Hạ', author: 'Trác Nhã', price: 92000, category: 'ky-nang', img: 'https://product.hstatic.net/1000237375/product/bia_truoc_a9b8aae54aa645d4b28e8a3c148e6810.png' },
    { id: 45, title: 'Đời Thay Đổi Khi Chúng Ta Thay Đổi', author: 'Andrew Matthews', price: 78000, category: 'ky-nang', img: 'https://giadinh.phenikaa.com/wp-content/uploads/2023/05/doi-thay-doi-khi-chung-ta-thay-doi-2.jpg' },
    { id: 46, title: 'Tư Duy Nhanh Và Chậm', author: 'Daniel Kahneman', price: 148000, category: 'ky-nang', img: 'https://cdn1.fahasa.com/media/catalog/product/i/m/image_230367.jpg' },
    { id: 47, title: 'Búp Hạt Dẻ', author: 'Nhiều Tác Giả', price: 50000, category: 'ky-nang', img: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/576/749/products/tac-pham-chon-loc-van-hoc-duc-kep-hat-de-bia-3b239f3412964a1eab115623e6b1a8d4.jpg?v=1760788079710' },
    { id: 48, title: '7 Thói Quen Để Thành Đạt', author: 'Stephen R. Covey', price: 125000, category: 'ky-nang', img: 'https://dilib.vn/img/news/2022/09/larger/572-7-thoi-quen-de-thanh-dat-1.webp?v=6058' },
    { id: 49, title: 'Nhà Lãnh Đạo Không Chức Danh', author: 'Robin Sharma', price: 95000, category: 'ky-nang', img: 'https://www.netabooks.vn/Data/Sites/1/media/sach/nha-lanh-dao-khong-chuc-danh/nha-lanh-dao-khong-chuc-danh-diem-sach-1.jpg' },
    { id: 50, title: 'Thức Tỉnh Mục Đích Sống', author: 'Eckhart Tolle', price: 110000, category: 'ky-nang', img: 'https://thuviennhadat.com.vn/storage/tin-tuc/review-thuc-tinh-muc-dich-song/review-thuc-tinh-muc-dich-song-min.jpg' }
];

// ================= BIẾN TOÀN CỤC KHỞI TẠO =================
let danhSachTaiKhoan = JSON.parse(localStorage.getItem('danhSachTaiKhoan')) || [{ username: 'admin', password: '123' }];
let taiKhoanHienTai = localStorage.getItem('taiKhoanHienTai') || null;

let gioHang = [];
let theLoaiHienTai = 'all';
let tuKhoaTimKiem = '';

// ================= SỰ KIỆN KHI TẢI XONG TRANG =================
window.addEventListener('DOMContentLoaded', () => {
    hienThiDanhSachSach();
    kiemTraTrangThaiDangNhapCu();
});

// Hàm hỗ trợ cập nhật giao diện Thành viên (Đã tối ưu tránh trùng code)
function capNhatGiaoDienThanhVien(username) {
    const vungThanhVien = document.getElementById('vungThanhVien');
    if (!vungThanhVien) return;

    if (username) {
        vungThanhVien.innerHTML = `
            <span class="ten-user-da-dn"><i class="fa-solid fa-user-check"></i> ${username}</span>
            <button class="nut-dang-xuat" onclick="xuLyDangXuat()">Đăng xuất</button>
        `;
    } else {
        vungThanhVien.innerHTML = `
            <button class="nut-header-phu" onclick="hienThiKhungDangKy()">Đăng ký</button>
            <button class="nut-header-chinh" onclick="hienThiKhungDangNhap()">Đăng nhập</button>
        `;
    }
}

function kiemTraTrangThaiDangNhapCu() {
    if (taiKhoanHienTai) {
        capNhatGiaoDienThanhVien(taiKhoanHienTai);
    }
}

// ================= LOGIC HIỂN THỊ CỬA HÀNG SÁCH =================
function hienThiDanhSachSach() {
    const luoiSach = document.getElementById('khungLuoiSach'); 
    if (!luoiSach) return;
    luoiSach.innerHTML = '';

    const danhSachLoc = mangSach.filter(sach => {
        const dungTheLoai = (theLoaiHienTai === 'all' || sach.category === theLoaiHienTai);
        const dungTuKhoa = sach.title.toLowerCase().includes(tuKhoaTimKiem.toLowerCase());
        return dungTheLoai && dungTuKhoa;
    });

    document.getElementById('nhanSoLuong').innerText = `Hiển thị: ${danhSachLoc.length} cuốn sách`; 

    danhSachLoc.forEach(sach => {
        const theSach = document.createElement('div');
        theSach.className = 'the-sach';
        theSach.innerHTML = `
            <img src="${sach.img}" alt="${sach.title}">
            <div class="thong-tin">
                <h4>${sach.title}</h4>
                <p>Tác giả: ${sach.author}</p>
                <div class="gia">${sach.price.toLocaleString('vi-VN')}đ</div>
                <button onclick="themVaoGio(${sach.id})">Thêm vào giỏ</button>
            </div>
        `;
        luoiSach.appendChild(theSach);
    });
}

function locTheLoai(theLoai, element) {
    theLoaiHienTai = theLoai;
    document.querySelectorAll('.nut-loc').forEach(nut => nut.classList.remove('kich-hoat'));
    element.classList.add('kich-hoat');
    hienThiDanhSachSach();
}

function timKiemSach() {
    tuKhoaTimKiem = document.getElementById('oNhapTimKiem').value.trim();
    hienThiDanhSachSach();
}

// ================= LOGIC ĐĂNG KÝ / ĐĂNG NHẬP / ĐĂNG XUẤT =================
function hienThiKhungDangKy() {
    document.getElementById('cuaSoGioHangNho').classList.add('an-di');
    document.getElementById('khungDangKy').classList.toggle('an-di');
    document.getElementById('khungDangNhap').classList.add('an-di');
}

function hienThiKhungDangNhap() {
    document.getElementById('cuaSoGioHangNho').classList.add('an-di');
    document.getElementById('khungDangNhap').classList.toggle('an-di');
    document.getElementById('khungDangKy').classList.add('an-di');
}

function xuLyDangKy() {
    const userEle = document.getElementById('taiKhoanDK');
    const passEle = document.getElementById('matKhauDK');
    const rePassEle = document.getElementById('nhapLaiMatKhauDK');

    const user = userEle.value.trim();
    const pass = passEle.value;
    const rePass = rePassEle.value;

    if (!user || !pass || !rePass) {
        alert("Vui lòng điền đủ thông tin!");
        return;
    }
    if (pass !== rePass) {
        alert("Mật khẩu nhập lại không chính xác!");
        return;
    }
    if (danhSachTaiKhoan.find(tk => tk.username === user)) {
        alert("Tài khoản đã tồn tại!");
        return;
    }

    danhSachTaiKhoan.push({ username: user, password: pass });
    localStorage.setItem('danhSachTaiKhoan', JSON.stringify(danhSachTaiKhoan));

    alert("🎉 Đăng ký thành công! Giờ bạn có thể đăng nhập.");
    
    userEle.value = '';
    passEle.value = '';
    rePassEle.value = '';
    hienThiKhungDangKy();
}

function xuLyDangNhap() {
    const userEle = document.getElementById('taiKhoanDN');
    const passEle = document.getElementById('matKhauDN');
    
    const user = userEle.value.trim();
    const pass = passEle.value;

    const hopLe = danhSachTaiKhoan.find(tk => tk.username === user && tk.password === pass);

    if (hopLe) {
        taiKhoanHienTai = user;
        localStorage.setItem('taiKhoanHienTai', user);

        alert(`Xin chào ${user}, bạn đã đăng nhập thành công!`);
        capNhatGiaoDienThanhVien(user);
        
        document.getElementById('khungDangNhap').classList.add('an-di');
        userEle.value = '';
        passEle.value = '';
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
}

function xuLyDangXuat() {
    taiKhoanHienTai = null;
    gioHang = []; 
    lamMoiGiaoDienGioHang();
    
    localStorage.removeItem('taiKhoanHienTai');
    document.getElementById('cuaSoGioHangNho').classList.add('an-di');
    dongKhungThanhToan();

    capNhatGiaoDienThanhVien(null);
    alert("Đã đăng xuất tài khoản!");
}

// ================= LOGIC QUẢN LÝ GIỎ HÀNG =================
function themVaoGio(idSach) {
    if (taiKhoanHienTai === null) {
        alert("⚠️ Bạn phải ĐĂNG NHẬP tài khoản trước khi thực hiện thêm sách vào giỏ hàng!");
        hienThiKhungDangNhap(); 
        return;
    }

    const sachCanTim = mangSach.find(s => s.id === idSach);
    const monHangTrongGio = gioHang.find(item => item.sach.id === idSach);

    if (monHangTrongGio) {
        monHangTrongGio.soLuong += 1;
    } else {
        gioHang.push({ sach: sachCanTim, soLuong: 1 });
    }

    lamMoiGiaoDienGioHang();
}

function moDongGioHangNho() {
    document.getElementById('khungDangKy').classList.add('an-di');
    document.getElementById('khungDangNhap').classList.add('an-di');

    const cuaSoGioHang = document.getElementById('cuaSoGioHangNho');
    if (cuaSoGioHang.classList.contains('an-di')) {
        lamMoiGiaoDienGioHang();
        cuaSoGioHang.classList.remove('an-di');
    } else {
        cuaSoGioHang.classList.add('an-di');
    }
}

function lamMoiGiaoDienGioHang() {
    veGioHangNho();
    capNhatSoDemGioHang();
}

function capNhatSoDemGioHang() {
    const tongSL = gioHang.reduce((tong, item) => tong + item.soLuong, 0);
    const oSoDem = document.getElementById('soDemGioHang');
    if (oSoDem) {
        oSoDem.innerText = tongSL;
        oSoDem.classList.remove('hieu-ung-nay-so'); 
        void oSoDem.offsetWidth; 
        oSoDem.classList.add('hieu-ung-nay-so'); 
    }
}

function tinhTongTien() {
    return gioHang.reduce((tong, item) => tong + (item.sach.price * item.soLuong), 0);
}

function veGioHangNho() {
    const container = document.getElementById('danhSachMonHangNho');
    const oTongTien = document.getElementById('tongTienGioHangNho');
    const nutThanhToan = document.querySelector('.nut-di-den-thanh-toan');
    if (!container) return;
    container.innerHTML = '';

    if (gioHang.length === 0) {
        container.innerHTML = '<p class="text-trong">Giỏ hàng trống.</p>';
        if (oTongTien) oTongTien.innerText = '0đ';
        if (nutThanhToan) nutThanhToan.classList.add('an-di'); 
        return;
    }

    if (nutThanhToan) nutThanhToan.classList.remove('an-di'); 

    gioHang.forEach(item => {
        const itemHtml = document.createElement('div');
        itemHtml.className = 'mon-hang-nho';
        const tongTienMon = item.sach.price * item.soLuong;
        
        itemHtml.innerHTML = `
            <div class="chi-tiet-mon">
                <span><strong>${item.sach.title}</strong></span>
                <small>${item.sach.price.toLocaleString('vi-VN')}đ</small>
                <small class="chu-thich-tong-mon">Tổng: ${tongTienMon.toLocaleString('vi-VN')}đ</small>
            </div>
            
            <div class="cum-tang-giam">
                <button class="nut-tang-giam tru" onclick="giamSoLuong(${item.sach.id})">-</button>
                <span class="so-luong-hien-tai">${item.soLuong}</span>
                <button class="nut-tang-giam cong" onclick="tangSoLuong(${item.sach.id})">+</button>
            </div>
        `;
        container.appendChild(itemHtml);
    });

    if (oTongTien) oTongTien.innerText = tinhTongTien().toLocaleString('vi-VN') + 'đ';
}

// Hàm tăng số lượng khi bấm nút [+]
function tangSoLuong(idSach) {
    const monHang = gioHang.find(item => item.sach.id === idSach);
    if (monHang) {
        monHang.soLuong += 1;
        lamMoiGiaoDienGioHang();
    }
}

// Hàm giảm số lượng khi bấm nút [-] (Nếu giảm về 0 sẽ tự xóa khỏi giỏ)
function giamSoLuong(idSach) {
    const monHang = gioHang.find(item => item.sach.id === idSach);
    if (monHang) {
        monHang.soLuong -= 1;
        
        if (monHang.soLuong <= 0) {
            gioHang = gioHang.filter(item => item.sach.id !== idSach);
        }
        
        lamMoiGiaoDienGioHang();
        
        if (gioHang.length === 0) {
            dongKhungThanhToan();
        }
    }
}

// ================= LOGIC HỘP THOẠI THANH TOÁN =================
function moKhungThanhToanGiuaManHinh() {
    if (gioHang.length === 0) {
        alert("Giỏ hàng rỗng, không thể mở cổng thanh toán!");
        return;
    }
    document.getElementById('cuaSoGioHangNho').classList.add('an-di');
    document.getElementById('lopNenMo').classList.remove('an-di');
    document.getElementById('hopThanhToanGiuaMan').classList.remove('an-di');
    
    // Reset toàn bộ form nhập liệu về trạng thái trống ban đầu
    document.getElementById('tenNguoiNhan').value = '';
    document.getElementById('sdtNguoiNhan').value = '';
    document.getElementById('diaChiNhan').value = '';
    document.getElementById('phuongThucTT').value = 'cod';
    
    // Luôn ẩn vùng chứa ảnh QR và hiện lại nút Đặt hàng chính khi bắt đầu mở khung lên
    document.getElementById('vungChuaAnhQR').classList.add('an-di');
    document.getElementById('nutHanhDongChinh').classList.remove('an-di');
}

function dongKhungThanhToan() {
    document.getElementById('lopNenMo').classList.add('an-di');
    document.getElementById('hopThanhToanGiuaMan').classList.add('an-di');
}

function xuLyDatHang() {
    const ten = document.getElementById('tenNguoiNhan').value.trim();
    const sdt = document.getElementById('sdtNguoiNhan').value.trim();
    const diaChi = document.getElementById('diaChiNhan').value.trim();
    const phuongThuc = document.getElementById('phuongThucTT').value;

    if (!ten || !sdt || !diaChi) {
        alert("Vui lòng điền đầy đủ họ tên, SĐT và Địa chỉ nhận hàng!");
        return;
    }

    const sdtRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (!sdtRegex.test(sdt)) {
        alert("Số điện thoại không đúng định dạng!");
        return;
    }

    // TH 1: Thanh toán Tiền mặt (COD) -> Alert và kết thúc luôn
    if (phuongThuc === 'cod') {
        alert(`🎉 Đặt đơn hàng thành công (COD)!\nKhách hàng: ${ten}\nĐịa chỉ nhận: ${diaChi}\nTổng tiền: ${tinhTongTien().toLocaleString('vi-VN')}đ`);
        hoanThanhDonHang();
    } 
    // TH 2: Chuyển khoản (Banking) -> Sinh mã QR động và ẩn nút đặt hàng chính đi
// TH 2: Chuyển khoản (Banking) -> Sinh mã QR động và ẩn nút đặt hàng chính đi
    else if (phuongThuc === 'banking') {
        const tongTien = tinhTongTien();
        const MA_NGAN_HANG = 'MB';             
        const SO_TAI_KHOAN = '0866223089';   
        const NOI_DUNG = encodeURIComponent(`Thanh toan don hang user ${taiKhoanHienTai}`);

        const theAnhQR = document.getElementById('anhMaQR');
        theAnhQR.src = `https://img.vietqr.io/image/${MA_NGAN_HANG}-${SO_TAI_KHOAN}-compact2.png?amount=${tongTien}&addInfo=${NOI_DUNG}`;
        
        // HIỂN THỊ THÔNG TIN ĐỊA CHỈ, SĐT, TÊN KHI CHỌN CHUYỂN KHOẢN
        alert(`ℹ️ Thông tin thanh toán chuyển khoản:\nKhách hàng: ${ten}\nSố điện thoại: ${sdt}\nĐịa chỉ nhận: ${diaChi}\nTổng tiền: ${tongTien.toLocaleString('vi-VN')}đ\nVui lòng quét mã QR hiển thị trên màn hình để hoàn tất.`);

        // Hiện vùng quét mã QR chứa nút Xác nhận giao dịch mới lên
        document.getElementById('vungChuaAnhQR').classList.remove('an-di');
        // Ẩn nút "Xác Nhận Đặt Hàng" chính để bắt buộc tương tác nút hoàn tất chuyển khoản
        document.getElementById('nutHanhDongChinh').classList.add('an-di');
    }
}

// Xử lý khi người dùng bấm nút "Xác Nhận Đã Chuyển Khoản"
function hoanThanhChuyenKhoan() {
    const ten = document.getElementById('tenNguoiNhan').value.trim();
    alert(`🎉 Hệ thống đã ghi nhận thông tin!\nĐơn hàng của khách hàng [${ten}] đang được kiểm tra giao dịch và chuẩn bị đóng gói.`);
    hoanThanhDonHang();
}

// Dọn dẹp giỏ hàng, đóng modal
function hoanThanhDonHang() {
    gioHang = [];
    lamMoiGiaoDienGioHang();
    dongKhungThanhToan();
}
