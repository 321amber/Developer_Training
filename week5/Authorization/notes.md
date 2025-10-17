in authorization we need to give acces to the users about what they can do or not,
if we add a column such as role which is in a global table and do authorization based on those roles, that is known as Role Based Access Control, RBAC

RBAC is a simplest type of authorization, but if there is a very big app and we several users, admin etc, 
there we have to assign the resources to users or admins for authorization , it is called Fine Grained Access Control.


Attribute based access control:kind of inheritance and we make several tables and defined roles and relations in it. which makes more dynamic and better authorization control. 

Policy based access controls: in aws or several cloud based databases, we use it, instead of mapping different tables like access control, we make a seperate policy table and add diff relation and things there to access. like effect, access, actions etc.




owner FGA tool se bana sakte hai RBAC/FineGrained etc.