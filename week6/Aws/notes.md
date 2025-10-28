What is Serverless Computing?

Definition: Serverless computing allows developers to build and run applications without managing servers.

Key Service: AWS Lambda is a popular serverless compute service that executes code in response to events and automatically manages the compute resources.

Core Benefits:

No Server Management: Eliminates the need to provision and maintain servers.

Automatic Scaling: Automatically scales applications by running code in response to each trigger.

Pay-as-You-Go: Charges only for the compute time consumed—there's no charge when your code isn't running.

🏗️ Monolithic Architecture

Definition: A traditional software architecture where all components of an application are interconnected and interdependent.

Characteristics:

Single codebase for all functionalities.

Tightly coupled components.

Challenging to scale and maintain as the application grows.



Serverless vs. Monolithic Architecture:

Aspect	        Serverless Architecture	                         Monolithic Architecture

Deployment	    Deploy individual functions independently.	     Deploy the entire application as a single unit.
Scaling	        Automatically scales with demand.	             Manual scaling required.
Cost Efficiency	Pay only for the compute time used.	             Costs associated with running entire application.
Maintenance	    Simplified maintenance with isolated functions.	 Complex maintenance due to interdependencies.



AWS Lambda in Action

Use Cases:
Building REST APIs.
Processing real-time data streams.
Automating tasks with event-driven triggers.
Running backend services without managing servers.





Security Groups

Definition: Virtual firewalls that control inbound and outbound traffic for Amazon EC2 instances.

Characteristics:

Stateful: Responses to allowed inbound traffic are automatically allowed, regardless of outbound rules.

Applied at the instance level.

Allow rules only; explicit deny rules are not supported.

Use Cases:

Restricting access to EC2 instances based on IP addresses or CIDR blocks.

Allowing specific ports (e.g., SSH on port 22, HTTP on port 80) for secure communication.

🌐 Network Access Control Lists (NACLs)

Definition: Optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.

Characteristics:

Stateless: Responses to inbound traffic are subject to outbound rules and vice versa.

Applied at the subnet level.

Supports both allow and deny rules.

Use Cases:

Providing an additional layer of security by controlling traffic at the subnet level.

Implementing custom security policies that require explicit deny rules.