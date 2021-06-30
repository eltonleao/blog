const View = function (siteData) {
    var env = this;
    this.siteData = siteData;

    document.title = 'eltonleao | blog';

    this.renderNavbar = function () {
        let html = "";
        html += '    <div class="container">';
        html += '  <a class="navbar-brand" href="/">eltonleao</a>';
        html += '  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"';
        html += '    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"';
        html += '    aria-label="Toggle navigation">';
        html += '    Menu';
        html += '    <i class="fas fa-bars"></i>';
        html += '  </button>';
        html += '  <div class="collapse navbar-collapse" id="navbarResponsive">';
        html += '    <ul class="navbar-nav ml-auto">';
        html += '      <li class="nav-item">';
        html += '        <a class="nav-link" href="index.html">Home</a>';
        html += '      </li>';
        // html += '      <li class="nav-item">';
        // html += '        <a class="nav-link" href="post.html">Sample Post</a>';
        // html += '      </li>';
        // html += '      <li class="nav-item">';
        // html += '        <a class="nav-link" href="contact.html">Contact</a>';
        // html += '      </li>';
        html += '      <li class="nav-item">';
        html += '        <a class="nav-link" href="https://eltonleao.github.io">About</a>';
        html += '      </li>';
        html += '    </ul>';
        html += '  </div>';
        html += '</div>';
        $('.load-navbar').html(html);
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

export default View;