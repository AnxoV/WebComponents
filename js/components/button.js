addEventListener("DOMContentLoaded", function() {
    const actions = {
        "show": function() {
            const element = document.getElementById(
                this.getAttribute("element")
            );
            element.removeAttribute("hidden");
        },
        "hide": function() {
            const element = document.getElementById(
                this.getAttribute("element")
            );
            element.setAttribute("hidden", "");
        },
        "alert": function() {
            const type  = this.getAttribute("type");
            const value = this.getAttribute("value");

            const alert = Alert({
                type: type,
                value: value
            });

            document.querySelector("body")
                .appendChild(alert.element);
        }
    };

    const buttons = document.querySelectorAll("button");

    for (let i = 0; i < buttons.length; i += 1) {
        const button = buttons[i];

        button.addEventListener("click", function() {
            const action  = button.getAttribute("action");

            actions[action].apply(button);
        });
    }
});