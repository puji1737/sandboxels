(function(){
    if (!window.customElementManager) {
        window.customElementManager = {};
    }

    function createManagerUI() {
        let container = document.createElement("div");
        container.style.position = "fixed";
        container.style.top = "10px";
        container.style.right = "10px";
        container.style.background = "rgba(0,0,0,0.8)";
        container.style.padding = "10px";
        container.style.borderRadius = "10px";
        container.style.color = "white";
        container.style.zIndex = 9999;
        container.style.fontFamily = "sans-serif";

        let title = document.createElement("h3");
        title.innerText = "Custom Element Manager";
        title.style.margin = "0 0 10px 0";
        container.appendChild(title);

        let nameInput = document.createElement("input");
        nameInput.placeholder = "Element Name";
        nameInput.style.width = "100%";
        container.appendChild(nameInput);

        let colorInput = document.createElement("input");
        colorInput.type = "color";
        colorInput.style.width = "100%";
        container.appendChild(colorInput);

        let behaviorSelect = document.createElement("select");
        ["solid","liquid","powder","gas","pusher"].forEach(opt => {
            let option = document.createElement("option");
            option.value = opt;
            option.innerText = opt;
            behaviorSelect.appendChild(option);
        });
        behaviorSelect.style.width = "100%";
        container.appendChild(behaviorSelect);

        let directionSelect = document.createElement("select");
        ["up","down","left","right"].forEach(opt => {
            let option = document.createElement("option");
            option.value = opt;
            option.innerText = opt;
            directionSelect.appendChild(option);
        });
        directionSelect.style.width = "100%";
        directionSelect.style.display = "none";
        container.appendChild(directionSelect);

        behaviorSelect.addEventListener("change",function(){
            if (behaviorSelect.value === "pusher") {
                directionSelect.style.display = "block";
            } else {
                directionSelect.style.display = "none";
            }
        });

        let createBtn = document.createElement("button");
        createBtn.innerText = "Create Element";
        createBtn.style.width = "100%";
        createBtn.style.marginTop = "10px";
        container.appendChild(createBtn);

        document.body.appendChild(container);

        createBtn.addEventListener("click",function(){
            let name = nameInput.value.trim().toLowerCase();
            if (!name) return;
            let color = colorInput.value || "#888888";
            let behavior = behaviorSelect.value;

            if (behavior === "pusher") {
                if (!behaviors.PUSHER) {
                    behaviors.PUSHER = function(direction) {
                        return [
                            "XX|XX|XX",
                            "XX|CH:1|XX",
                            "XX|XX|XX",
                            function(pixel) {
                                if (!pixel.charge) { return }
                                let x = pixel.x;
                                let y = pixel.y;
                                let targetX = x;
                                let targetY = y;
                                if (direction === "up") targetY -= 1;
                                if (direction === "down") targetY += 1;
                                if (direction === "left") targetX -= 1;
                                if (direction === "right") targetX += 1;
                                if (outOfBounds(targetX, targetY)) { return }
                                let target = pixelMap[targetX][targetY];
                                if (target && elements[target.element].state !== "solid") {
                                    if (direction === "up") movePixel(target, targetX, targetY - 1);
                                    if (direction === "down") movePixel(target, targetX, targetY + 1);
                                    if (direction === "left") movePixel(target, targetX - 1, targetY);
                                    if (direction === "right") movePixel(target, targetX + 1, targetY);
                                }
                            }
                        ];
                    };
                }
                elements[name] = {
                    color: color,
                    behavior: behaviors.PUSHER(directionSelect.value),
                    category: "custom",
                    conduct: 1,
                    charge: 0
                };
            } else {
                let behaviorMap = {
                    solid: behaviors.SOLID,
                    liquid: behaviors.LIQUID,
                    powder: behaviors.POWDER,
                    gas: behaviors.GAS
                };
                elements[name] = {
                    color: color,
                    behavior: behaviorMap[behavior],
                    category: "custom"
                };
            }

            alert("Element '" + name + "' created!");
        });
    }

    createManagerUI();
})();
