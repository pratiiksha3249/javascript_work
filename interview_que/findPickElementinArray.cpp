// a[5,7,4,9,6,99]
#include<iostream>
using namespace std;
int main(){
  int a[20]={5,7,4,9,98,6};
  int max=0;
  for(int i=0;i<5;i++){
            if(max<a[i]){
                max=a[i];
            }
            
  }
cout<<"max no is :"<<max;


    return 0;
}