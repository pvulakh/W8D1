class Api::SessionsController < ApplicationController 

    def create 
        #debugger
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user 
            login!(@user)
            render 'api/users/show'
        else 
            render json: { errors: "invalid username/password" }, status: 404
        end 
    end 

    def destroy
        if logged_in?
            logout
            render json: {}, status: 202
        else  
            render json: { errors: "no user to log out"}, status: 404
        end
    end 
end 