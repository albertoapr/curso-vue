new Vue({
	el: '#app',
  data: {
  	title: 'Olá Mundo'
  },
  methods: {
  	changeTitle: function(event) {
    	this.title = event.target.value;
    }
  }
});