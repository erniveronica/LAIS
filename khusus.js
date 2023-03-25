// bagian registrasi
const regis = e =>{
    let formUser = JSON.parse(localStorage.getItem("formUser")) || [];
    let exist = formUser.length && 
    JSON.parse(localStorage.getItem("formUser")).some(dataUser => 
        dataUser.Nama.toLowerCase() == document.getElementById("nama").value.toLowerCase() && 
        dataUser.Email.toLowerCase() == document.getElementById("email").value.toLowerCase());
        
    if(!exist){
        formUser.push({
            Nama     : document.getElementById("nama").value,
            Email    : document.getElementById("email").value,
            Password : document.getElementById("pass").value
        })
        localStorage.setItem("formUser", JSON.stringify(formUser));
        alert("Akun berhasil di daftar, Silahkan login");

        dispData();
        document.querySelector("form").reset();
        document.getElementById("nama").focus();   
    }
    else{
        document.querySelector("form").reset();
        alert("Akun anda sudah terdaftar!");
    }
    e.preventDefault();
}


// fungsi untuk mengambil dan menampilkan nama user
function dispData(){
    console.log(localStorage.getItem("formUser"));
    if(localStorage.getItem("formUser")){
        var hasil = document.querySelector("tspan");
        hasil.innerHTML = "";
        JSON.parse(localStorage.getItem("formUser")).forEach(dataUser =>{
            hasil.innerHTML += `<td>${dataUser.Nama}<td>`
            
        });
}}
dispData();


// bagian login
function login(e) {
    let Email = document.getElementById("email").value, Password = document.getElementById("pass").value;
    let formUser = JSON.parse(localStorage.getItem("formUser")) || [];
    let exist = formUser.length && 
    JSON.parse(localStorage.getItem("formUser")).some(dataUser => dataUser.Email.toLowerCase() == Email && dataUser.Password.toLowerCase() == Password);
    if(!exist){
        document.querySelector("form").reset();
        alert("Email atau password anda salah, Silahkan coba lagi!");
    }
    else{
        window.location.href = "head.html";
    }
    e.preventDefault();
}