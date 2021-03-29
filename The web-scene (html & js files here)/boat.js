addEventListener("keydown", keyDown);

var xRotation = 0;
var interval;
var step = 0.05;

function keyDown(evt)
{
	switch(evt.keyCode)
	{
		case 40:
			moveShipZ(0.5, 3.14);
			break;
		case 38:
			moveShipZ(-0.5, 0);
			break;
		case 37:
			moveShipX(-0.5, 1.57);
			break;
		case 39:
			moveShipX(0.5, 4.71);
			break;
	}	
}

function moveShipZ(zChange, rotation)
{
	var boatRotation = document.getElementById('ship').getAttribute("rotation").split(" ");
	var shipCoords = document.getElementById('ship').getAttribute("translation").split(" ");
	var zCoord = Number(shipCoords[2]);
	
	zCoord += zChange;
	shipCoords[2] = String(zCoord);
	
	
	
	if(zCoord >= -35 && zCoord <= 51)
	{
		xRotation = rotation;
		if(Number(boatRotation[3]) + step >= xRotation && xRotation >= Number(boatRotation[3]) - step)
			document.getElementById('ship').setAttribute("translation", shipCoords.join(" "));
		else interval = setInterval(rotateBoat, 5);
	}
}

function moveShipX(xChange, rotation)
{
	var boatRotation = document.getElementById('ship').getAttribute("rotation").split(" ");
	var shipCoords = document.getElementById('ship').getAttribute("translation").split(" ");
	var xCoord = Number(shipCoords[0]);
	
	xCoord += xChange;
	shipCoords[0] = String(xCoord);
	
	
	if(xCoord >= -18 && xCoord <= 18) 
	{
		xRotation = rotation;
		if(Number(boatRotation[3]) + step >= xRotation && xRotation >= Number(boatRotation[3]) - step)
			document.getElementById('ship').setAttribute("translation", shipCoords.join(" "));
		else interval = setInterval(rotateBoat, 5);
	}
}

function rotateBoat()
{
	var boatRotation = document.getElementById('ship').getAttribute("rotation").split(" ");
	if (Number(boatRotation[3]) + step >= xRotation && xRotation >= Number(boatRotation[3]) - step)
	{
		clearInterval(interval);
		interval = undefined;
	} 
	else 
	{
		if(xRotation > Number(boatRotation[3]))
			boatRotation[3] = String(Number(boatRotation[3]) + step);
		if(xRotation < Number(boatRotation[3]))
			boatRotation[3] = String(Number(boatRotation[3]) - step);
		document.getElementById('ship').setAttribute("rotation", boatRotation.join(" "));
	}
}
function resetShip()
{
	document.getElementById('ship').setAttribute("translation", "0 0 31.4678");
}