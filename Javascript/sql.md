### Keywords of SQL ### 

1). Show database;
2). use database_Name;
3). select * from Table_Name;
4). show **columns** from Table_Name;
5). **Where** ex:- 
    select firstName from employees *where* firstName = 'Mary';

6). **And**
    select firstName from employees where officeCode = '3' *and* jobTitle = 'sales rep';

7). **OR** 
    select firstName from employees where officeCode = '3' *or* jobTitle = 'sales rep';

8). **Select Distinct** 
    select distinct lastName from employees order by lastname desc;
    select distinct city,state from customers where state is not null;

9). **Between**
    select officeCode from employees where officeCode between 1 and 3
    -: same as :-
    select productCode from products where buyPrice >= 90 and buyPrice <= 100

10). **Cast**
    select orderNumber from orders where requireddate is between *Cast*('2003-01-14' as DATE) and *cast*('2005-06-19' as DATE)

11). **Like** (_ %)
    select lastName from employees where lastName *like* 'a%';       --> finds a string that starts with 'a'.
    select lastName from employees where lastName *like* '%on';      --> finds a string that ends with 'on'.
    select lastName from employees where lastName *like* '%on%';     --> finds a string that contains the substring 'on'. 
    select productCode from products where productCode *like* %\_20%  --> if we are using an escape character '\'

12). **Limit** 
    Select select_list from table_name limit [offset] row_count;
    *Offset* & *row_count* - Offset is just like array index which also starts from zero. 
    select customerNumber,customerName ,creditlimit from customers oder by creditlimit desc limit 5;
    select customerNumber,customerName ,creditlimit from customers oder by creditlimit,customerNumber desc limit 5;
