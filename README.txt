App Name: MyDay

How you start running the program:
   yarn start

MyDay/src
├── App.js     # Executes overall functionality of the app.
├── components
│   ├── EntryComponent.js       
│   ├── GeneralComponent.js     # Prompts user to answer general questions about self and stores info into db.
│   ├── GuideComponent.js       # Render FoodComponent, which shows a list of food recommendation
│   ├── HealthKit.js     # Retrieves and displays total steps taken during day by user and stores info in db along with answer to question.
│   ├── HomeComponent.js     # Diplays calendar with saved user input for selected date that is retrieved from db. 
│   ├── MainComponent.js     # Creates and displays navigation bar that allows user to navigate to different features of the app.
│   ├── StartComponent.js     # Component that is first visible when user enters app. User must click start to proceed to app.
│   ├── StatsComponent.js     # Displays the daily averages for each mood, and recommends food based on the averages. 
│   ├── Weather.js     # Displays weather and temperature on screen and stores in database along with user's response to question.
│   └── WeatherComponent.js     # Retrieves weather of user's current location using OpenWeather API.
├── config.js     # Initializes Firebase db in application with appropriate configurations.
├── images
│   └── background.jpg     # Image that is first displayed upon app startup.
├── react-native-calendars-master     # Calendar package installed to build calendar on home page.
├── screens
    ├── FoodComponent.js             # Get food from the database, and put them into CardList format
    ├── SurveyCompletedScreen.js     # Displays user's answers to survey questions and adds them to the db along with associated score.
    ├── GeoLocation.js # Fetches nearby therapists to the user's current location by calling Google Places API.
    ├── DailyTags.js # Displays tags based on different moods to user and prompts user to select those that match user's current mood.
    ├── ThoughtsForm.js # Diary format allowing user to enter their thoughts into the app. 
    └── SurveyScreen.js     # Displays survey questions to user and prompts user to select one of four choices.
