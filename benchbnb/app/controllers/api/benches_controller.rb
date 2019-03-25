class Api::BenchesController < ApplicationController 
    def index 
        @benches = Bench.all();
        render :index
    end 

    def create 
        @bench = Bench.find_by(params[:bench][:lat], params[:bench][:lng])
        if @bench.save 
            render :show 
        else  
            render json: { errors: @bench.errors.full_messages }, status: 422
        end
    end 

    def bench_params
        params.require(:bench).permit(:lat, :lng, :description)
    end
end 