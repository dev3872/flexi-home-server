# Flexi Abode

## Created By:
|Name|Email|
|----|-----|
|Nirnant Verma||
|Pankaj Yadav||
|Rohit Bhatt|jsdev@student.iul.ac.in|

## DESCRIPTION

Online FlexiAbode is a web based application where Property Owner, Contractors and
Consumers come forward together to manage their property. It allows an easy and flexible
way to communicate property between Seller and User. Sellers can post his property for
Sell, Rent and P.G. Users interested can look through the property by using filters and
contact Owner. There is also an admin panel where the admin can manage the properties
and look through the statistics.

- [Goals](#goals)
- [Tools](#tools)
- [Functionalities](#functionalities)
- [API created](#api)

## Goals

1. Goal of the project is to create an interface for interaction between user and seller
2. Database used to store data of property posted and clients registered.
3. Provide a secure database and hashed passwords
4. Improve UI and provide a good user experience
5. Connect User and Sellers through email and chat
6. Deploy Website online on heroku for live public access

## Tools

* Reactjs
> Helps to create stateful components that can be reused and provides easy and
interactive UI
* Nodejs
> Asynchronous event driven javascript runtime for building scalable applications
* Mongoose
> Cross platform, nosql database
* Expressjs
> For creating and managing routes
* Material UI
> Provides interactive components for Reactjs
* Redux
> Redux provides a state management system in reactjs.
* Heroku
> Website will be deployed in heroku for live access.

## Functionalities

1. Security: 
> Implementation of JWT (JSON Web Token) is used for creating data with signature/key
using a payload that contains name, password etc. Key is a private string known to
provide encryption.
2. Functionalities:
> Owner can post a property, buy a property, and rent rooms for PG.
Dealers can perform the same functions as an Owner.
Brokers can buy and sell property
Roommates can search for rooms for rent.
3. Commercial and Residential Properties are available to users as preference and
selecting one provides the further options. This UX provides users with an interactive
layout for posting properties.
4. Users can filter through choices based on queries and only the desired results will be
displayed.
5. Logged in users can connect with owners of interested properties and carry forward the
business.
