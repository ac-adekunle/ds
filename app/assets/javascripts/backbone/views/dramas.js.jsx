
var MyWidget = React.createClass({
  handleClick: function() {
    alert('Hello!');
  },
  render: $(function(){
    return (<div>Hello, world!</div>);
})
});

var MyView = Backbone.View.extend({
  el: 'body',
  template: '<div class="widget-container"></div>',
  render: function() {
    this.$el.html(this.template);
    React.render(React.createElement(MyWidget), this.$('.widget-container').get(0));
    return this;
     console.log(this); 
  }
});

new MyView().render();