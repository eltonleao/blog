const Model = function(siteData){
    var env = this;
    this.siteData = siteData;
    this.database;

    this.loadDatabase = function(){
        try {
            
            return $.ajax({
                type: "GET",
                url: env.siteData.url,
                success: function(result){
                    return result;
                },
              });

        } catch (error) {
            console.log(error);
        }
    }
}

export default Model;