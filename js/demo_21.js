const showpage = (index) => {
    const p = document.querySelector('.show-classdemo');

    switch(index) {
        case 1:
            p.innerHTML = `<iframe src="../demo/w02/index.html" width="100%" height="100%" />`;
            break;
        case 2:
            p.innerHTML = `<iframe src="../demo/w03/card_21.html" width="100%" height="100%" />`;
            break;
        case 3:
            p.innerHTML = `<iframe src="../demo/w05/blog_21.html" width="100%" height="100%" />`;
            break;
        case 4:
            p.innerHTML = `<iframe src="../demo/w06/blog_21.html" width="100%" height="100%" />`;
            break;
        case 5:
            p.innerHTML = `<iframe src="../demo/w08/landing_21.html" width="100%" height="100%" />`;
            break;
        case 6:
            p.innerHTML = `<iframe src="../demo/w09/resume_21.html" width="100%" height="100%" />`;
            break;
    }
}