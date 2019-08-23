const hbsHelper = require ("hbs")

hbsHelper.registerHelper("dropdownHelper", function(x, y){
    if (x == undefined)
        return "";
        if(x == y){
            return "selected"
        } else {
            return ""
        }
})



module.exports = {
    hbsHelper
}