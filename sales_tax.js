  window.addEventListener("load", function() {
    document.getElementById("subtotal").focus();
    });
    document.getElementById("calculate").addEventListener("click", function() {
    document.getElementById("subtotal").focus();
    });
    document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("subtotal").value = "";
    document.getElementById("tax_rate").value = "";
    document.getElementById("sales_tax").value = "";
    document.getElementById("total").value = "";
    document.getElementById("subtotal").focus();
    });
    document.getElementById("subtotal").addEventListener("click", function() {
    document.getElementById("subtotal").value = "";
    });
    document.getElementById("tax_rate").addEventListener("click", function() {
    document.getElementById("tax_rate").value = "";
    });
    function processEntries() {
    var subtotal = parseFloat(document.getElementById("subtotal").value);
    var tax_rate = parseFloat(document.getElementById("tax_rate").value);
    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
    alert("Subtotal must be > 0 and < 10000");
    document.getElementById("subtotal").focus();
    return;
    }
    if (isNaN(tax_rate) || tax_rate <= 0 || tax_rate >= 12) {
    alert("Tax Rate must be > 0 and < 12");
    document.getElementById("tax_rate").focus();
    return;
    }
    var sales_tax = subtotal * (tax_rate / 100);
    var total = subtotal + sales_tax;
    document.getElementById("sales_tax").value = sales_tax.toFixed(2);
    document.getElementById("total").value = total.toFixed(2);
    }
    document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculate").addEventListener("click", processEntries);
    });
