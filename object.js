// ARRAY BERISI OBJECT

const daftarSiswa = [
    {
        nama: "Rosa",
        jenKel: "p",
        umur: "18",
        wfavorit: "kuning",
    },
    {
        nama: "Ambar",
        jenKel: "p",
        umur: "16",
        wfavorit: "merah",
    },
    {
        nama: "Rizki",
        jenKel: "l",
        umur: "16",
        wfavorit: "ungu",
    },
    {
        nama: "Mila",
        jenKel: "p",
        umur: "18",
        wfavorit: "biru",
    },
    {
        nama: "Bagas",
        jenKel: "l",
        umur: "15",
        wfavorit: "coklat",
    },
]

let mode = 'tambah'

// READ

const tampilkanSiswa = () => {
    const tblSiswa = document.getElementById('tblSiswa')
    tblSiswa.innerHTML = "<tr><th>No</th><th>Nama</th><th>Jenkel</th><th>umur</th><th>Warna Favorit</th><th>Hapus</th><th>Edit</th></tr>"

    for(let idx in daftarSiswa) {
    console.log(`${parseInt(idx) + 1}. ${daftarSiswa[idx].nama} suka warna ${daftarSiswa[idx].wfavorit} berjenis kelamin ${daftarSiswa[idx].jenKel} berumur ${daftarSiswa[idx].umur}`);

    tblSiswa.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarSiswa[idx].nama}</td><td>${daftarSiswa[idx].jenKel}</td><td>${daftarSiswa[idx].umur}</td><td>${daftarSiswa[idx].wfavorit}</td><td><button class="btn btn-danger" onclick="hapusSiswa('${daftarSiswa[idx].nama}')">Delete</button></td><td><button class="btn btn-warning" onclick="editSiswa('${daftarSiswa[idx].nama}')">Edit</button></td></tr>`
        

}
}

// CREATE
 const tambahSiswa = () => {
    const nama = document.getElementById('textNama').value
    const wfavorit = document.getElementById('textWarna').value
    const jenKel = document.getElementById('textJenkel').value
    const umur = document.getElementById('textUmur').value

    const siswaBaru = {
        nama: nama,
        jenKel: jenKel,
        umur: umur,
        wfavorit: wfavorit,
    }

    // jika tambah

    if (mode == 'tambah') {
        daftarSiswa.push(siswaBaru)
    } else {
        // jika edit
        daftarSiswa[mode] = siswaBaru
    }

    document.getElementById('textNama').value = ""
    document.getElementById('textJenkel').value = ""
    document.getElementById('textUmur').value = ""
    document.getElementById('textWarna').value = ""

    tampilkanSiswa()
    
 }

const cariIndex = (nama) => { 
    for (let i =0; i< daftarSiswa.length; i++) {
        if (daftarSiswa[i].nama == nama) {
           return i
        }
    }
    
}

// DELETE

const hapusSiswa = (target) => {
    const indexDihapus = cariIndex(target)
    // menghapus siswa
    if (indexDihapus !== -1) {
        daftarSiswa.splice(indexDihapus, 1)  
        tampilkanSiswa();
    }

    document.getElementById('textNama').value = ""
    document.getElementById('textJenkel').value = ""
    document.getElementById('textUmur').value = ""
    document.getElementById('textWarna').value = ""

    tampilkanSiswa()
    
    
    // jika cancel

    if (mode == 'cancel') {
        daftarSiswa.push(siswaBaru)
    } else {
        // jika edit
        daftarSiswa[mode] = siswaBaru
    }

}

// EDIT 
const editSiswa = (target) => { 
    const indexEdit = cariIndex(target)

    console.log(target)
    console.log(indexEdit)
    console.log(daftarSiswa[indexEdit])

    const siswaDiedit = daftarSiswa[indexEdit]

    document.getElementById('textNama').value = siswaDiedit.nama
    document.getElementById('textJenkel').value = siswaDiedit.jenKel
    document.getElementById('textUmur').value = siswaDiedit.umur
    document.getElementById('textWarna').value = siswaDiedit.wfavorit

    mode = indexEdit

}