angular.module("AppTest",[])
            .controller("gitController", function(){
            
            var me = this;
            
            this.selected = 1;
            
            this.setSelected = function(selection){
                this.selected = selection;
            };
            
            this.isSelected = function(selection){
                return this.selected === selection;
            };
            
            this.submit = function(user){
                console.log(user);
                
                me.user_info = {};
                me.user_repo = {};
                me.user_follow = {};
                
                var request_user = "https://api.github.com/users/" + user;
                var request_repos = "https://api.github.com/users/" + user + "/repos";
                var request_following = "https://api.github.com/users/" + user + "/following";
                
                //request user information
                $.ajax({
                    url: request_user,
                    success: function (result) {
                        me.user_info.user = result;
                        console.dir(result);
                    },
                    async: false
                });
                
                //request user repository
                $.ajax({
                    url: request_repos,
                    success: function (result) {
                        me.user_repo = result;
                        console.dir(result);
                    },
                    async: false
                });
                
                //request user following
                $.ajax({
                    url: request_following,
                    success: function (result) {
                        me.user_follow = result;
                        console.dir(result);
                    },
                    async: false
                });
            };
        });