# Test API 

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://technicalmastersp.github.io/test-api/)

🌐 Visit : https://technicalmastersp.github.io/test-api/

A lightweight browser-based API testing tool built with HTML, CSS, and JavaScript. Easily test REST APIs, inspect responses, and verify CORS behavior by providing custom request headers directly from the UI.

## Features

- 🚀 Test REST APIs directly from your browser
- 📝 Add unlimited custom request headers
- 🔑 Supports API Key, Bearer Token, and other authentication methods
- 🌐 Test CORS behavior
- 📊 View HTTP status codes
- 📄 Display JSON or plain text responses
- ⚡ No frameworks or dependencies
- 💻 Built with HTML, CSS, and JavaScript

## Supported Headers

You can add any headers required by your API, for example:

| Header | Value |
|---------|-------|
| x-api-key | YOUR_API_KEY |
| Authorization | Bearer YOUR_TOKEN |
| Content-Type | application/json |
| Accept | application/json |
| Custom-Header | Any Value |

## Project Structure

```
test-api/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/test-api.git
```

### 2. Open the project

Open `index.html` in your browser.

Or run a local server:

```bash
# Python
python -m http.server

# Node.js
npx serve
```

## How to Use

1. Enter the API URL.
2. Select the HTTP method (GET, POST, PUT, PATCH, DELETE).
3. Add one or more request headers.
4. Enter a request body (if required).
5. Click **Send Request**.
6. View the HTTP status and response.

## Example Headers

```
x-api-key: YOUR_API_KEY
```

or

```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

or

```
Content-Type: application/json
Accept: application/json
```

## CORS Testing

If the API allows requests from your browser, you'll receive the response normally.

If CORS is not configured correctly, the browser will display an error similar to:

```
Access to fetch at 'https://example.com'
from origin 'http://localhost:5500'
has been blocked by CORS policy
```

This means the browser blocked the request because the server did not return the required CORS headers.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API

## Roadmap

- ✅ Custom request headers
- ✅ Multiple HTTP methods
- ⏳ Request body editor
- ⏳ Response headers viewer
- ⏳ Request history
- ⏳ Save collections
- ⏳ Import/Export requests
- ⏳ Dark mode

## License

Licensed under the MIT License.
