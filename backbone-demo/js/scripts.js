// Backbone Model

var Blog = Backbone.Model.extend({
	defaults: {
		author: '',
		title: '',
		url: ''
	}
})

//Backbone Collection

var Blogs = Backbone.Collection.extend({
	url: 'http://localhost:3000/api/blogs'
});

// instantiate two Blogs

// var blog1 = new Blog({
// 	author: 'Mike',
// 	title: 'Mike\'s Blog',
// 	url: 'http://google.com/'
// })

// var blog2 = new Blog({
// 	author: 'Mini',
// 	title: 'Mini\'s Clip',
// 	url: 'http://miniclip.com/'
// })

//instantiate a collection

var blogs = new Blogs(/*[blog1, blog2]*/);

// Backbone View for one blog

var BlogView = Backbone.View.extend({
	model: new Blog(),
	tagName: 'tr',
	initialize: function() {
		this.template = _.template($('#blogs-list-template').html());
	},
	events: {
		'click #edit-blog': 'edit',
		'click #update-blog': 'update',
		'click #cancel': 'cancel',
		'click #delete-blog': 'delete',
	},
	edit: function () {
		this.$('#edit-blog').hide();
		this.$('#delete-blog').hide();
		this.$('#update-blog').show();
		this.$('#cancel').show();

		var author = this.$('.author').html();
		var title = this.$('.title').html();
		var url = this.$('.url').children('a').attr('href');

		this.$('.author').html(`<input type="text" class="form-control author-update" value='${author}'>`);
		this.$('.title').html(`<input type="text" class="form-control title-update" value='${title}'>`);
		this.$('.url').html(`<input type="text" class="form-control url-update" value='${url}'>`);
	},
	update: function (){
		var author = this.$('.author-update').val();
    	var title = this.$('.title-update').val();
		var url = this.$('.url-update').val();
		this.model.set({author:author, title:title, url:url});
		this.$('#edit-blog').show();
		this.$('#delete-blog').show();
		this.$('#update-blog').hide();
		this.$('#cancel').hide();
	},
	cancel: function(){
		this.render();	
	},
	delete: function(){
		this.model.destroy();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

// Backbone View for all blogs

var BlogsView = Backbone.View.extend({
	model: blogs,
	el: '.blogs-list',
	initialize: function() {
		this.model.on('add', this.render, this);
		this.model.on('change', this.render, this);
		this.model.on('remove', this.render, this);
		this.model.fetch({
			success: function(response){
				_.each(response.toJSON(), function(item){
					console.log('Successfully GOT blog with _id: ' + item._id);
				})
			},
			error: function(){
				console.log('Failed to get blogs!');
			}
		});
	},
	render: function() {
		var self = this;
		this.$el.html("");
		_.each(this.model.toArray(), function (blog) {
			self.$el.append((new BlogView({model: blog})).render().$el);
		});
		return this;
	}
});

var blogsView = new BlogsView();

$(document).ready(function(){
	$('#add-blog').on('click', function(){
		var blog = new Blog({
			author: $('#author-input').val(),
			title: $('#title-input').val(),
			url: $('#url-input').val()
		});
		$('#author-input, #title-input, #url-input').val('');
		blogs.add(blog);

		blog.save(null, {
			success: function(response){
				console.log('Successfully SAVED blog with _id ' + response.toJSON()._id);
			},
			error: function(){
				console.log('Failed to save blog!');
			}
		});
	})
})