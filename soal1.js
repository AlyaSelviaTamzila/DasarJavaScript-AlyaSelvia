let panjang = 20.5
let lebar = 30
let harga = 1500000
let ppn = 0.15

var luastanah = (panjang * lebar)
var totalharga = (luastanah * harga)
var totalpajak = (totalharga * ppn)

console.log("Diketahui:");
console.log("   Panjang(p)     = 20.5m");
console.log("   Lebar(l)       = 30m");
console.log("   PPN(ppn)       = 15%");
console.log("   Harga/meter(h) = Rp1.500.000");
console.log("Jawab:");
console.log("   Luas Tanah          = " + luastanah + " m2");
console.log("   Harga Tanah         = Rp " + totalharga);
console.log("   Total Pajak         = Rp " + totalpajak);
console.log("   Total Keseluruhan   = Rp " + (totalharga + totalpajak) );








