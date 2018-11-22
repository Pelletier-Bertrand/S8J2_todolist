class EmailsController < ApplicationController
  def index
    @emails = Email.all
  end

  def destroy
    @email_delete = Email.find(params[:id])

    respond_to do |format|
    if @email_delete.destroy
      format.html { redirect_to '/', notice: 'Email was successfully destroy.' }
      format.js
        end
    end
  end
end
