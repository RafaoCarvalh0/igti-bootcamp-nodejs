import ev from "./events.js";

ev.on("testEvent", () => {
    console.log("ouviu tb");
});

ev.emit("testEvent", "whatever");

