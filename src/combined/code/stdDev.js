/*
Method for calculating running variance taken from B.P. Welford's 1962 solution. See https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Online_algorithm

def online_variance(data):
    n = 0
    mean = 0.0
    M2 = 0.0
     
    for x in data:
        n += 1
        delta = x - mean
        mean += delta/n
        M2 += delta*(x - mean)

    if n < 2:
        return float('nan')
    else:
        return M2 / (n - 1)

See https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Online_algorithm
*/

outlets = 1;
setinletassist(0, "Sample value");
setoutletassist(0,"Running standard deviation");


//global variables
var n; 
var mean;
var M2;
var stdD;
var target;

function reset(t)
{
	n = 0;
	mean = 0.0;
	M2 = 0.0;
	stdD = 0.0;
	target =t
	outlet(0, stdD);
//	outlet(1, 0);
//	outlet(2,0);
//	outlet(3,0);
//	outlet(4,0);
//	outlet(5,target);
}	

function msg_float(v)
{
	standardDev(v);
}

function msg_int(v)
{
	standardDev(v);
}

function standardDev(x)
{
	n +=1;
	delta = x - mean
	mean += delta /n ;
	M2 += delta*(x - mean);
	if (n <= 2) {
		stdD = target;
	} else {
		stdD = Math.sqrt(M2/(n-1));
	}
	
 /*   n+=1;
	oldMean = mean;
	mean += (x-mean)/n*/
	outlet(0,stdD);
//	outlet(1,n);
//	outlet(2,delta);
//	outlet(3, mean);
//	outlet(4, M2);
//	outlet(5, x);
}

function bang()
{
	outlet(0,stdD);
}

