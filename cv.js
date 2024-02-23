// Metodo de impressão do currículo
function printPDF(url) {
    var win = window.open(url, '_blank');
    win.onload = function() {
        win.print();
    }
}