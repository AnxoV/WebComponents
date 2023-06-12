const alert = function(options) {
    let that = {};
    Object.assign(that, options);

    that.init = function() {
        that.element = document.createElement("alert");
        that.element.type = that.type;

        const container = document.createElement("container");
        container.innerHTML = value;
        that.element.appendChild(container);

        const closeButton   = document.createElement("button");
        closeButton.action  = "remove";
        closeButton.element = "parent";

        that.element.appendChild(closeButton);
    };

    that.init();
    return that;
};