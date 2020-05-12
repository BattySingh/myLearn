#include <stdio.h>
#include <stdlib.h>

void clrsrc() {
	system("clear");
}

int main() {
	clrsrc();
	int x;
	printf("Enter the value of x: ");
	scanf("%d", &x);
	
	printf("Square of %d is %d\n", x, ( x * x ));
	return 0;
}
