'use strict';

import Model from './core/model.js';
import View from './core/View.js';
import config from './core/config.js';

const App = function (data) {
    this.db = new Model(data);
    this.view = new View(data);
    
    var env = this;
    this.database;

    this.view.renderNavbar();


    this.loadApp = async function () {
        this.db.loadDatabase().then(function (result) {
            this.database = result;
            env.view.renderIndexBlogs(result);
        });
    }

}

var app = new App(config);
app.loadApp();