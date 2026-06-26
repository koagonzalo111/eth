#!/data/data/com.termux/files/usr/bin/bash

FOLDER=build
NAME="elparadisogonzalo-frontend"
JWT="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmMmY5Y2U5OC01NWI2LTQwZjktODdiMy1iNWMwYjA0MjgxZTkiLCJlbWFpbCI6ImdlbnlvdW5nY2xpcEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNDAzNGM2NWQ1OWY1OTU1NTY3Y2UiLCJzY29wZWRLZXlTZWNyZXQiOiIyODI1YzM0MDI1YjA4YmRlMDBhM2RhNjZhMTYyNTEyZWI5YzZjMjkyODE4MWJkNGNkODVjNDI1Mzc4OGQ3MzgxIiwiZXhwIjoxNzg1NTk0NzExfQ.mS8akUzVJdV5fIwzGFVZHmjESKpSTAlDCQn_NYMg0lA"

curl -X POST https://api.pinata.cloud/pinning/pinFileToIPFS \
  -H "Authorization: $JWT" \
  -F "file=@$FOLDER/index.html" \
  -F "pinataMetadata={\"name\": \"$NAME\"}" \
  -F "file=@$FOLDER/assets"
