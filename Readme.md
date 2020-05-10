# Travel bucketlist
Find your travel destination based on what you are looking for in your next adventure!

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
This web site was created for die-hard adventurers looking to find their next travel destination! 

When choosing their next greatest adventure, there are four primary questions that travelers asks themselves.
1. Which month will I be traveling? 
2. Who will I be traveling with? 
3. What type of experience am I lookiing for? 
4. What is my budget?

The problem is that we need to visit multiple sites to get all the information we need to make the decision. 
Travel bucketlist is designed to capture your preferences to four primary questions above and recommend destinations that match your preferences.
It also helps you to pin these destinations to your travel vision board and make notes of this particular destinations. So whenever your wanderlust strikes, you can easily  make plans with ease by referring to this vision board. 

What are you waiting for? Try it out. Your next greatest adventure awaits you!

## Intro Video
[Travel Bucket List]()

## Technologies
* ActiveRecord - version 6.0
* Ruby on Rails- version 2.6.1p33
* Sinatra-activerecord - version 2.0
* Rest-client 

## Setup
Two separate GitHub repositories(frontend and backend) have been created for this project.

To run this project, install [Travel_Bucket_List_ Backend](https://github.com/LisaHJung/Travel_Bucket_List_Backend) locally by cloning the GitHub repository and typing:
```ruby
rails s
```
Then, install [Travel_Bucket_List_Frontend](https://github.com/LisaHJung/Travel_Bucket_List_Frontend) locally by cloning the GitHub repository and typing:
```ruby
lite-server
```

## Code Examples
```ruby
<body>
    <div class="comment-update">
        <form action="" method="post">
            <input type="hidden" name ="_method" value="patch">
            <input type="hidden" id="user_id" name ="user_id">
            <input type="hidden" id="destination_id" name ="destination_id">
            <input type="string" name="comment" placeholder = "Write comment here">
            <input type="submit" value="Add my comment to selected destination">
        </form>
    </div>
    <div class="delete-destination">
        <form action="" method="post">
            <input type="hidden" name ="_method" value="delete">
            <input type="hidden" id="user_id" name ="user_id">
            <input type="hidden" id="destination_id" name ="destination_id">
            <input type="submit" value="Delete my destination">
        </form>
    </div>
</body>
```

```ruby
const params = new URLSearchParams(window.location.search)
const vb_id = params.get("vision_board_id")

const commentUpdateForm=document.querySelector(".comment-update > form")
commentUpdateForm.action=`http://localhost:3000/vision_boards/${vb_id}`

const deleteDestination=document.querySelector(".delete-destination > form")
deleteDestination.action=`http://localhost:3000/vision_boards/${vb_id}`

const isUpdated = params.get("is_updated")
    if (isUpdated){
        alert("Your comment has been successfully updated!")
    }

const isDeleted = params.get("is_deleted")
    if (isDeleted ){
        alert("The destination has been deleted!")
    }
```

## Features
* Browse travel destinations by desired time of travel, travel party size, primary reason for traveling, and cost
* Pin a destination to vision board
* View all pinnned destinations
* Create and update comments
* Delete pinned destinations

To-do-list:
* Add more travel destinations to the API 
* Add functionality to enable users to style their own visionboard
* Add API functionality on flight, hotel, and tourism information

## Status
Project is finished with option to expand functionality and DRY out code. 

## Inspiration
The inspiration for Travel bucket list came from a problem that I frequently encounter while looking for my next travel destination.  
To satiate my wunderlust, I often day dream about where I want to visit next and keep a bucket list of all the places that I want to visit. 
But when I get my precious window to travel, I often have to do a lot of research to figure out which one of my bucket list destinations fits the time frame of my travel, who I will be traveling with, what experience I am looking for and what budget I have set for this trip. 

In order to fix this problem, I have created a Trello board of all of my bucket list destinations with images. In each destination card, I have included notes on best time to travel to this destination, along with other factors that would help me choose this destination for my next adventure. 

My vision board has made choosing my travel destination a breeze and I thought why not create a website and create an API with information from my own visionboard for other adventurers? That way, I can help others to spend less time researching and more time enjoying their next adventure.

Hope you all enjoy our website and get your adventure on as soon as this pandemic is over!


## Contact
Created by [Lisa Jung](https://www.linkedin.com/in/lisa-jung-23304b53/) and [Ryan Anderson]()

Feel free to contact us!!! 

