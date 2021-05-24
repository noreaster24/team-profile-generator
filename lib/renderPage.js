const fs = require("fs");
const path = require("path");

const templatesDir = path.resolve(__dirname, "../lib");

const createPage = (employees) => {
    const htmlPage = [];

    htmlPage.push(
        ...employees.filter((employee) => employee.getRole() === "Manager").map((manager) => createManager(manager))
    );
    htmlPage.push(
        ...employees.filter((employee) => employee.getRole() === "Engineer").map((engineer) => createEngineer(engineer))
    );
    htmlPage.push(...employees.filter((employee) => employee.getRole() === "intern").map((inter) => createIntern(intern)));

    return createMain(htmlPage.join(""));
};

const createManager = (manager) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "Manager-template.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return template;
};

const createEngineer = (engineer) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer-template.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
};

const createIntern = (intern) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern-template.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
};

const createMain = (html) => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

module.exports = createPage