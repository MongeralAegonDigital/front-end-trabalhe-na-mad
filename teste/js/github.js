var github = {
    auth: "?client_id=d7125c669427ba3e35c1&client_secret=b0698c55bf1bc5e5a306136d1988bbfa40f851ef",
    contribsUrl: "",
    commitsUrl: "",
    page: "",
    init: function() {
        $.ajax({
            type: "GET",
            url: "https://api.github.com/users/globocom/repos" + github.auth + "&page=1&per_page=200",
            dataType: "json",
            success: function(result) {
                result.sort(function(a, b) {
                    return b.stargazers_count - a.stargazers_count }
                );

                var appendResults = function() {
                    $("#repositories").append(
                        "<li class='project-item'><a href='javascript:void(0)' class='project' data-title='" + result[i].name + "' data-stars='" + result[i].stargazers_count + "' data-forks='" + result[i].forks + "' data-contribs-url='" + result[i].contributors_url + "' data-commits-url='" + result[i].commits_url.replace("{/sha}", '') + "'>" +
                        result[i].name + "</a><span class='arrow-active'></span></li>"
                    );
                };

                for(i in result) {
                    appendResults();
                }
            }
        });
    },
    getCommit: function() {
        var htmlResult = "";

        $.ajax({
            type: "GET",
            url: github.commitsUrl + github.auth + "&page=" + github.page + "&per_page=20",
            dataType: "json",
            success: function(result) {
                for(i in result) {
                    try {
                        htmlResult += "<li class='commit-item js-show'><img class='photo' src='" + result[i].committer.avatar_url + " width='50' height='50'><article class='commit'><div class='outer'><h2 class='commit-title'>" + result[i].commit.message + "</h2><p class='commit-user'>@" + result[i].committer.login + "</p></div></article><time class='commit-date'>" + github.formatCommitDate(result[i].commit.committer.date) + "</time></li>";
                    } catch(err) {
                        htmlResult += "<li class='commit-item js-show'><img class='photo' src='' width='50' height='50'><article class='commit'><div class='outer'><h2 class='commit-title'>" + result[i].commit.message + "</h2><p class='commit-user'>@</p></div></article><time class='commit-date'>" + github.formatCommitDate(result[i].commit.committer.date) + "</time></li>";
                    }
                }

                if (result.length == 20) {
                    $("#showMore").show();
                } else {
                    $("#showMore").hide();
                }

                $("#commits").append(htmlResult);
                $('.sidebar').height($(document).innerHeight());
            }
        });
        github.page = github.page + 1;
    },
    getContribs: function() {
        $.ajax({
            type: "GET",
            url: github.contribsUrl + github.auth,
            dataType: "json",
            success: function(result) {
                var contribs = result.length;
                $("#contribs").text("contribs " + contribs);
            }
        });
    },
    formatCommitDate: function(selectedDate) {
        newDate = new Date(selectedDate);
        function pad(s) { return (s < 10) ? "0" + s : s; }
        return [pad(newDate.getDate()), pad(newDate.getMonth()+1), newDate.getFullYear()].join("/");
    },
    showMore: function() {
        github.getCommit();
    }
};

$(document).ready(function() {
    github.init();

    $(document).on("click", ".project", function(){
        var stars = $(this).data("stars");
        var forks = $(this).data("forks");
        var repoName = $(this).data("title");

        github.contribsUrl = $(this).data("contribs-url");
        github.commitsUrl = $(this).data("commits-url");
        github.page = 1;

        $(".project-item").removeClass("active");
        $(this).closest(".project-item").addClass("active");

        //window.history.replaceState(repoName, repoName, repoName);

        $("#stars").text("stars " + stars);
        $("#forks").text("forks " + forks);

        $(".commit-item").remove();

        github.getContribs();
        github.getCommit();
    });

    $("#showMore").on("click", github.showMore);
});




