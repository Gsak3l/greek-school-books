function openPage(pdfid) {
    if (pdfid != '') {
        console.log(pdfid);
        document.getElementById('frame').innerHTML = '<iframe src="https://docdro.id/' + pdfid + '" style="width:100%; height:900px;" frameborder="0"></iframe>';
    }
}