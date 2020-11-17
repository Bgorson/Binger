# Binger

React Native Application to narrow down choices when deciding what to watch on a streaming platform.

# How to Start

`yarn install`

If you want to use a virtual device:
`expo start`
Select the virtual device you have already installed
OR
Use QR code on your phone

If you want to start with tunnel (issues with local connection potentially)
Install Expo app on phone and use
`yarn start`

Currently debugging issues with Web Mode for Expo but this may not be necessary to resolve

# Initial Goal:

### Picker:

Users will be presented with a collection of currently available shows and swipe to make a decision on if they like it or not

### Picked:

A gallery of chosen shows

### Home:

Relevant information about the platform

### About:

Basic creator information

### General:

Establish default styles and look of application

# Secondary Goals:

Connecting to a nearby device to find matches

Authorization/Login

Pulling real data from API to populate available shows

# Initial API Logic

Get a collection of New arrivals
Store in a variable
Filter to only those with Netflix Streaming
Update Variable
Go through Results
When all are completed
Get a collection of new arrivals on Page 2- Repeat process
