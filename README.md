# RV Camping AirBNB2

## Deployed site https://rvbnb2.herokuapp.com/

## Authentication Endpoints:

**Landowners and RV Owners have different endpoints for login and register. They do however require and return the same information when successfully registered and logged in.**

## (landowners) **POST** /api/auth/landowners/register

#### Expected request body:

```
{
"username": "test",
"password": "test",
"email": "test@email.com
}
```

#### Returns:

```
{
"id": 4,
"username": "test"
"email": "test@email.com
}
```

## (landowners) **POST** /api/auth/landowners/login

#### Expected login body:

```
{
"username": "test",
"password": "test",
"email": "test@email.com
}
```

#### Returns:

```
{
"message": "Welcome test",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJkb25hbGQiLCJpYXQiOjE1ODMwODM3MzgsImV4cCI6MTU4MzE3MDEzOH0.iGIAi5HxSdNmH8PcgiyIABNV7PU1WrJIDIaaQEvA1S4"
}
```

## (RV Owners) POST /api/auth/rvowners/register

## (RV Owners) POST /api/auth/rvowners/login

# USER/RV OWNERS (protected) endpoints:

## GET api/users/

#### Gets a list of users. You probably wont need this but this is the baseURL for the next few endpoints. Every url beginning with /api/users will require an authorization header.

```
{
    "authorization": "whatever the token for that user is"
}
```

## GET /api/users/id

#### Gets the user information by id

## DELETE /api/users/:id

#### Deletes the user with that id

## GET /api/users/:id/listings

#### Gets the listings for a landowner with that id

# LANDOWNERS (protected) endpoints:

## GET api/landowners/

Gets a list of landowners. You probably wont need this but this is the baseURL for the next few endpoints. Every url beginning with /api/landowners will require an authorization header.

```
{
    "authorization": "whatever the token for that landowner is"
}
```

## DELETE /api/landowners/:id

### Deletes the landowner with that id

## GET /api/landowners/:id/listings++

# LISTINGS endpoints:

## GET api/listings/

### Gets the all the listings

## GET /api/listings/:id

### Gets the listing for that id

## POST /api/listings

### Lets you create a new listing

```
[
    {
        "id": 3,
        "location": "456 Beach Ave, Pensacola, FL 32525",
        "description": " 5 acres of ocean view property waiting for you",
        "price": 75,
        "image": "https://unsplash.com/photos/KMn4VEeEPR8",
        "start_date": "04/23/20",
        "end_date": "04/27/20"
    }
]
```

## PUT /api/listings/:id

### Lets you update a listing with that id

```
[
    {
        "id": 3,
        "location": "456 Beach Ave, Pensacola, FL 32525",
        "description": " 5 acres of ocean view property waiting for you",
        "price": 75,
        "image": "https://unsplash.com/photos/KMn4VEeEPR8",
        "start_date": "04/23/20",
        "end_date": "04/27/20"
    }
]
```

## DELETE api/listings/:id

### Lets you delete a listing with that id
