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