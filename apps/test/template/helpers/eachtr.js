define(['Handlebars'], function(Handlebars){
        function eachtr(trs) {
            var result = '';
            for(var tr in trs) {
                result += '<dt>'+trs[tr].display_name+'</dt>';
                result += '<dd>'+trs[tr].description+'</dd>';
            }
            return new Handlebars.SafeString(result);
        }

        Handlebars.registerHelper('eachtr', eachtr);
        return eachtr;
});
