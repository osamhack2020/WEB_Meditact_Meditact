### /api/user

1. **GET** : User의 token을 authorization-header에 담아서 보내면, 새로운 token과 user의 username 및 email 반환 

   Parameters : X

   Request Body : X

   Header :

   ````
   Authorization : Bearer <token>
   ````

   Response : 

   ```json
   {
     "user": {
       "username": "string",
       "email": "user@example.com",
       "role": "string",
       "token": "string",
       "posts" : [
         "5ffa2noasoombpmasfxaxa",
         "5ffa2no22oombpmasfxaxa"
       ]
     }
   }
   ```

   <div style="page-break-after: always; break-after: page;"></div>

2. **POST** : User의 username, email 그리고 password를 post하면 회원가입 후 확인 용도로 user의 username과 email response

   Parameters : X

   Request Body : 

   ````JSON
   {
     "user": {
       "username": "string",
       "email": "user@example.com",
       "role": "string",
       "password": "string"
     }
   }
   ````

   Header : X

   Response : 

   ```json
   {
     "user": {
       "username": "string",
       "email": "user@example.com",
       "role": "string",
       "token": "string",
       "posts":[]
     }
   }
   ```

<div style="page-break-after: always; break-after: page;"></div>

3. **PUT** : User의 username, email 그리고 password를 변경 할 때 사용 ( Role은 변경 불가 ). 변경 된 username, email은 response 하지만 password는 response하지 않음. 

   Parameters : X

   Request Body : **username, email, password 전부 option. 단, 비밀번호 변경시에는 lastPassword와 새로운 비밀번호인 password를 requestbody에 둘 다 포함하여야 한다.**

   ```JSON
   {
     "user": {
       "username": "string",
       "email": "user@example.com",
       "lastPassword":"string",
       "password": "string"
     }
   }
   ```

   Header :

   ````
   Authorization : Bearer <token>
   ````

   Response : 

   ````JSON
   {
     "username": "string",
     "email": "user@example.com"
   }
   ````

   <div style="page-break-after: always; break-after: page;"></div>

4. **DELETE** : User의 회원탈퇴 api. Authorization header에 토큰을 담아서 보내면 됨.

   Parameters : X

   Request Body : X

   Header :

   ````
   Authorization : Bearer <token>
   ````

   Response : 

   - 200 : 탈퇴 완료
   - 401 : 찾을 수 없는 회원

<div style="page-break-after: always; break-after: page;"></div>

### /api/users

1. **GET** : authorization-header에 token을 담아서 보내면, Admin인지 판단하고 모든 User의 정보를 response해줌

   Parameters : X

   Request Body : X

   Header :

   ````
   Authorization : Bearer <token>
   ````

   Response : 

   ```json
   {
     [{
       "username": "string",
       "email": "user@example.com",
       "role": "string",
       "posts" : [
         "5ffa2noasoombpmasfxaxa",
         "5ffa2no22oombpmasfxaxa"
       ]
     },
   	{
       "username": "string1",
       "email": "user1@example.com",
       "role": "string1",
       "posts":[]
     }]
   }
   ```

<div style="page-break-after: always; break-after: page;"></div>

#### /api/users/login

1. **POST** : User login API.

   Parameters : X

   Request Body : 

   ````JSON
   {
     "user": {
       "email": "user@example.com",
       "password": "string"
     }
   }
   ````

   Header : X

   Response : 

   ```json
   {
     "user": {
       "username": "string",
       "email": "user@example.com",
       "role": "string",
       "token": "string",
       "posts" : [
         "5ffa2noasoombpmasfxaxa",
         "5ffa2no22oombpmasfxaxa"
       ]
     }
   }
   ```