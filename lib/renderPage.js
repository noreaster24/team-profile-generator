const fs = require("fs");
const path = require("path");

const template = path.resolve(__dirname, "../lib");

const createPage = (employees) => {
    const htmlPage = [];

    htmlPage.push(
        ...employees.filter((employee) => employee.getRole() === "Manager").map((manager) => createManager(manager))
    );
    htmlPage.push(
        employees.filter((employee) => employee.getRole() === "Engineer").map((engineer) => createEngineer(engineer))
    );
    htmlPage.push(...employees.filter((employee) => employee.getRole() === "intern").map((inter) => createIntern(intern)));

    return createMain(htmlPage.join(""));
};

const createManager = (manager) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "Manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholder(template, "role", manager.getRole());
    template = replacePlaceholder(template, "email", manager.getEmail());
    template = replacePlaceholder(template, "id", manager.getId());
    template = replacePlaceholder(template, "officeNumber", manager.getOfficeNumber());
    return template;
};

const createEngineer = (engineer) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholder(template, "role", engineer.getRole());
    template = replacePlaceholder(template, "email", engineer.getEmail());
    template = replacePlaceholder(template, "id", engineer.getId());
    template = replacePlaceholder(template, "github", engineer.getGithub());
    return template;
};

const createIntern = (intern) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholder(template, "role", intern.getRole());
    template = replacePlaceholder(template, "email", intern.getEmail());
    template = replacePlaceholder(template, "id", intern.getId());
    template = replacePlaceholder(template, "school", intern.getSchool());
    return template;
};

const createMain = (html) => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern,value);
};

module.exports = createPage