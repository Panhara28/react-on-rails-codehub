class Api::BlogsController < ApplicationController
  def index
    @blogs = Blog.all
    render json: { blogs: @blogs }
  end

  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      render json: { params: params }
    else
      render json: { params: params }
    end
  end

  private
    def blog_params
      params.require(:blog).permit!
    end
end
