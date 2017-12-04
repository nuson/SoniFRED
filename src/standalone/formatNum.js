/*
Create fixed width floats as message box won't pad out short numbers
*/

outlets = 1;

function msg_float(n)
{
   outlet(0, n.toFixed(3)) ;	
}