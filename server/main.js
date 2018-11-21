import { Meteor } from 'meteor/meteor'

import playlist from "../imports/db/playlist";


Meteor.startup(() => {
  if( playlist.find().count() <= 0 )
  {
    playlist.insert(
      {
        song : "Somebody to loveeee"
      }
    );
  }
});
