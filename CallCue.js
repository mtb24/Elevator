function CallCue()
{
  this.cues = [
        {floor: 7, direction: DOWN},
        {floor: 2, direction: UP},
        {floor:10, direction: DOWN},
        {floor: 0, direction: UP},
        {floor: 9, direction: DOWN},
        {floor: 9, direction: UP},
        {floor: 9, direction: IDLE},
        {floor: 7, direction: UP}
      ],
  this.add = function(floor, direction){
        // if floor not exist, add it
        var obj = {
          floor: floor,
          direction: direction
        };

        if(this.cues.every(
              function(el,index,arr){
                return el.floor !== floor || el.direction !== direction
              })){
                this.cues.push(obj);
        }
  },
  this.delete = function(floor){
        // delete floor from cue
        while(deleteMe = this.cues.find(floor)){
          this.cues.splice(deleteMe[0],1);
          console.log("deleting floor "+floor);
        }

  }
}