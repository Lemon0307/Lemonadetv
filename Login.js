function validate() {
    var input_text = document.getElementById("user");
    var input_text = document.getElementById("password");
        if (input_text.value == "") {
            alert("Please insert your name and password.");
            return false;
        }
        alert("Succesfully Logged In!")
        return true;