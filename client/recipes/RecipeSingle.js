Template.RecipeSingle.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});
});


Template.RecipeSingle.helpers({
	recipe: ()=> {
		return Recipes.findOne({});
	}
});