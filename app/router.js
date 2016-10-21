import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('todo');
  this.route('lists');
  // this.route('list');
  this.route('lists',function(){
  	this.route('list',{path:'/:lists_id'}, function(){
  		// this.route('list',{path:'/:list_id'})
  	});
  });
  // this.route('list');
});

export default Router;
