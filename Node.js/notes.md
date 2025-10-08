**Nodejs is a javascript runtime environment.

node bhi v8 engine se bana hai

cryptography, encryption, hashing, filesystem, added here and ui related features like dom manipulation, window object removed - from v8 engine


node is all about modules - all programme divided into components and we export and import them for different purposes , it is called modular programming.

node.js architecture

all the requests from the client comes and enters at the event queue, event loop always watches those requests and works as fifo, 
two types of requests- blocking operations- async tasks, non-blocking operations - sync tasks

sync tasks process first and and response sends to client, 

non blocking first comes to thread pool
 we assign a thred(worker) to the process and it process it and returns response to the client