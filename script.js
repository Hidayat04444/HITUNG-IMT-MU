function calculateIMT() {
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meter
    const weight = parseFloat(document.getElementById('weight').value);

    if (!height || !weight) {
        alert("Harap masukkan tinggi dan berat badan dengan benar.");
        return;
    }

    const imt = (weight / (height * height)).toFixed(2);

    let category = '';
    let recommendation = '';

    if (imt < 18.5) {
        category = 'Berat badan kurang';
        recommendation = `
            - Konsumsi makanan tinggi kalori dan protein seperti daging, telur, dan kacang-kacangan. <br>
            - Tambahkan minyak sehat seperti minyak zaitun pada makanan. <br>
            - Jangan lupa berolahraga untuk meningkatkan massa otot.`;
    } else if (imt >= 18.5 && imt <= 24.9) {
        category = 'Berat badan normal';
        recommendation = `
            - Pertahankan pola makan seimbang dengan sayur, buah, protein, dan karbohidrat. <br>
            - Olahraga secara teratur untuk menjaga kebugaran tubuh. <br>
            - Minum cukup air setiap hari.`;
    } else if (imt >= 25 && imt <= 29.9) {
        category = 'Berat badan berlebih';
        recommendation = `
            - Kurangi makanan berlemak dan manis. <br>
            - Konsumsi lebih banyak sayur, buah, dan makanan rendah kalori. <br>
            - Rutin berolahraga seperti jogging atau bersepeda.`;
    } else {
        category = 'Obesitas';
        recommendation = `
            - Konsultasikan dengan dokter atau ahli gizi untuk rencana diet. <br>
            - Hindari makanan cepat saji dan minuman bersoda. <br>
            - Tingkatkan aktivitas fisik seperti berjalan kaki setiap hari.`;
    }

    document.getElementById('result').textContent = `IMT Anda: ${imt}`;
    document.getElementById('category').textContent = `Kategori: ${category}`;
    document.getElementById('recommendation').innerHTML = `<strong>Langkah-langkah:</strong><br>${recommendation}`;
}
