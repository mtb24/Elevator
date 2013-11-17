function Elevator(bottom, top)
{
  this.bottom_floor = bottom;
  this.top_floor = top;
  this.currentFloor = 0;
  this.direction = IDLE;
  this.move = function(direction){
		// already at top floor
		if ((this.currentFloor + direction) > this.top_floor){
			this.direction = DOWN;
			console.warn("Elevator already at top floor");
		} 
        // already at bottom floor
		else if ((this.currentFloor + direction) < this.bottom_floor){
			this.direction = UP;
			console.warn("Elevator already at bottom floor");
		}
		else {
			this.currentFloor += direction;
		    this.direction = direction;
		    console.info( this.currentState() );
		}
  };
  this.stop = function(){
    this.direction = IDLE;
  };
  this.currentState = function(){
    return "Elevator at floor " + this.currentFloor + " " + (this.direction === IDLE ? "idle" : (this.direction > 0 ? "going up" : "going down"));
  };
}