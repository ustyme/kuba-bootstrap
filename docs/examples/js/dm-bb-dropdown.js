/*
 * -- Example - static items from template
 */

$(function(){

	var View = Dropdown.extend({
    	template: Handlebars.compile($('#staticMenu').html()),
    	initialize: function(options) {
      		console.log('initialize');
    	},
    	render: function() {
      		this.$el.html(this.template(this));
      		
      		return this;
    	}
  	});

  	// View declaration

  	var dropdown = new View({parentEl: '#staticPane', buttons: ['#staticMenuButton', '.icon-remove'] });

});

/*
 * -- Example - dynamic items from static template
 */

$(function(){

	var View = Dropdown.extend({
		initialize: function(options){
			console.log('initialize');
		},
		render: function(){
			return this;
		}
	});

	// Model mockup

	var model = Backbone.Model.extend({
		item: ''
	});

	var item_1 = new model({item: 'item 1'}),
		item_2 = new model({item: 'item 2'}),
		item_3 = new model({item: 'item 3'});

	var collection = Backbone.Collection.extend({
		model: model
	});

	var items = new collection([item_1, item_2, item_3]);

	// View declaration

	var dropdown = new View({parentEl: '#dynamicPane', buttons: ['#dynamicMenuButton'], items: items });

});

/*
 * -- Example - dynamic items from template
 */

$(function(){

	var View = Dropdown.extend({
		initialize: function(options){
			console.log('initialize');
		},
		render: function(){
			return this;
		}
	});

	// Model mockup

	var model = Backbone.Model.extend({
		item: ''
	});

	var item_1 = new model({name: 'name 1', text: 'text 1'}),
		item_2 = new model({name: 'name 2', text: 'text 2'}),
		item_3 = new model({name: 'name 3', text: 'text 3'});

	var collection = Backbone.Collection.extend({
		model: model
	});

	var items = new collection([item_1, item_2, item_3]);

	// View declaration

	var dropdown = new View({parentEl: '#dynamicTemplatePane', itemTemplate: '#dynamicMenu', buttons: ['#dynamicTemplateMenuButton'], items: items });

});

/*
 * -- Example - dynamic items from sub view
 */

$(function(){

	var View = Dropdown.extend({
		initialize: function(options){
			console.log('initialize');
		},
		render: function(){
			return this;
		}
	});

	// Model mockup

	var model = Backbone.Model.extend({
		item: ''
	});

	var item_1 = new model({name: 'name 1', click: 'click1'}),
		item_2 = new model({name: 'name 2', click: 'click2'}),
		item_3 = new model({name: 'name 3', click: 'click3'});

	var collection = Backbone.Collection.extend({
		model: model
	});

	var items = new collection([item_1, item_2, item_3]);

	// Sub view mockup
	var subView = Backbone.View.extend({
		tagName: 'li',
		template: Handlebars.compile($('#dynamicMenuWithActions').html()),
		render: function(){
			this.$el.html(this.template(this.options.item.toJSON()));

			return this;
		},
		events: function(){
			var events = {};

			events[upEvent + '#' + this.options.item.attributes.click] = this.click;

			return events;
		},
		click: function(){
			alert('click');
		}
	});


	// View declaration

	var dropdown = new View({parentEl: '#subViewPane', itemView: subView, buttons: ['#subViewMenuButton'], items: items });

});



