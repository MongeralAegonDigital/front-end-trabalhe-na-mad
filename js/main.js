// JavaScript Document
$( document ).ready(function() {
    
    $('form').on('submit', function(e) { 
        e.preventDefault();
        $('.result').empty();
        var user = $(this).find('input').val();
        
        var $list = $('.result'), usuario = user,
        url  = 'https://api.github.com/users/' + usuario + '/repos?per_page=100';
        $.ajax({
            dataType: "json",
            url: url,
            success: function(data){
                $.each(data, function(index,repo){
                    if(repo.fork === false){
                        if(repo.homepage){
                            link = '<a class="title" href="' + repo.homepage + '" target="_blank">' + repo.name  + '</a>';
                        } else {
                            link = '<span class="title">' + repo.name + '</span>'; 
                        }                    
                        $list.append(
                              '<li>' 
                                + link
                                + '<span class="desc">' + repo.description + '</span>'
                            + '</li>'
                        );
                    }
                });
            },
            error: function(){
                $list.append('<li class="error">Sua Requisição falhou.</li>');
            }
        });
    
    });
	
});

