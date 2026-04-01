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

indexRouter.post("/new", (req, res) => {
    const { user, text } = req.body;

    messages.push({
        user: user,
        text: text,
        added: new Date(),
    });
    
    res.redirect("/");
})

indexRouter.get("/message/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const message = messages[id];

    if (!message) {
        return res.status(404).send("Message not found");
    }

    res.render("message", { message });
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