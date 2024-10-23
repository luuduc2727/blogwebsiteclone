document.querySelectorAll('.post-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn không cho trình duyệt chuyển hướng
        const postId = this.dataset.id; // Lấy ID từ thuộc tính data-id
        // Gọi API để lấy thông tin bài viết theo ID
        fetch(`/posts/${postId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Chuyển đổi dữ liệu sang JSON
            })
            .then(post => {
                // Điều hướng đến trang mới và hiển thị nội dung bài viết
                window.location.href = `/post/${postId}`; // Chuyển hướng đến URL có ID bài viết
            })
            .catch(err => console.error('Error fetching post:', err));
    });
});
