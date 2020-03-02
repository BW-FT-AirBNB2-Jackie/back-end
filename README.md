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
