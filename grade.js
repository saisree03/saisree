function getResult() {
    // Get input elements by ID
    const html = document.getElementById('html');
    const css = document.getElementById('css');
    const js = document.getElementById('js');
    const bs = document.getElementById('bs');
    // Get output elements by ID
    const total = document.getElementById('total');
    const average = document.getElementById('average');
    const grade = document.getElementById('grade');

    let hm = +html.value;
    let cm = +css.value;
    let jm = +js.value;
    let bm = +bs.value;
    let tot = hm + cm + jm + bm;
    let avg = tot / 4;
    let grd;

    if (hm > 39 && cm > 39 && jm > 39 && bm > 39) {
        grd = tot > 90 ? 'A+' : tot > 80 ? 'A' : tot > 70 ? 'B+' : tot > 60 ? 'B' : tot > 50 ? 'C' : 'D';
    } else {
        grd = "Fail";
    }
    total.textContent = "total marks: " + tot;
    average.textContent = "average marks: " + avg;
    grade.textContent = "grade: " + grd;
}