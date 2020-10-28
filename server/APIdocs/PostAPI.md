### /api/post

1. **GET** : Post의 ObjectId와 category를 이용한 Post 정보들을 GET. Array형식으로 return 해 줌.

   Parameters : 

   ```
   id : Post의 ObjectId
   category : Post의 Category ( Notice, Counseling.. )
   
   
   ex) curl -X GET http://localhost:4000/api/post?id=5f75d15c8fd94a13434f427f
   ex) curl -X GET http://localhost:4000/api/post?id=5f75d15c8fd94a13434f427f&categroy=Notice
   ```

   Request Body : X

   Header : X

   Response : 

   ```json
   [
       {
           "id": "5f8ace1e59da7910ce064e9d",
           "title": "test",
           "contents": "test",
           "category": "Notice",
           "images": [],
           "author": "5f7582b272c839dd0a000e7f"
       }
   ]
   ```

   <div style="page-break-after: always; break-after: page;"></div>

2. **POST** :  Post의 title,content 그리고 category를 post하면 post의 내용을 response. Authorization token이 필요함. Notice category의 경우 admin만 사용가능.

   Parameters : X

   Request Body : 

   ````JSON
   {
       "title":"test",
       "contents":"test",
       "category":"Notice"
   }
   ````
   
   Header : 
   
```
   Authorization : Bearer <token>
```
   
Response : 
   
   ```json
   {
       "id": "5f8ace1e59da7910ce064e9d",
       "title": "test",
       "contents": "test",
       "category": "Notice",
       "images": [],
       "author": "5f7582b272c839dd0a000e7f",
       "username": "username"
   }
   ```

<div style="page-break-after: always; break-after: page;"></div>

3. **PUT** : Post의 내용을 변경 할 때 사용. title, contents, category를 PUT으로 요청.

   Parameters : X

   Request Body : **title,contents,category 전부 option.**

   ```JSON
   {
       "title":"test",
       "contents":"test",
       "category":"Notice"
   }
   ```

   Header :

   ````
   Authorization : Bearer <token>
   ````

   Response : 

   ````JSON
   {
       "id": "5f8ace1e59da7910ce064e9d",
       "title": "test",
       "contents": "test",
       "category": "Notice",
       "images": [],
       "author": "5f7582b272c839dd0a000e7f",
       "username": "username"
   }
   ````

   <div style="page-break-after: always; break-after: page;"></div>

4. **DELETE** : Post 삭제 api. Token과 post의 id 필요. token을 통해 그 user의 post인지 확인하고 삭제.

   Parameters : X

   Request Body : X

   Header :

   ````
   Authorization : Bearer <token>
   ````

   Response : 

   - 200 : 삭제 완료
   - 401 : 찾을 수 없는 post

<div style="page-break-after: always; break-after: page;"></div>



### /upload

1. **POST** : Image나 File을 Post 작성시 Upload 할 때 사용.

   Parameters : X

   Request Body : X

   Header : X

   Form-data: **key-value 형태로 전송.**

   ````
   file : 파일원본
   ````

   Response:

   ```json
   {
     "fieldname": "file",
     "originalname": "testfile.png",
     "encoding": "7bit",
     "mimetype": "application/octet-stream",
     "destination": "public/files",
     "filename": "file-1602935217208-testfile.png",
     "path": "public/files/file-1602935217208-testfile.png",
     "size": 1988
   }
   ```

   

