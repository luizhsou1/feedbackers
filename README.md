# Feedbackers

A clone of the [Feedback Fish](https://feedback.fish/) platform with the purpose of exercising the knowledge acquired with vue.js

---

## Running Project in local machine

### Backend:

```sh
# Access the backend folder
cd backend

# Build the backend in a docker container
npm run build

# Run the container from the created image
npm run container

# The backend will be available on port 3000
```

> As the objective was to train and exercise the knowledge acquired with vue.js, the backend has no interaction with the database, everything is kept in memory, in the context of the container's life.
