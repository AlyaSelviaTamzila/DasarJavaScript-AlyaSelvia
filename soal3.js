let tinggibadan = 1.7 //dalam meter
let beratbadan = 90 //dalam kg

var BMI = (beratbadan / (tinggibadan**2))

console.log("Diketahui :");
console.log("   Tinggi badan Rhodey = 170 cm");
console.log("   Berat badan Rhodey  = 90 Kg");
console.log("Jawan :");
console.log("   BMI = " + BMI);
console.log("Status berat badan Rhodey :");
if ( BMI < 18.5) {
    console.log("Kekurangan berat badan");
}else if ( BMI <= 24.9){
    console.log("Normal(ideal)");
}else if ( BMI <= 29.9 ){
    console.log("Kelebihan berat badan");
}else{
    console.log("Kegemukan(Obesitas)");
}
