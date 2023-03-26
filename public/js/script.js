let balance = 0;

const addAmount = (amount, reason, type) => {
  if (amount == null || amount == "" || reason == null || reason == "") {
    alert("Amount or Reason cannot be empty");
    return false;
  } else {
    let listClassName = type.toString().toLowerCase();
    switch (type) {
      case "Income":
        {
          amount = Math.abs(amount);
          let expenseItem = $("#xt-expense-items");
          expenseItem.append("<li class='xt-ui-item'></li>");
        }
        break;
      case "Expense":
        {
          amount = Math.abs(amount) * -1;
          let incomeItem = $("#xt-income-items");
          incomeItem.append("<li class='xt-ui-item'></li>");
        }
        break;
      case "Balance":
        break;
      default:
        () => {
          alert("Error");
        };
    }

    let transationItem = $("#xt-" + listClassName + "-items");
    transationItem.append(
      "<li class='xt-ui-item'>" + amount.toString() + "</li>"
    );
    if (type != "Balance") {
      balance = parseInt(balance) + parseInt(amount);
      return addAmount(balance, reason, "Balance");
    } else {
      let reasonItem = $("#xt-reason-items");
      reasonItem.append(
        "<li class='xt-ui-item'>" + reason.toString() + "</li>"
      );
      return true;
    }
  }
};

const addAmountPopUp = (type) => {
  let popUp = $(
    "<div id='addAmountPopUp'><input placeholder = 'Add"+type+"' required id='addAmount' type = 'number' /><input placeholder = 'Reason' required id='amountReason' type = 'text' /></div>"
  );

  let popupDialog = popUp.dialog({
    autoOpen: false,
    modal: true,
    draggable: false,
    resizeable: false,
    open: function (event, ui) {
      $(".ui-dialog-titlebar-close").hide();
      $("#addAmount").on("keyup", (e) => {
        if (e.key == "Enter") {
          if (
            addAmount($("#addAmount").val(), $("#amountReason").val(), type)
          ) {
            popUp.dialog("close");
            popUp.dialog("destroy");
          }
        }
      });
      $("#amountReason").on("keyup", (e) => {
        if (e.key == "Enter") {
          if (
            addAmount($("#addAmount").val(), $("#amountReason").val(), type)
          ) {
            popUp.dialog("close");
            popUp.dialog("destroy");
          }
        }
      });
    },
    buttons: {
      Add: () => {
        if (addAmount($("#addAmount").val(), $("#amountReason").val(), type)) {
          popUp.dialog("close");
          popUp.dialog("destroy");
        }
      },
      Cancel: () => {
        popUp.dialog("close");
        popUp.dialog("destroy");
      },
    },
  });

  popupDialog.dialog("open");

  //how to make a jquery modal dialog in javascript?
};
