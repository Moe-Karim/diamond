num = int(input("Enter rows number:"))
for i in range(num):
    print(" " * (num-i-1), "*" * ((i*2)+1))
for i in range(num-2,-1,-1):
    print(" " * (num-i-1),"*" * ((i*2)+1))
