class List extends Backbone.Model
    url: -> 
        url = "/users/#{@user_id}/lists"
        url += "/#{@list.id}" if @list.id != undefined
        url
  

class App.Models.Lists extends Backbone.Collection
  model: App.Models.List
  