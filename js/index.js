var clickMeBtn = document.getElementById('clickMeBtn')
var resetBtn = document.getElementById('resetBtn')
var Mybody = document.getElementById('Mybody')
var content = document.getElementById("content");
// cho tag body màu nền đen 
Mybody.style.backgroundColor = '#000000'
// tìm hiểu thêm về random() 
clickMeBtn.addEventListener('click', function () {
    // The maximum value: FFFFFF 
    //In JavaScript, add 0x before a hexadecimal number
    var maxVal = 0xFFFFFF; // 0xFFFFFF === 16777215
    // hàm random này chạy từ 0 đến 0xFFFFFF hay 16777215
    var randomNumber = Math.floor(Math.random() * maxVal);
    // convert the floating number to an integer
     
    //convert integer to hex
    // chuyển số nguyên thành CHUỖI số hex ( hệ 16 )  
    var randomColor = randomNumber.toString(16);

    Mybody.style.backgroundColor = "#" + randomColor;
    Mybody.style.transition = '1s';
    // remove class none của reset button 
    resetBtn.classList.remove('none');
    content.style.justifyContent = "space-around"
})

resetBtn.addEventListener('click', function () {
    Mybody.style.backgroundColor = '#000000';
    Mybody.style.transition = '1s';
    resetBtn.classList.add('none');
    content.style.justifyContent = "center"
})