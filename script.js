function hienThiForm(formId) {
    var form = document.getElementById(formId);
    form.style.display = "block"; // Hiển thị form được truyền vào
}

function anForm(formId) {
    var form = document.getElementById(formId);
    form.style.display = "none"; // Ẩn form được truyền vào
}

function guiForm(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút "Gửi"

    // Thực hiện xử lý dữ liệu ở đây (nếu cần)

    // Sau khi xử lý xong, bạn có thể đóng form
    anForm('createPost');
}
