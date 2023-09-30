# Homebanking API Documentation
## Version: 1.0.0

**Schemes:** http

---
### /funds

#### GET
##### Summary

Retrieve the current funds balance of the authenticated user

##### Description

A response containing the user's funds or an error message

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| authorization | header | JWT token in the form "Bearer <token>" | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default | Successful | string |

#### PUT
##### Summary

Adds funds to authenticated user's balance

##### Description

A response indicating success or an error message

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| authorization | header | JWT token in the form "Bearer <token>" | Yes | string |
| body | body |  | No | [Model2](#model2) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default | Successful | string |

#### DELETE
##### Summary

Withdraws funds from authenticated user's balance

##### Description

A response indicating success or an error message

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| authorization | header | JWT token in the form "Bearer <token>" | Yes | string |
| body | body |  | No | [Model2](#model2) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default | Successful | string |

### /funds/movements

#### GET
##### Summary

Retrieves funds movements of an authenticated user

##### Description

A response containing the user's funds movements

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| authorization | header | JWT token in the form "Bearer <token>" | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default | Successful | string |

---
### /login

#### POST
##### Summary

Authenticates a user based on the provided request payload and issues a JWT token upon successful login

##### Description

A response containing a JWT token or an error message

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| body | body |  | No | [Model1](#model1) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default | Successful | string |

---
### /subscribe

#### POST
##### Summary

Registers a new user based on the provided request payload

##### Description

A response indicating success or failure

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| body | body |  | No | [Model1](#model1) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default | Successful | string |

---
### Models

#### Model1

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string | Email address in the format <email@gmail.com> | Yes |
| password | string | Password in the format <123abc> | Yes |

#### Model2

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| amount | number | Amount in the format <10> | Yes |
