function cell(x,y,en,uzunluq,i,j)
{
	this.x=x;
	this.y=y;
	this.en=en;
	this.uzunluq=uzunluq;
	this.left_wall = true;
	this.right_wall = true;
	this.top_wall = true;
	this.bottom_wall = true;
	this.i =i;
	this.j =j;
	this.directions = [];

	this.show = function()
	{

		noStroke();
		rect(this.x, this.y, this.uzunluq, this.en);
		
	}
	this.show_wall = function()
	{
		stroke('red');
		if(this.left_wall==true)
		{
			line(this.x,this.y,this.x,this.y+this.en);
		}
		if(this.right_wall==true)
		{
			line(this.x+this.uzunluq,this.y,this.x+this.uzunluq,this.y+this.en);
		}
		if(this.top_wall==true)
		{
			line(this.x,this.y,this.x+uzunluq,this.y);
		}
		if(this.bottom_wall==true)
		{
			line(this.x,this.y+this.en,this.x+uzunluq,this.y+this.en);
		}
	}

}