#include <stdio.h>
#include <stdlib.h>

void clrsrc() {
	system("clear");
}

int main() {
	clrsrc();
	int num1, num2;
	printf("Enter number 1: ");
	scanf("%d", &num1);
	
	printf("Enter number 2: ");
	scanf("%d", &num2);
	
	printf("Sum of numbers %d + %d is %d\n", num1, num2, ( num1 + num2 ));
	return 0;
}
