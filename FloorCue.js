function FloorCue()
{
      this.floorsRequested = [];
      this.add = function(floor){
      	  // only add floor if not already in cue
      	  if( this.floorsRequested.indexOf(floor) < 0){
      	  	  this.floorsRequested.push(floor);
      	  }
      },
      this.delete = function(floor){
      	  this.floorsRequested.slice(this.floorsRequested.indexOf(floor),1);
      }
}