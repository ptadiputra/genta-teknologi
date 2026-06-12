export const whatsappNumber = "6281547193270";

export const createWhatsAppLink = (packageName) => {
    const messages = {
        // Web Development
        "Web Development": `Halo Genta Teknologi 👋

            Saya tertarik dengan paket *Web Development*.

            Saya ingin membuat website profesional untuk bisnis saya dan ingin mengetahui:

            • Detail fitur yang termasuk dalam paket
            • Estimasi waktu pengerjaan
            • Teknologi yang digunakan
            • Detail biaya dan proses kerja

            Mohon informasinya. Terima kasih.`,

        // Digital Ads
        "Digital Ads": `Halo Genta Teknologi 👋

            Saya tertarik dengan paket *Digital Ads*.

            Saya ingin meningkatkan jangkauan dan penjualan bisnis melalui iklan digital.

            Mohon informasi mengenai:

            • Strategi iklan yang direkomendasikan
            • Platform yang digunakan (Meta Ads / Google Ads)
            • Estimasi hasil kampanye
            • Detail biaya pengelolaan

            Terima kasih.`,

        // UI/UX Design
        "UI/UX Design": `Halo Genta Teknologi 👋

            Saya tertarik dengan paket *UI/UX Design*.

            Saya ingin mendiskusikan kebutuhan desain aplikasi/website yang modern, profesional, dan mudah digunakan.

            Mohon informasi mengenai:

            • Proses desain yang dilakukan
            • Jumlah revisi yang tersedia
            • File yang akan diterima
            • Estimasi waktu pengerjaan

            Terima kasih.`,
    };

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        messages[packageName]
    )}`;
};