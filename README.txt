App Name: MyDay

How you start running the program:
   yarn start

MyDay/src
├── App.js
├── components
│   ├── EntryComponent.js
│   ├── GeneralComponent.js
│   ├── GuideComponent.js
│   ├── HealthKit.js     # Retrieves and displays total steps taken during day by user and stores info in db along with answer to question.
│   ├── HomeComponent.js     # Diplays calendar with saved user input for selected date that is retrieved from db. 
│   ├── MainComponent.js
│   ├── StartComponent.js
│   ├── StatsComponent.js
│   ├── Weather.js     # Displays weather and temperature on screen and stores in database along with user's response to question.
│   └── WeatherComponent.js     # Retrieves weather of user's current location using OpenWeather API.
├── config.js     # Initializes Firebase db in application with appropriate configurations.
├── images
│   └── background.jpg     # Image that is first displayed upon app startup.
├── react-native-calendars-master
├── screens
    ├── DailySummaryComponent.js
    ├── FoodComponent.js
    ├── SurveyCompletedScreen.js     # Displays user's answers to survey questions and adds them to the db along with associated score.
    └── SurveyScreen.js     # Displays survey questions to user and prompts user to select one of four choices.
