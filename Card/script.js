var Output = "";
var jm_baris = 10;

for (i = 1; i <= jm_baris; i++) {
  for (spasi = 1; spasi <= (jm_baris - i + 1); spasi++) {
    Output += "O";
  }

  for (icon = 1; icon <= (2 * i - 1); icon++) {
    Output += "-";
  }

  for (kanan = jm_baris; kanan >= i; kanan--) {
    Output += "O";
  }

  Output += "\n";
}

for (i = 1; i <= jm_baris; i++) {
  for (spasi = 1; spasi <= i; spasi++) {
    Output += "O";
  }
  
  for (icon = (2*jm_baris - i); icon >= i; icon--) {
    Output += "-";
  }

  for (spasi = 1; spasi <= i;spasi++) {
    Output += "O";
  }

  Output += "\n";
}

console.log(Output);
