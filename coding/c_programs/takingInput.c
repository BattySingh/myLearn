#include<stdio.h>
#include<stdlib.h>

void clrsrc() {
	system("clear");
}

int main() {
	int x;
	printf("Enter the value of x: ");
	scanf("%d", &x);
	printf("Value of x is %d\n", x);
	return 0;
}
