//MISSION: SPLIT STRING SEPARATE BY COMMA 
//By: PALM

#include <iostream>
#include <string>
using namespace std;

int main(){
	
	//Input String
	string str;
	getline(cin,str);

	while(!str.empty()){
		try{
			
			//Check to Skip space
			if(isspace(str[0])){
				throw 1;
			}
			cout << str[0];
			str.erase(0,1);
			
			//Check if string is EMPTY then do not add comma
			if(str.empty()){
				throw str;
			}
			cout << ", ";
		}
		catch(int i){
			str.erase(0,1); //Remove space
		}
		catch(string s){
			break; //String is empty
		}
	}

	return 0;
	
}
