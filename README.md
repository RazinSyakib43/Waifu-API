# Waifu-API
<img align=center src="https://pa1.narvii.com/6828/192f8cf714fc07718f1e3d259166595f0ce35940_hq.gif">
Waifu-API is a REST API that provides comprehensive information about various kawaii, cute, and adorable waifu characters. This API allows users to access data such as character names, anime origin, images, age, height, weight, and other interesting details. By utilizing waifu-API, you can easily integrate waifu data into your applications or projects, whether it's for game development, websites, or mobile applications.

# How To Use
The Waifu API allows you to manage a collection of waifus. You can perform operations like retrieving all waifus, adding a new waifu, updating a waifu, and deleting a waifu. Follow the instructions below to use the API effectively.

- Local Host: Run with Postman, local IP and Port:5000 `http://127.0.0.1:5000/waifus` or `http://localhost:5000/waifus`
- Online Domain : https://waifu-api-3xtoc3ewhq-et.a.run.app

# Endpoint Routes

- ### **[GET]** Retrieve all waifus
Send a GET request to `/waifus` to retrieve all waifus.

Request:
```
  **GET** /waifus
```

Response:
```
  {
    "id": "59e1cd02-a422-4269-a7e5-a7cfdde41f85",
    "name": "Mitsuha Miyamizu",
    "anime": "Kimi no Nawa",
    "age": 17,
    ....
  }
```
- ### **[GET]** Retrieve a specific waifu by ID
To retrieve a specific waifu, send a GET request to `/waifus/:id`, replacing `:id` with the ID of the waifu you want to retrieve.

Request:
```
  **GET** /waifus/36e565e6-68da-4384-be27-b255a93d5e1d
```

- ### **[POST]** Add a new waifu
To add a new waifu, send a POST request to `/waifus` with the waifu details in the request body. Specify the `name`, `anime`, and `age` of the waifu.

Request:
```
  **POST** /waifus
  Content-Type: application/json
  
  {
    "name": "New Waifu",
    "anime": "New Anime",
    "age": 18
  }
```

- ### **[PATCH]** Update a waifu by ID
To update a waifu, send a PATCH request to `/waifus/:id`, replacing `:id` with the ID of the waifu you want to update. Provide the updated details in the request body, such as the `name`, `anime`, or `age` of the waifu.

Request:
```
  PATCH /waifus/1de986d0-1c03-4de3-92b5-b6b4b387b414
  Content-Type: application/json

  {
    "name": "Updated Waifu",
    "anime": "Updated Anime",
    "age": 20
  }
```

- ### **[DELETE]** Delete a waifu by ID
To delete a waifu, send a DELETE request to `/waifus/:id`, replacing `:id` with the ID of the waifu you want to delete.

Request:
```
  **DELETE** /waifus/57ddbdf5-0963-4963-b120-7541807cea9a
```
