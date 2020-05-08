# Travel bucketlist
Find your next bucket list travel destiniation based what you are looking for! 

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


## Intro Video
[Travel Bucket List]()

## Technologies
* ActiveRecord - version 6.0
* Rake version 13.0
* Ruby - version 2.6.1p33
* Sinatra-activerecord - version 2.0
* SQLite3 - version 1.4
* rest-client 

## Setup
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
* Create and update comment
* Delete pinned destinations

To-do-list:

## Status
Project is finished with option to expand functionality and DRY out code. 

## Inspiration
The inspiration for Travel bucket list came from my insatiable wunderlust. 

## Contact
Created by [Lisa Jung](https://www.linkedin.com/in/lisa-jung-23304b53/) and [Ryan Anderson]()

Feel free to contact us!!! 

