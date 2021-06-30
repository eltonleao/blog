'use strict';

import Model from './core/model.js';
import View from './core/View.js';

const App = function (data) {
    this.db = new Model(data);
    this.view = new View(data);
    
    var env = this;
    this.database;

    this.view.renderNavbar();


    this.loadApp = async function () {
        await this.db.loadDatabase().then(function (result) {
            this.database = result;
            env.view.renderIndexBlogs(result);
        });
    }

}

const host = window.location.origin;
var app = new App(
    {
        url: host + "/js/core/database.json"
    }
);
app.loadApp();