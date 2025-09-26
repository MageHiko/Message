"use strict";
$(document).ready(function () {

});

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box, boxIndex) => {
        const screen = box.querySelector(".screenbox");
        const input = box.querySelector(".messagebox");
        const btn = box.querySelector(".btn");

        input.setAttribute("contenteditable", "true");

        function adjustHeight(el) {
            el.style.height = 'auto';
            el.style.height = el.scrollHeight + 'px';
        }

        input.addEventListener('input', () => {
            adjustHeight(input);
        });

        adjustHeight(input);

        function addMessageToAll(text) {
            if (!text.trim()) return;

            boxes.forEach((b) => {
                const screenBox = b.querySelector(".screenbox");
                const message = document.createElement("div");
                message.classList.add("message");

                if (boxIndex === 0) {
                    message.classList.add("left");
                } else {
                    message.classList.add("right");
                }

                message.textContent = text;
                screenBox.appendChild(message);
                screenBox.scrollTop = screenBox.scrollHeight;
            });

            input.textContent = "";
            adjustHeight(input);
        }

        btn.addEventListener("click", () => {
            addMessageToAll(input.textContent);
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                addMessageToAll(input.textContent);
            }
        });
    });
});


