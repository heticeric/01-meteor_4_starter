import { Template } from "meteor/templating";
import playlist from "../imports/db/playlist";


Template.form.events
(
    {
        "click #submit" : function( event, template )
        {
            playlist.insert
            (
                { 
                    song : template.find( "#song" ).value
                }
            )
        }

    }
)