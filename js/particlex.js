
if (window.hljs) {
    hljs.highlightAll();
    hljs.configure({ ignoreUnescapedHTML: true });
    var codes = document.getElementsByTagName("pre");
    for (var i = 0; i < codes.length; i++) {
        var first = codes[i].firstChild;
        if (!first || !first.className) continue;
        var lang = String(first.className).split(/\s+/).filter((x) => {
            return x != "sourceCode";
        })[0];
        if (!lang) lang = "text";
        codes[i].innerHTML += '<div class="language">' + lang + "</div>";
    }
}

if (window.Vue && document.getElementById("layout")) {
    const App = Vue.createApp({
        data() {
            return {
                show_page: true,
                menu_show: false,
                card_top: 100,
                bar_local: 0,
            };
        },
        mounted() {
            if (document.getElementById("home-head"))
                document.getElementById("menu").className += " menu-color";
            if (document.getElementsByClassName("article")[0])
                document.body.style.backgroundColor = "#fff";
            window.addEventListener("scroll", this.handleScroll, true);
        },
        methods: {
            home_click() {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                });
            },
            handleScroll() {
                var new_local = document.documentElement.scrollTop;
                var menu = document.getElementById("menu");
                var that = this;
                if (this.bar_local < new_local) {
                    menu.className = "hidden-menu";
                    that.menu_show = false;
                } else menu.className = "show-menu";
                if (document.getElementById("home-posts-wrap"))
                    if (new_local <= window.innerHeight - 100)
                        menu.className += " menu-color";
                this.bar_local = new_local;
            },
        },
    });
    App.mount("#layout");
} else {
    document.body.classList.add("no-vue");
}
