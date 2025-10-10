posgre is a ORDBMS(object relational)
features:-
multi version concurrency control (MVCC)
granual access control
tableaccess
asynchronous replication
online/hot backups. write ahead logging
supports international character set
highly scalable both in the quality of data
write ahead feature makes it hifhly fault tolerance.

PostgreSQL utilizes a client-server architecture, with a master Postmaster process that accepts client connections and forks a new backend process for each connection.

Client (Frontend): User applications (e.g., a web application) that send queries to the PostgreSQL server. 
Server (Backend): The primary PostgreSQL program that listens for and processes client requests. 
Postmaster: The initial master process that handles client connections and authenticates them before creating a dedicated backend process. 
Backend Processes: Independent processes, one for each client connection, that execute queries and return results to the client. 
Shared Memory: A dedicated memory area used for database caching, particularly the Shared Buffer and WAL buffer. 
Shared Buffers: A cache in shared memory where data blocks read from disk are stored, significantly reducing disk I/O for frequently accessed data. 
WAL (Write-Ahead Log) Buffer & Files: A buffer to store changes to the database before they are written to the main data files. These logs are critical for recovery and consistency in case of failures. 
Background Processes: Processes such as the WAL writer, background writer, and checkpointer that perform essential maintenance tasks, like writing WAL data to disk and managing checkpoints. 


How it Works
Client Connection: A client application connects to the Postmaster process, which listens on a specific network port. 
Process Forking: The Postmaster authenticates the client and then creates a new, independent backend process for that specific connection. 
Query Execution: The backend process handles the client's queries, interacting with the shared buffers and WAL buffers instead of directly accessing disk. 
Data Buffering: Data is read from disk and placed into the shared buffers for faster access. Changes are temporarily held in the WAL buffer before being written to WAL files. 
Data Persistence: Background processes periodically write changes from the WAL buffers to WAL files and flush modified data from the shared buffers to the disk as part of a checkpoint operation, ensuring data is persistently stored. 
Result Delivery: Once a query is processed, the backend process sends the results directly back to the client. 


Clauses in postgresql
where - to specify any property
distinct - distinct(unique) values to find
order by - used for sorting of the data, for reverse DESC.
limit - limit -3, numbers we want to see from starting.
like - if we want to find the patterns, like 'A%' start me A fir kuchh bhi, like '%A' end me A hona chahiye, case sensitive, like '%i%' beech me i hoga kahi bhi to. like '__', only two charcters hone chahiye, like "_a%, second character a ho baki kuchh bhi.


operators:
we can use =, >, <, >=, <=, !=, IN(and list of all properties comma sep.), AND, OR, NOT, Between something AND somthing. values will also be included.

Aggregation functions:
count(any col(use primary key if want to total)), sum(col name), avg(col name), min(col name), max(col name)

Group by:
if we want to group different fields of any col(property), then we can use group by, ex group by dept.
* will not work, only fetch particular columns we want, and can use count(primary key) or any aggregation func

String Functions:
concat = string ko jodna concat(first_col, second_col)
concat_ws = we want to get string with seperator , concat('_(may be any seperator)', first_col, last_col)
substr = substr(string, start, end)
left = left se kitne charracter chahiye, left(string, 5);
right = right se kitne character chahiye
upper = to uppercase
lower = to lowercase
trim = used to trim spaces from starting and end
ltrim,
rtrim,
replace = replace(string, from_str, to_str) = from_str = kisko change karna hai, to_str = jisko change karna hai
position = position of any work at given string, position('om', 'thomos') = ans will be 3
reverse= simple reverse
length= length of the string
string_agg


subQuery:
query ke andar query;
ex:how to find employees with largest salaries.

select * from employees
where
salary=(select max(salary) from employees);

Round Function:
round( decunmal number);

Altering Tables:
adding/removing column:-
alter table employees
add/drop column age int;

remane column or table name:
alter table employee
rename column name TO full_name;

renaming table:
alter table emp to employees;

modifying a column:
alter table employees
alter column name 
set data type varchar(150);

alter table employees
alter column name
set default 'unknown';

to delete use deop instead of set.

check constraints:
create table enquiry(
    name varchar(100),
    mob int check (length(mob)>10)
);

named constraints: we can name the constraints after writing the constraint and then the name of the constriants.

Case Expression:
we can add a column and make a case like if else or switch case statements to see those data as a cases

select name, salary
case
    when salary>=50000 then 'High'
    else 'low'
end as salary_catagory   // the new name of the cases
from employees;


foreign key: using primary key of one table to another table is called foreign key for that table.
syntax: foreign key(key name) references
othre_table_name(col name) 

CREATE TABLE customers (  

          cust_id SERIAL PRIMARY KEY, 

          cust_name VARCHAR(100) NOT NULL 

);

CREATE TABLE orders ( 

            ord_id SERIAL PRIMARY KEY, 

            ord_date DATE NOT NULL, 

            price NUMERIC NOT NULL,

            cust_id INTEGER NOT NULL, 

            FOREIGN KEY (cust_id) REFERENCES 

            customers (cust_id) 

);



joins:
joins is operation used to combine rows from two or more tables based on a related column between them.
cross join: every rows from one table joins to every row from another table.
select * from customers CROSS JOIN orders;

inner join: Returns only the rows where there is a match between the specified columns in both the left (or first) and right (or second) tables.
select * from customers c
INNER JOIN
orders o
IN c.cust_id=o.cust_id;

left join: Returns all rows from the left (or first) table and the matching rows from the right (or second) table.

right join: Returns all rows from the right (or second) table and the matching rows from the left (or first) table.




Views:
these are temperory tables which we can access easily from single click.
create view (new table name) and then all the command which we are using to get the new table.
it is temperory table not data itslef, only stored query.


Having clause:
whenever we use group by clause , if we want to use any condition we have to use HAVING not where. if we will use where, it will give error.


select COALSEC(col_name, (if null the value provided here will appear)) and .....

ROLLUP(total_price) etc. it is used with group by, to get total value
