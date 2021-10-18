# Aimprosoft Candidate Demo

This is a demo project for a candidate's HTML/CSS/JS knowledge. 

_**If you are a Vue or React developer**_
* you are applying for a role using Vue, please implement this test using Vue 2, Vue-router and Vuex.
* and you are applying for a role using React, please implement this test using React

## Getting Started

Node and npm modules are necessary for setting up local server.

Please make sure that you have it installed it on your local machine.

To install all necessary npm modules run:
`npm install`

Start up the server by running
`npm start`

Now the local server should have started.
Now you should have access to local server at: `http://localhost:8080/`
Navigate your browser to: `http://localhost:8080/app` to preview your project.

## Recommendation

- Use git private project and provide access to  `n.martynenko@aimprosoft.com`, `k.kliushnyk@aimprosoft.com`,  `o.kolomeets@aimprosoft.com`
- Do at least one commit per task (we can see the work progress)
- Use descriptive commit comments
- It's up to you whether you want to push regularly or once you are finished with all of your commits
- Use `Less` preprocessor to style it. `main.less` - file is already included in `src/less/` directory
- When working with Less please demonstrate you understand how to use it the most modular and effective way
- You are free to add whatever frameworks or libraries you like, but be prepared to justify your use of them.
- Things to consider: performance, efficient use of space, usability, cross-browser, responsiveness.
- Show that you understand how version control works by using following commands: `branch`, `merge` and `rebase`

## Tasks

### 1. Create product listing page

- Use `app/index.html` file
- Create a full width page with a header, a footer and a main section in index.html.
- Main section should be populated with products using AJAX - data set `src/data/productset.json`
- Each product should include image thumbnail, product name, product price (current, was and discount price), size and be linked to `url` key
- Add "Favourite" icon to each product
- Design for products layout is provided in `product-list.png`
- Use fonts OpenSans and Georgia
- It should be fully responsive
- Add toggle option between list and grid view

### 2. Form Validation

- Use `app/form.html` file
- Add a form with following fields:
    - name: text only, no case sensitive
    - surname: text only, no case sensitive
    - email: alphanumeric, no case sensitive must contain `@` symbol and domain name
    - phone: can contain `+` (only in front of the number) and `space` characters and numbers only
    - password: must be at least 8 long and contain at least 1 special character
- Display error messages for each invalid field
- All fields are required and needs to be valid before form can be submitted
- Use only vanilla JS for this tasks (do not use plugins or HTML5 API)
