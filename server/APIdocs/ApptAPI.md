### /api/appt

1. **GET** : 모든 User의 예약을 반환

   Parameters : X

   Request Body : X

   Header : Admin, Medic의 role을 가진 User의 token만 authorize 됨.

   ````
   Authorization : Bearer <token>
   ````

   Response :  예약의 ObjectId, 예약 시간, 군의관과 환자의 ObjectId, 승인여부를 반환

   ```json
   [
       {
           "id": "5f95522229f46f708ea73ea8",
           "time": "2020-10-19T00:00:00.000Z",
           "medic": "5f7582b272c839dd0a000e7f",
           "patient": "5f8bb36a6085dd2aabf7ef73",
           "confirm": false
       },
       {
           "id": "5f95532839837071ceefe870",
           "time": "2020-10-19T00:00:00.000Z",
           "medic": "5f7582b272c839dd0a000e7f",
           "patient": "5f8bb36a6085dd2aabf7ef73",
           "confirm": true
       },
       {
           "id": "5f9556b461c27f766dd32999",
           "time": "2020-10-19T00:00:00.000Z",
           "medic": "5f7582b272c839dd0a000e7f",
           "patient": "5f8bb36a6085dd2aabf7ef73",
           "confirm": false
       }
   ]
   ```

   <div style="page-break-after: always; break-after: page;"></div>

2. **POST** : time과 medic의 ObjectId를 보내면 예약 정보를 반환

   Parameters : X

   Request Body : 

   ````JSON
   {
       "time":"2020-10-19",
       "medic":"5f7582b272c839dd0a000e7f"
   }
   ````
   
   Header : 일반 User의 token 필요.
   
   ````
   Authorization : Bearer <token>
   ````

   Response : 

   ```json
   {
      "id": "5f96ad564cbd5937af9fec5b",
      "time": "2020-10-19T00:00:00.000Z",
      "medic": "5f7582b272c839dd0a000e7f",
      "patient": "5f8bb36a6085dd2aabf7ef73",
       "confirm": false
   }
   ```

<div style="page-break-after: always; break-after: page;"></div>

<div style="page-break-after: always; break-after: page;"></div>

### /api/appt/confirm

1. **POST** : 예약의 ObjectId를 Request Body에 보내면, 예약을 confirm을 하거나 cancel.

   Parameters : X

   Request Body : 

   ```javascript
   {
   	"id":"5f96ad564cbd5937af9fec5b"
   }
   ```

   Header :

   ````
   Authorization : Bearer <token>
   ````
   
   Response : 
   
   ```json
   {
      "id": "5f96ad564cbd5937af9fec5b",
      "time": "2020-10-19T00:00:00.000Z",
      "medic": "5f7582b272c839dd0a000e7f",
      "patient": "5f8bb36a6085dd2aabf7ef73",
      "confirm": true
   }
   ```

<div style="page-break-after: always; break-after: page;"></div>


