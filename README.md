# Chat Service

This project provides a NestJS back-end that acts as middleware between an external GPT service (e.g. Navi) and a React front-end called **Help bot**.

## Development

Install dependencies (requires network access):

```bash
npm install
```

Copy the `.env.example` to `.env` and adjust values for your Navi endpoint and API key:

```bash
cp .env.example .env
```

Run in development mode:

```bash
npm run start:dev
```

Build the project:

```bash
npm run build
```

Run the compiled code:

```bash
npm start
```

The service exposes a single `POST /chat` endpoint that forwards a message to a configured GPT endpoint and returns the response.
