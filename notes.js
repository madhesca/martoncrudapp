//views, profile, a tag
//  /profile/username
//   /profile/username/followers
//   /profile/username/following
// username should be dynamic

//select h2 inc 3 a tags, cut
//views, includes, name profileShared.ejs, paste
//in Profile <%- incl pofileshar
//save and test

//router, add route for followers, useC.profileFOllowersScreen
//userC, create profileFolls..., buttom
done

// try, create followers var and createa a Follow model func name getFollowedById
//params is the profile id
//render 'profile-followers', 2nd arg is an objec
//indide copy data from above. include followers
//in catch render 404
done


part 2
//in Follow, create getFollowersbyid, id as arg buttom
// return a Promise, inside try, create followers var
//call aggregate , array, dropdpwn .toArray()
//1st object, match prop : followedId prop id as value
//2nd obj, lookup obj as value
//from, localField, foreignField, as
//'users', 'authorId', '_id', 'userDOc'

//3rd Object, project, obj as value 
//username: {$arrayElemAt: ['$userDoc.username, 0] }
//same with email

//below toarray, map followers and update followers variable
//require User, inside map, create user variable
//= new User(follower, true)
//return obj, that has username and avatar - followerusername, useravatar
//end of try, resolve with value of followers
//reject in catch

//views, add profile-followers.ejs, go to profile copy all and paste
//inside, change posts, post, href, avatar, 
//delete strong and add follower.username
done

//add route for following , create, profileFollowingScreen
//userC, create Following at the buttom, copy Follower
//change name, variable, creatte Follow getfollowing
//render profile following
//change followers to following inside render save

//Follow, copy Followers and paste
//change name, change match, to authorId
//change local to followedid, save


//crate profile-following.ejs, copy and paste from follower
//change follower to following
//change follower to followedUser
//save and test
done

//userC, profilefollowing, add prop of currentPage: 'following
//same with posts, and follower
//views, includes profilesahred
// n a tags, delete active
//ejs, ternary ops,
//if currentpage is posts, write active, else, empty string
//do the same with followers and folowing
//save and test
done

//UserC, sharePD above next, //comment retreive post, follower, following
//create 3 vars, postCountPromise, follewrCP, follwngCP
// equals countPostsByAuthor via Post
//countFollowersById via Follow, countFollowing via Follow
// create distructure array names, postsCount ......
// = await Promise.all([posttCountProm, .... , ....])
//add to req the props from distructure array
//call next
//args of 3 is areq.profileUser._id

//Post, buttom, create countPostsByAuthor, reciv as id
//return a promise, create postCount var
//go to mongo name countDocuments({author: id}) await
//resolve postCount ,copy this func and for follower following
//Follow, button, paste, chAnnge names
//followsColleion, followedId
//resolve with followerCount

//following, paste, followCOllec, authorId
respolve CountQueuingStrategy

//inProfilePostScreen, in render,after isvistorPro
//counts: {postCount: req.postCount ......}
//copy this and paste to Follower and Following screens
//save

//in views, inc profileShared, in a href
//ejs the numbers
save and test
done



//usersC, home, aboe homedashboard, inside if
//create posts variable that = getfeed() via Post 
//arg is the session id, add the post to 2nd arg to dashboard

//Post create getfeed, buttom, returns a Promise, reciv id
//require followscollection
//create a follewedUsers variable find authorId match id

//map the followedUsers followDoc as arg, return followedId via followedDo
//store this in the followedUser

//below, return reusablepostQ via Post ([]) dropdown
//match {} author: {} in: follwedUsers
{sort createddate} -1


// dashboard, cut  div center paste in else
//ejs if else

// if there are post, copy from profile div listgroup

//paste , after strong, wrap all after that with span
//class of text-muted small, insert the authorname

//above list group div, ad h2 The latest From Those you follow
//class text-center mb-4
//in and out if ejs


//views, footter above scripts
//if user is logged in, div class chat-wrapper shadow border-top border-left border-right
//save and test
//fronend modules, chat.js
//inside  run alert via export defailt, create events methods
//import chat to main js
#chat-wrapper, create new instnce of chat
//save and test alert
done

//select the message icon name .header-chat-icon store as openIcon
//in events add listner to open Icon
//2nd is a callback and call callChat
//in methods create showChat that add class of chat--visible to chatWrapper
//save and test

//select as closeIcon with class of chat-title-bar-close - below injectHTML
//add listner to closeIcon, and call hideChat
//create and hide icon
//save and test
done
//contructor, prop openedYet = false
//in showchat, if openyet is false, call openConnection()
//below if set openyet to true

//create openconnection to methods with alert
done

//install socket.io
//app.js,  buttom,  crreate server const that requires 'http' .createServer(app)

//create io const that requires 'socket.io call server fun

import.on('connectuin' 2nd arg is a function that logs 'a new user connected')
//change app to server in the module


//views, includes, footer, if, below div line
//scipt tag src of /socket.io/socket.io.js

//chat js, openconnection, delete alert and  create io()
//save it as this.socket save and test
done

//below injecthtml, select chatField #chatField
//select chatForm #chatForm
//in events, add listerner to chatform, 'submit', 2nd is func
//revic e param, preventdefault
//call sendMessagetoServer()
//create this to methods
//use this.socket and call emit with 2 args
//1 text of chatMessageFromBrowser
//2 is an object message prop with chatfields value
//below empt the chatfields value
//focus it

//app.js io, delete console, reciv param as socket
// call socket.on('chatmessa...', 2nd is func) reciv as data
//in the body, log data.message
//save and test

//delete log, change to
//io.emit(2 args)
//1 chatmssfrom....
//2ns is object, message as prop, data.message

//chat js, openconnection
//below socket, create this.socket 2 args
//1 chatmsgg..., 2nd is func revic as data
//log data.message
done

//chat, below inject select chatbix name chatLog #chat
//openConnection, delete alert, call displayMessageFromServer data as arg
//below create displaymssg.... reciv as data

//insrtadjHt.. to chatlog, before end 
//2nd is p tag backticks that display the message
//save and test

//github, chat-visible. comment template for msg for others, 7 lines
//delete p tag and paste, delete msg and disply messgae. save and tet

//app js, below const io
done


//views, inc, header, title
//postcontroller, viewsingle
//add prop of title. post.title value
//header, delete ourapp, ejs = 
//type of 'OurApp' elase dynamic title ``


//usercontroller, profilepostscreen
//add title, `Profile for ${req.Profileuser.usernmae}`






















































