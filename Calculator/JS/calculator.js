var result = 0;
var digits = [];
var data = [];
var number = digits.join(' ');


$(document).ready(function() {

  $('.output').text("0");

  $("button").on("click", function() {
    $('output').text("0");
    var button_type = $(this).text();
    if (button_type === "1") {
      digits.push(1)
    }
    if (button_type === "2") {
      digits.push(2)

    }
    if (button_type === "3") {
      digits.push(3)

    }
    if (button_type === "4") {
      digits.push(4)

    }
    if (button_type === "5") {
      digits.push(5)

    }
    if (button_type === "6") {
      digits.push(6)

    }
    if (button_type === "7") {
      digits.push(7)

    }
    if (button_type === "8") {
      digits.push(8)

    }
    if (button_type === "9") {
      digits.push(9)

    }
    if (button_type === "0") {
      digits.push(0)

    }
    if (button_type === ".") {
      digits.push(".")

    }
    if (button_type === "+") {
      data.push(digits.join(''));
      data.push("plus");
      digits = [];
      $(".output").text(test);

    }

    if (button_type === "-") {
      data.push(digits.join(''));
      data.push("subtract");
      digits = [];
      $(".output").text(placeholder);
    }
    if (button_type === "X") {
      data.push(digits.join(''));
      data.push("multiply");
      digits = [];
      $(".output").text(placeholder);

    }
    if (button_type === "/") {

      data.push(digits.join(''));
      data.push("divide");
      digits = [];
      $(".output").text(placeholder);
    }
    if (button_type === "%") {
      data.push(digits.join(''));

      data.push("remainder");
      digits = [];
      $(".output").text(placeholder);
    }
    if (button_type === "AC") {
      result = 0;
      digits = [];
      data = [];
      $(".output").text("0");
    } else if (button_type === "CE") {
      digits.join('');
      digits = [];
      $(".output").text("0");

    } else
      $('.output').text(digits.join(''));
  });

  $(".equal").on('click', function() {
    data.push(digits.join(''));
    $(".output").text(data);
    for (var i = 0; i < data.length; i++) {
      if (data[i] === "remainder" && i === 1) {
        result = Number(data[i - 1]) % Number(data[i + 1]);
      } else if (data[i] === "remainder") {
        result = Number(result) % Number(data[i + 1]);

      }
      if (data[i] === "plus" && i === 1) {
        result = Number(data[i - 1]) + Number(data[i + 1]);
      } else if (data[i] === "plus") {
        result = Number(result) + Number(data[i + 1]);

      }
      if (data[i] === "multiply" && i === 1) {
        result = Number(data[i - 1]) * Number(data[i + 1]);

      } else if (data[i] === "multiply") {
        result = Number(result) * Number(data[i + 1]);

      }
      if (data[i] === "subtract" && i === 1) {
        result = Number(data[i - 1]) - Number(data[i + 1]);

      } else if (data[i] === "subtract") {
        result = Number(result) - Number(data[i + 1]);

      }
      if (data[i] === "divide" && i === 1) {
        result = Number(data[i - 1]) / Number(data[i + 1]);

      } else if (data[i] === "divide") {
        result = Number(result) / Number(data[i + 1]);

      }

    }
    $(".output").text(result);

  });
});