// let umurAdi = "16"
// let umurZakky = "17"

// let selisih = umurAdi - umurZakky
// console.log("Umur Adi adalah", umurAdi, "Umur Zakky adalah", umurZakky, "selisih mereka adalah", selisih)

// let hargaBaju = "70000"
// let diskon = "10"

// let harga = hargaBaju * diskon / 100
// let total = hargaBaju - diskon

// console.log("harga yang harus dibayar adalah", total, "anda berhemat", harga)

// let durasiParkir = "2"
// let tarifParkirperjam = "2000"

// let hitung = (durasiParkir - 2)*(tarifParkirperjam) + (tarifParkirperjam)

// console.log("Anda parkir selama", durasiParkir, "jam", "dengan total biaya sejumlah Rp.", +hitung )

// let botolMinum = "600"

// for (let i= 0; i< 5; i++) {
//         console.log("Rudi meminum air dari botol sebanyak 50ml"); 
//         botolMinum-= 50;
//         console.log(`Botol minum Rudi sekarang berisi ${botolMinum}ml air `)
//     } 

function lowest(a, b, c) {
    return Math.min(a, b, c)
}

console.log(lowest(0, 2, 3))
console.log(lowest(2, 0, 3))
console.log(lowest(3, 2, 0))
console.log(lowest(0, 3, 2))

