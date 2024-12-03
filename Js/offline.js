function showContent(type) {
    document.querySelectorAll('.course-toggle-btn').forEach(btn => {
        btn.classList.remove('active');
    });
        document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });
        document.querySelector(`button[onclick="showContent('${type}')"]`).classList.add('active');
        document.getElementById(`${type}-content`).classList.add('active');
}