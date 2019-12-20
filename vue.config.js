
module.exports = {
	publicPath: '/',
	css: {
		loaderOptions: {
		  scss: {
		    prependData: `
		    	@import "~@/components/00-environment/00-colours/_variables.scss"; 
		    	@import "~@/components/00-environment/01-fonts/_variables.scss"; 
		    	@import "~@/components/00-environment/03-layout/_variables.scss"; 
		    	@import "~@/components/00-environment/04-typography/_variables.scss"; 
		    	`
		  }
		}
	}
};