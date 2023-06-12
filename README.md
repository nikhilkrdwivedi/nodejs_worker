# Nodejs Worker Threads
This is demo app to learn how worker thread worked in Nodejs.

#### Start App
```
npm i
npm start 
```
#### Route Info

##### 1. '/'
This is root route which returns date as data.

##### 2. '/block-execution'
This is blocking route means if you hit this route there is a loop which is going to run 1,000,000 times.

##### 3. '/non-block-execution'
This is non-blocking route means if you hit this route there is a loop which is going to run 1,000,000 times, but this loop will not run in main thread.

#### How to test?

##### Step-1: 
Hit '/' and you will get following response:
```
{
  "data": "2023-06-12T10:37:29.882Z"
}
```
![This is an image](https://raw.githubusercontent.com/nikhilkrdwivedi/nodejs_worker/master/screenshots/root.png)

##### Step-2: 
Hit '/block-execution' and you will get following response:
```
{
  "data": "2023-06-12T10:07:04.432Z",
  "i": 1000000
}
```
But this response will take sometime, in my case it took 39.76 seconds. When I hit '/' api it didn't return response. But after '/block-execution' api fullfilled response '/' returned response after 40.56 seconds.

![This is an image](https://raw.githubusercontent.com/nikhilkrdwivedi/nodejs_worker/master/screenshots/block-excution-request.png)

![This is an image](https://raw.githubusercontent.com/nikhilkrdwivedi/nodejs_worker/master/screenshots/block-excution-root-request.png)

![This is an image](https://raw.githubusercontent.com/nikhilkrdwivedi/nodejs_worker/master/screenshots/block-excution-response.png)

![This is an image](https://raw.githubusercontent.com/nikhilkrdwivedi/nodejs_worker/master/screenshots/block-excution-root-response.png)
##### Step-3: 
Hit '/non-block-execution' and you will get following response:
```
{
  "data": "2023-06-12T10:07:04.432Z",
  "i": 9999999
}
```
here response time is 9.50 seconds because we offload excution to other worker thread.
![This is an image](https://raw.githubusercontent.com/nikhilkrdwivedi/nodejs_worker/master/screenshots/non-block-excution.png)

![This is an image](https://raw.githubusercontent.com/nikhilkrdwivedi/nodejs_worker/master/screenshots/root-non-block-excution.png)
NOTE: i: 9999999 because we are passing query number with value 9999999.
Also, you will get almost instant response when you hit '/' api.



#### Resources
[Worker threads in Nodejs](https://nodejs.org/api/worker_threads.html)\
[Express Hello World!](https://expressjs.com/en/starter/hello-world.html)

Happy Codings 👨‍💻
