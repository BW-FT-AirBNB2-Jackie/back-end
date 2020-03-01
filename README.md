# RV Camping AirBNB2

## Authentication Endpoints:

**Landowners and RV Owners have different endpoints for login and register. They do however require and return the same information when successfully registered and logged in.**

## (landowners) **POST** /api/auth/landowners/register

#### Expected request body:

```
{
"username": "donny",
"password": "pass1"
}
```

#### Returns:

```
{
"id": 4,
"username": "donny"
}
```

## (landowners) **POST** /api/auth/landowners/login

#### Expected login body:

```
{
"username": "donny",
"password": "pass1"
}
```

#### Returns:

```
{
"message": "Welcome donald",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJkb25hbGQiLCJpYXQiOjE1ODMwODM3MzgsImV4cCI6MTU4MzE3MDEzOH0.iGIAi5HxSdNmH8PcgiyIABNV7PU1WrJIDIaaQEvA1S4"
}
```

## (RV Owners) POST /api/auth/rvowners/register

## (RV Owners) POST /api/auth/rvowners/login
