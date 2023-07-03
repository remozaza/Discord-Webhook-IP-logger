# Discord-Webhook-IP-logger 

1. **Clone the project**: First, users need to clone the project from your GitHub repository to their local machine.

2. **Update the `config.json` file**: Users must replace the placeholder text `"your webhook here👍"` in the `config.json` file with their webhook URL.

3. **Host the web page**: Users should host the web page on a server or use a local web server for testing purposes. They can use a simple HTTP server like Python's `http.server`, Apache, or Nginx.

4. **Visit the web page**: When users access the web page, they will see a message saying "Checking your browser...". The JavaScript code will run in the background and collect the user's IP address, user agent, and location data.

5. **Data is sent to the webhook**: The collected data will be sent to the webhook URL specified in the `config.json` file. The webhook can be a Discord webhook, Slack webhook, or any other service that accepts incoming webhook requests.

6. **View collected data**: Users can view the collected data in the platform they have set up to receive webhook messages. For example, if they are using Discord, they will see a message containing the user's IP address, user agent, and location data in the specified channel.

Please note that this project is potentially invasive to users' privacy and should be used responsibly and ethically. Always make sure to inform users about the data you are collecting and obtain their consent before using this project on any public-facing website.
