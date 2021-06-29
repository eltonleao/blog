'use strict';

import Database from './core/model.js';

const App = function (data) {
    var env = this;
    this.db = new Database(data);
    this.database;

    this.loadApp = async function () {
        await this.db.loadDatabase().then(function (result) {
            this.database = result;
            env.renderIndexBlogs(result);
        });
    }

    this.renderIndexBlogs = function (data) {
        var html = "";
        data.pages.index.blogs.forEach(element => {
            // console.log("main > ", element);
            html += '<div class="post-preview">';
            html += '       <a href="./posts/cat-drop/">';
            html += '           <h2 class="post-title">';
            html += `               ${element.title}`;
            html += '           </h2>';
            html += '           <!-- <h3 class="post-subtitle">O capeta em forma de guri</h3> -->';
            html += '        </a>';
            html += '        <p class="post-meta">Posted by';
            html += '           <a target="_blank" href="https://eltonleao.github.io">eltonleao</a>';
            html += '            em Junho 20, 2021';
            html += '        </p>';
            html += '  </div>';
        });
        $(".load-blogs").html(html);
    }

}

function camalize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase().replace(/\//g, ''));
}

const location = window.location;
console.log(camalize(location.pathname));
const host = window.location.origin;

var app = new App(
    {
        url: host + "/js/core/database.json"
    }
);
app.loadApp();