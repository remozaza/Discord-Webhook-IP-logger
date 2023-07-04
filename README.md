# Discord Webhook IP Logger

This project is a simple web-based IP logger that sends collected data to a specified webhook. Users can implement this IP logger using platforms like Discord, Slack, or any other service that accepts incoming webhook requests. Please be aware that this project is potentially invasive to users' privacy and should be used responsibly and ethically.

## Getting Started

Follow these steps to set up and use the Discord Webhook IP Logger:

### 1. Clone the project

- Clone the project from the GitHub repository to your local machine:

```
git clone https://github.com/username/Discord-Webhook-IP-logger.git
```

### 2. Update the `config.json` file

- Open the `config.json` file and replace the placeholder text `"your webhook here👍"` with your webhook URL.

### 3. Host the web page

- Host the web page on a server or use a local web server for testing purposes. You can use a simple HTTP server like Python's `http.server`, Apache, or Nginx.

### 4. Visit the web page

- Access the web page using a web browser. You will see a message saying "Checking your browser...". The JavaScript code will run in the background, collecting the user's IP address, user agent, and location data.

### 5. Data is sent to the webhook

- The collected data will be sent to the webhook URL specified in the `config.json` file.

### 6. View collected data

- View the collected data in the platform you have set up to receive webhook messages. For example, if you are using Discord, you will see a message containing the user's IP address, user agent, and location data in the specified channel.

## Important Notice

Always inform users about the data you are collecting and obtain their consent before using this project on any public-facing website. Use this project responsibly and ethically.
