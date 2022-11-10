const learn_form = () => {
    try{
        let message = document.forms["alert"]["msgInput"].value;
        alert(message);
    } catch (err) {
        console.log(err);
    }
}