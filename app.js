function showAlert(message) {
    alert(`Notice: ${message}`);
}

const features = {
    'search-job': 'Tính năng tìm kiếm việc đang được phát triển!',
    'manage-profile': 'Tính năng quản lý hồ sơ đang được phát triển!',
    'connect-employers': 'Tính năng kết nối với nhà tuyển dụng đang được phát triển!',
    'discussion-forum': 'Tính năng diễn đàn thảo luận đang được phát triển!',
    'resources': 'Tính năng tài nguyên học tập đang được phát triển!'
};

Object.keys(features).forEach(key => {
    document.getElementById(key).addEventListener('click', function() {
        showAlert(features[key]);
    });
});