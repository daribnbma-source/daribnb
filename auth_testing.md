# Daribnb Admin Auth Testing Playbook (Emergent Google Auth)

Admin email allowlist: `daribnb.ma@gmail.com`

## Create a test session

```bash
mongosh --eval "
use('test_database');
var sessionToken = 'test_session_' + Date.now();
db.users.insertOne({
  user_id: 'admin-test',
  email: 'daribnb.ma@gmail.com',
  name: 'Marwan',
  picture: '',
  created_at: new Date()
});
db.user_sessions.insertOne({
  user_id: 'admin-test',
  session_token: sessionToken,
  expires_at: new Date(Date.now() + 7*24*60*60*1000),
  created_at: new Date()
});
print('Token: ' + sessionToken);
"
```

## Test backend
```bash
TOKEN="..."
curl -X GET "http://localhost:8001/api/auth/me" -H "Authorization: Bearer $TOKEN"
curl -X GET "http://localhost:8001/api/admin/contacts" -H "Authorization: Bearer $TOKEN"
```

## Frontend protected routes
- `/admin/login` (public)
- `/admin` (protected — only admin email allowed)
- `/admin/blog/new` (protected)
- `/admin/blog/:slug/edit` (protected)
