addEventListener("DOMContentLoaded", function() {
    const actions = {
        "show": function(element) {
            element.removeAttribute("hidden");
        },
        "hide": function(element) {
            element.setAttribute("hidden", "");
        }
    };

    const buttons = document.querySelectorAll("button");

    for (let i = 0; i < buttons.length; i += 1) {
        const button = buttons[i];

        button.addEventListener("click", function() {
            const action  = button.getAttribute("action");
            const element = document.getElementById(
                button.getAttribute("element")
            );

            actions[action](element);
        });
    }
});