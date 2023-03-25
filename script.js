// bagian pendaftaran aslab
const ASLAB = e =>{
    let formAslab = JSON.parse(sessionStorage.getItem("formAslab")) || [];
    let exist = formAslab.length && 
    JSON.parse(sessionStorage.getItem("formAslab")).some(data => 
        data.Nama.toLowerCase() == document.getElementById("nama").value.toLowerCase() && 
        data.Email.toLowerCase() == document.getElementById("email").value.toLowerCase());
        
    if(!exist){
        formAslab.push({
            Nama         : document.getElementById("nama").value,
            Nim          : document.getElementById("nim").value,
            Email        : document.getElementById("email").value,
            Telepone     : document.getElementById("telp").value,
            Angkatan     : document.getElementById("angkatan").value,
            Pilihan      : document.querySelector('input[name="pilih"]:checked').value,
            Berkas       : document.getElementById("file").value,
            Pesan        : document.getElementById("pesan").value,
            Note         : document.getElementById("note").value  
        })
        sessionStorage.setItem("formAslab", JSON.stringify(formAslab));
        alert("Anda berhasil mendaftar!");

        disData();
        document.querySelector("form").reset();
        document.getElementById("nama").focus();   
    }
    else{
        document.querySelector("form").reset();
        alert("Anda sudah mendaftar!");
    }
    e.preventDefault();
}

// fungsi untuk mengambil dan menampilkan data pendaftar
function disData(){
    console.log(sessionStorage.getItem("formAslab"));
    if(sessionStorage.getItem("formAslab")){
        var output = document.querySelector("tbody");
        output.innerHTML = "";
        JSON.parse(sessionStorage.getItem("formAslab")).forEach(data =>{
            output.innerHTML += `
            <tr>
                <td>${data.Nama}</td> 
                <td>${data.Nim}</td> 
                <td>${data.Email}</td> 
                <td>${data.Telepone}</td> 
                <td>${data.Angkatan}</td>
                <td>${data.Pilihan}</td> 
                <td>${data.Berkas}</td>  
                <td>${data.Pesan}</td>  
                <td>${data.Note}</td>  
            <tr>
            `;
    });
}}
disData();






