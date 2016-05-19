function getRepo(repo){
	var repositorio = $.getJSON('https://api.github.com/users/'+repo+'/repos', function(data) {
		var target_element = '<ul class="list-repo">';
		for (var i in data) {
			target_element += '<li><span class="name-repo">' + data[i].name + '</span><div class="star">Star<span>' + data[i].stargazers_count + '</span></div> <div class="fork">Fork<span>' + data[i].forks_count + "</span></div></li>";
			var owner_avatar = data[i].owner.avatar_url,
                owner_user = data[i].owner.login,
                owner_url = data[i].owner.html_url
		}
		target_element += '</ul>';
		$(".off").removeClass("off");
		$(".avatar").attr("src", owner_avatar);
		$(".name-owner").text(owner_user);
		$(".url-owner").text(owner_url).attr("href", owner_url);
		$('#content').html(target_element);
	})
	.fail(function() {
        $("#content").html("<span class='msg-error'>Usuário Inexistente. Digite um usuário válido!</span>")
    })
}
$('.jbutton-search').on('click', function(e){
	e.preventDefault();
	var elemento = $(this).prev();
	var repo = elemento.val();
	getRepo(repo);
	
});