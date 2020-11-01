/* Add your JavaScript to this file */
function main() {
    window.onload = function () {
        var mail;
        var mess = document.getElementsByClassName("message")[0];
        var sub = document.getElementsByTagName("button")[0];
        sub.setAttribute("type", "button");
        sub.onclick = function () { mailSub() }

        function mailSub() {
            mail = document.getElementById("email").value;
            if (mail === "") {
                change();
            }
            else {
                thanks();
            }

            function change() {
                var email = document.getElementsByName("email")[0];
                email.value = '';
                email.placeholder = "Please enter a valid email address";
            }

            function thanks() {
                if (!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                    change();
                }
                else {
                    mess.innerHTML = 'Thank You! Your email address ' + mail + ' has been added to our mailing list';
                    mess.style.textAlign = 'center';
                    var email2 = document.getElementsByName("email")[0];
                    email2.value = '';
                    email2.placeholder = "Enter your email";
                }
            }
        }
    }
}
main();