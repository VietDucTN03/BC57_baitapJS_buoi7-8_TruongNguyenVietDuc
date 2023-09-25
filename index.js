var arrOutput = [];

document.getElementById("btn-add").onclick = function () {
  //input
  var input = +document.getElementById("input-number").value;
  //output: arrOutput
  //process:
  if (!isNaN(input)) {
    arrOutput.push(input); // Chuyển đổi giá trị thành số và thêm vào mảng
  } else {
    alert("Không được nhập chữ");
  }

  document.getElementById("array-number").innerHTML = arrOutput;
};

/**Bài 1: Tính tổng số dương */
document.getElementById("btn-tinh-tong").onclick = function () {
  //input: arrOutput
  //output:
  var Sum = 0;
  //process:
  for (var index = 0; index < arrOutput.length; index++) {
    if (arrOutput[index] > 0) {
      Sum = Sum + arrOutput[index];
    }
  }

  document.getElementById(
    "resultBai1"
  ).innerHTML = `<p class="bg-secondary text-white mt-2">Tổng các số dương được nhập: ${Sum}</p>`;
};

/**bài 2: Đếm các số dương */
document.getElementById("btn-dem-so-duong").onclick = function () {
  //input: arrOutput
  //output:
  var countPosNum = 0;
  //process:
  for (var index = 0; index < arrOutput.length; index++) {
    if (arrOutput[index] > 0) {
      countPosNum++;
    }
  }

  document.getElementById(
    "resultBai2"
  ).innerHTML = `<p class="bg-secondary text-white mt-2">Có: ${countPosNum} số dương được nhập!!</p>`;
};

/**Bài 3: Tìm số nhỏ nhất trong mảng */
document.getElementById("btn-smallest-number").onclick = function () {
  //input: arrOutput
  //output:
  var smallestNumber = arrOutput[0];

  //process:
  for (var index = 0; index < arrOutput.length; index++) {
    if (arrOutput[index] < smallestNumber) {
      smallestNumber = arrOutput[index];
    }
  }

  document.getElementById(
    "resultBai3"
  ).innerHTML = `<p class="bg-secondary text-white mt-2">Số nhỏ nhất trong mảng: ${smallestNumber}</p>`;
};

/**Bài 4: Tìm số dương nhỏ nhất trong mảng */
document.getElementById("btn-smallest-posi-num").onclick = function () {
  //input: arrOutput
  //output:
  var smallestPosiNumber = arrOutput[0];

  //process:
  for (var index = 0; index < arrOutput.length; index++) {
    if (arrOutput[index] > 0 && arrOutput[index] < smallestPosiNumber) {
      smallestPosiNumber = arrOutput[index];
    }
  }

  document.getElementById(
    "resultBai4"
  ).innerHTML = `<p class="bg-secondary text-white mt-2">Số dương nhỏ nhất trong mảng: ${smallestPosiNumber}</p>`;
};

/**Bài 5: Tìm số chẵn cuối cùng trong mảng */
document.getElementById("btn-lastEven-number").onclick = function () {
  //input: arrOutput
  //output:
  var lastEvenNumber = -1;

  //process:
  for (var index = arrOutput.length - 1; index >= 0; index--) {
    if (arrOutput[index] % 2 == 0) {
      lastEvenNumber = arrOutput[index];
      break;
    }
  }

  document.getElementById(
    "resultBai5"
  ).innerHTML = `<p class="bg-secondary text-white mt-2">Số chẵn cuối cùng là: ${lastEvenNumber}</p>`;
};

/**Bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí */
document.getElementById("btn-change-place").onclick = function () {
  //input: arrOutput
  var posiNumber1 = document.getElementById("posiNumber1").value;
  var posiNumber2 = document.getElementById("posiNumber2").value;
  //process;
  if (
    posiNumber1 >= 0 &&
    posiNumber1 < arrOutput.length &&
    posiNumber2 >= 0 &&
    posiNumber2 < arrOutput.length
  ) {
    // Đổi chỗ giá trị tại hai vị trí.
    var changePlaces1 = arrOutput[posiNumber1];
    arrOutput[posiNumber1] = arrOutput[posiNumber2];
    arrOutput[posiNumber2] = changePlaces1;
  }

  document.getElementById(
    "resultBai6"
  ).innerHTML = `<p class="bg-secondary text-white mt-2">Mảng sau khi đổi: ${arrOutput}</p>`;
};

/**bài 7: Sắp xếp mảng theo thứ tự tăng dần */
document.getElementById("btn-arrange").onclick = function () {
  //input: arrOutput
  //output:
  var ArrangeNumber = arrOutput[0];
  //process:
  for (var index = 0; index < arrOutput.length - 1; index++) {
    for (
      var indexChange = 0;
      indexChange < arrOutput.length - index - 1;
      indexChange++
    ) {
      if (arrOutput[indexChange] > arrOutput[indexChange + 1]) {
        var numberArrange = arrOutput[indexChange];
        arrOutput[indexChange] = arrOutput[indexChange + 1];
        arrOutput[indexChange + 1] = numberArrange;
      }
    }
  }

  document.getElementById(
    "resultBai7"
  ).innerHTML = `<p class="bg-secondary text-white mt-2">Mảng sau khi đổi: ${arrOutput}</p>`;
};

/**Bài 8: Tìm số nguyên tố đầu tiên trong mảng */
document.getElementById("btn-prime-number").onclick = function () {
  //input: arrOutput
  //output:
  var firstPrimeNumber = -1;
  //process:
  for (var index = 0; index < arrOutput.length; index++) {
    if (checkPrimeNumber(arrOutput[index])) {
      firstPrimeNumber = arrOutput[index];
      break; // Thoát khỏi vòng lặp khi tìm thấy số nguyên tố đầu tiên
    }
  }
  document.getElementById(
    "resultBai8"
  ).innerHTML = `<p class="bg-secondary text-white mt-2">Số nguyên tố đầu tiên: ${firstPrimeNumber}</p>`;
};

/**Bài 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên */
var arrOutputBai9 = [];

document.getElementById("btn-add-number").onclick = function () {
  //input
  var inputBai9 = +document.getElementById("inputNumberBai9").value;
  //output: arrOutputBai9
  //process:
  if (!isNaN(inputBai9)) {
    arrOutputBai9.push(inputBai9); // Chuyển đổi giá trị thành số và thêm vào mảng
  } else {
    alert("Không được nhập chữ");
  }

  document.getElementById("number-added").innerHTML = arrOutputBai9;
};

document.getElementById("btn-count-integer").onclick = function () {
  //input: arrOutputBai9
  //output:
  var countIntegers = 0;
  //process:
  for (var indexBai9 = 0; indexBai9 < arrOutputBai9.length; indexBai9++) {
    if (Number.isInteger(arrOutputBai9[indexBai9])) {
      countIntegers++;
    }
  }

  document.getElementById(
    "resultBai9"
  ).innerHTML = `<p class="bg-secondary text-white mt-2">Có: ${countIntegers} số nguyên được nhập!!</p>`;
};

/**Bài 10: So sánh số lượng số dương và số lượng số âm */
document.getElementById("btn-compare").onclick = function () {
  var positiveNumber = 0;
  var negativeNumber = 0;

  for (var index = 0; index < arrOutput.length; index++) {
    if (!isNaN(arrOutput[index])) {
      if (arrOutput[index] > 0) {
        positiveNumber++;
      } else if (arrOutput[index] < 0) {
        negativeNumber++;
      }
    }
  }

  var resultMes = "";
  if (positiveNumber > negativeNumber) {
    resultMes = "Số dương nhiều hơn số âm.";
  } else if (positiveNumber < negativeNumber) {
    resultMes = "Số âm nhiều hơn số dương.";
  } else {
    resultMes = "Số dương và số âm bằng nhau.";
  }

  document.getElementById(
    "resultBai10"
  ).innerHTML = `<p class="bg-secondary text-white mt-2">${resultMes}</p>`;
};
