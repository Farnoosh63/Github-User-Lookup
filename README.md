# Github User Lookup ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)
> **By Farnoosh Johnson**

#### _Epicodus JavaScript class, May 2016_

###### _[Modern JS Apps](https://www.learnhowtoprogram.com/javascript/modern-js-apps/modern-js-apps-independent-project)_

###### **Github User Lookup, code review number 1**

## __Description__

###### This is an application to return the GitHub public information from a username that being searched. Information shown by this app through Github API are;
1. username
2. full name
3. repository name
4. profile picture
5. repository description
6. http link to the repository

> You may use this application as an example to show the proficiency of a level 2 student in Epicodus.

## Setup

This website build tools:
* managed frontend dependencies with Bower.
* Manage all other dependencies with npm.
* Asset pipeline with a live reloading development server in gulp.

and also include gulp tasks for:
* Concatenation, minification, and running the browserify package on JavaScript.
* Building and cleaning.
* Running the development server with live reloading.
* Running JSHint.
* Automatically including Bower dependencies as vendor.min.js and vendor.css.

###### Thanks

**Accessing to the remote repository on account :** [farnoosh63](https://github.com/Farnoosh63/Github-User-Lookup.git)

**Accessing to github pages for this application :**
> there is no github page created for this app



![image](https://developer.chrome.com/static/images/sample-default-icon.png)
```
fork, download and install npm and bower packages
run $gulp build
$gulp serve
enjoy!
```
###### if you have access to your personal github account, you may use your personal Access tokens.


Creating Personal Access Tokens
---------------------------------
- [x] login to your github account and go to setting
- [x] select Personal Access Tokens from the sidebar, and hit Generate New Token
- [x] Select Generate Token with no options checked to receive a unique access token.
- [x] Place your access token in an .env file at the top level of your directory.
- [x] you must name your API key variable exports.apiKey in your .env file and store it in the root of the project directory

`exports.apiKey="YOUR-ACCESS-TOKEN";`


### Legal

_*Copyright (c) 2016 Farnoosh Johnson- Student in Epicodus*_

###### This software is licensed under the MIT license.

###### Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

__The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.__

###### THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
