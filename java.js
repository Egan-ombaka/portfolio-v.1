document.getElementById("aboutButton").addEventListener("click", 
function() {
    this.classList.add("active");
});


const download_button =
            document.getElementById('downloadCv');
        const content =
            document.getElementById('content');

        download_button.addEventListener
            ('click', async function () {
                const filename = 'table_data.pdf';

                try {
                    const opt = {
                        margin: 1,
                        filename: filename,
                        image: { type: 'jpeg', quality: 0.98 },
                        html2canvas: { scale: 2 },
                        jsPDF: {
                            unit: 'in', format: 'letter',
                            orientation: 'portrait'
                        }
                    };
                    await html2pdf().set(opt).
                        from(content).save();
                } catch (error) {
                    console.error('Error:', error.message);
                }
            });