import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [  {id:'1',name:"Groccery ToDo"},
				  {id:'2',name:"Laundry ToDo"},
				  {id:'3',name:"Stationery ToDO"}
				]
	};
});
