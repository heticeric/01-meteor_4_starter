import { Template } from "meteor/templating";
import playlist from "../imports/db/playlist";

Template.songs.helpers
(
    {
        playlist : function()
        {
            return playlist.find();
        }
    }
)