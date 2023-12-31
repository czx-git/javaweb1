// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // 阻止表单提交默认行为
//     var username = document.getElementById("Username").value;
//     var password = document.getElementById("Password").value;
//     // 进行登录逻辑处理，例如发送请求到后端验证用户信息
//     console.log("登录信息：", username, password);
// });

// document.getElementById("registerForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // 阻止表单提交默认行为
//     var username = document.getElementById("registerUsername").value;
//     var password = document.getElementById("registerPassword").value;
//     // 进行注册逻辑处理，例如将用户信息保存到数据库或进行其他操作
//     console.log("注册信息：", username, password);
// });



function validatePassword(password) {
    // 检查密码长度是否在8~16位之间
    // 使用正则表达式检查密码是否包含字母、数字、字符中的两种
    var regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    if (password.length < 8 || password.length > 16 && !regex.test(password)) {
        alert("密码长度必须在8~16位之间且必须包含字母、数字");
        return false;
        }
    return true;
}

function validateForm() {
    // 获取密码输入框的值
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // 验证密码是否符合要求
    if (!validatePassword(password)) {
        return false; // 阻止表单提交
    }
    // 表单验证通过，可以提交
    alert("登录成功")

    return true;
}

// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault(); // 阻止表单提交默认行为
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     // 发送登录请求和处理逻辑（使用Ajax或其他方法）
//     if (loginSuccess) {
//         // 登录成功，跳转到首页
//         window.location.href = 'index.html'; // 替换为你的首页URL
//     } else {
//         // 登录失败，显示错误消息或重新输入提示
//         alert('登录失败，请检查用户名和密码！');
//     }
// });