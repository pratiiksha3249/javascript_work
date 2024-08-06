#include<bits/stdc++.h>
using namespace std;
class Node {
public:
    int data;
    Node* next;
    Node(int d)
    {
        data = d;
        next = NULL;
    }

};

    void addElement(Node* &head,int num){
        Node*newnode;
        newnode->data=num;
        newnode->next=head;
        head=newnode;
        newnode->next=NULL;

    }

void disp(Node* &head){
           cout<<head->data;
}

int main(){

 Node * n= new Node(10);
 Node*head;
 addElement(head,n);
//  disp();
return 0;
}
