const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("index", { 
        title: "Mini Message Board",
        messages: messages
    });
});

indexRouter.get("/new", (req, res) => {
    res.render("form");
})

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

module.exports = indexRouter;