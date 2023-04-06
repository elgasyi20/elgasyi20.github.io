function hapusPerhitungan1(event) {
    const OutputLuasSegitiga = document.getElementById("OutputLuasSegitiga");
    OutputLuasSegitiga.innerHTML="";
}

function hapusPerhitungan2(event) {
    const OutputKelilingSegitiga = document.getElementById("OutputKelilingSegitiga");
    OutputKelilingSegitiga.innerHTML="";
}

function hapusPerhitungan3(event) {
    const OutputLuasJajargenjang = document.getElementById("OutputLuasJajargenjang");
    OutputLuasJajargenjang.innerHTML="";
}

function hapusPerhitungan4(event) {
    const OutputKelilingJajargenjang = document.getElementById("OutputKelilingJajargenjang");
    OutputKelilingJajargenjang.innerHTML="";
}

// luas segitiga rumus
function hitungLuasSegitiga(event) {
    const alasLuas = document.getElementById('alasLuas')
    const tinggiLuas = document.getElementById('tinggiLuas')
    const OutputLuasSegitiga = document.getElementById('OutputLuasSegitiga')
        
    let a = +alasLuas.value
    let t = +tinggiLuas.value
    let l = 0.5 * a * t

    OutputLuasSegitiga.innerHTML = `L = 1/2 x a x t </br> L = 1/2 x ${a} x ${t} </br> L = ${l}`

    event.preventDefault()  // mencegah halaman refresh
}

// keliling segitiga rumus
function hitungKelilingSegitiga(event) {
    const S1Segitiga = document.getElementById('S1Segitiga')
    const S2Segitiga = document.getElementById('S2Segitiga')
    const S3Segitiga = document.getElementById('S3Segitiga')
    const OutputKelilingSegitiga = document.getElementById('OutputKelilingSegitiga')
        
    let s1 = +S1Segitiga.value
    let s2 = +S2Segitiga.value
    let s3 = +S3Segitiga.value
    let K = s1 + s2 + s3
    
    OutputKelilingSegitiga.innerHTML = `K = a + b + c </br> K = ${s1} + ${s2} + ${s3} </br> K = ${K}`

    event.preventDefault()  // mencegah halaman refresh
}

// luas jajargenjang rumus
function hitungLuasJajargenjang(event) {
    const alasJajargenjang = document.getElementById('alasJajargenjang')
    const tinggiJajargenjang = document.getElementById('tinggiJajargenjang')
    const OutputLuasJajargenjang = document.getElementById('OutputLuasJajargenjang')
        
    let a = +alasJajargenjang.value
    let t = +tinggiJajargenjang.value
    let l = a * t
    
    OutputLuasJajargenjang.innerHTML = `L = a x t </br> 
    L = ${a} x ${t} </br> L = ${l}`

    event.preventDefault()  // mencegah halaman refresh
}

// keliling jajargenjang rumus
function hitungKelilingJajargenjang(event) {
    const panjangJajargenjang = document.getElementById('panjangJajargenjang')
    const lebarJajargenjang = document.getElementById('lebarJajargenjang')
    const OutputKelilingJajargenjang = document.getElementById('OutputKelilingJajargenjang')
        
    let p = +panjangJajargenjang.value
    let l = +lebarJajargenjang.value
    let k = 2 * p + 2 * l
    
    OutputKelilingJajargenjang. innerHTML = `k = 2 x (p + l) </br> 
    k = 2 x (${p} x ${l}) </br> k = ${k}`

    event.preventDefault()  // mencegah halaman refresh
}


