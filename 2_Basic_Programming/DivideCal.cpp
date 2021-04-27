//MISSION: DIVIDE CALCULATION
//By: PALM

#include <iostream>
using namespace std;

//Calculate X divide by Y
double DivideCal(double x, double y){
	try{

		//Check if y = 0 then throw y
		if (y==0){
			throw y;
		}
		return x/y;
	}
	catch(double y){
		cout << "Exception : y must not be 0.\n";
		throw; //do not want to print result
	}
}

int main(){
	
	// Input X and Y
	double x, y;
	cout << "x : ";
	cin >> x;
	cout << "y : ";
	cin >> y;
		
	cout << "Result = " << DivideCal(x,y);
}