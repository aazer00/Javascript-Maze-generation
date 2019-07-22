var cl = [];
var cl_visited = []
var size = 20;
function setup() {
	createCanvas(600,600);
	var x = 10;
	var y = 10;
	for(var i = 0; i < size; i++)
	{
		cl[i]=[];
		cl_visited[i]=[];
		for(var j = 0; j < size;j++)
		{
			cl[i][j] = new cell(x,y,20,20,i,j);
			cl_visited[i][j]=false;
			x += 20;
		}
		x = 10;
		y += 20;
		
	}
	
	
}

function draw() {
	background(50);

	for(var i = 0; i < size; i++)
	{
		
		for(var j = 0; j < size;j++)
		{
			cl[i][j].show();

		}
				
	}
	for(var i = 0; i < size; i++)
	{
		
		for(var j = 0; j < size;j++)
		{
			cl[i][j].show_wall();
			
		}
				
	}
	
  // put drawing code here
}

function generate_maze(i,j)
{
	
	cl_visited[i][j]=true;
	
	

	while(true)
	{
		cl[i][j].directions = [];
		if(i>=0&&j-1>=0&&i<size&&j-1<size)
			if(cl_visited[i][j - 1]==false)
		{
			append(cl[i][j].directions, cl[i][j-1]);
		}
		if(i>=0&&j+1>=0&&i<size&&j+1<size)
		if(cl_visited[i][j + 1]==false)
		{
			append(cl[i][j].directions, cl[i][j+1]);
		}
		if((i-1)>=0&&j>=0&&i-1<size&&j<size)
		if(cl_visited[i-1][j]==false)
		{
			append(cl[i][j].directions, cl[i-1][j]);
		}
		if((i+1)>=0&&j>=0&&i+1<size&&j<size)
		if(cl_visited[i+1][j]==false)
		{
			append(cl[i][j].directions, cl[i+1][j]);
		}
		console.log(i,j);
		console.log(cl[i][j].directions.length);
		if(cl[i][j].directions.length==0) return;
		r =int(random(0,cl[i][j].directions.length));
		
		var c = cl[i][j].directions[r];
				
		
		if(c.i-i==1)
		{
			cl[i][j].bottom_wall=false;
			c.top_wall=false;
		}
		if(c.i-i==-1)
		{
			cl[i][j].top_wall=false;
			c.bottom_wall=false;
		}
		if(c.j-j==1)
		{
			cl[i][j].right_wall=false;
			c.left_wall=false;
		}
		if(c.j-j==-1)
		{
			cl[i][j].left_wall=false;
			c.right_wall=false;
		}

		//console.log(c);
		console.log(cl_visited[c.i][c.j]);
		generate_maze(c.i, c.j);
	}
}

function mouseClicked() {
  generate_maze(4,4);
}