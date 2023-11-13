1). Agar scope '{}' start kiya hai to return to karna padega  --> explicit return. 

2). DOM -  Ek baar element select karna aaggya uske baad methods ke name pata krkre unki practice karlo , bas aagya DOM.

3). In DOM , we aslo have nodelist and HTMLCollection apart from arrays. 
    -- in nodelist , its similar to array but not array. we can loop through the nodelist using .forEach method.
    -- in HTMLCollection , its not similar to array. but we can convert it into an array.
    -- by --> const myConvertedArray = Array.from(HTMLcollection) , now we can loop through it using map , foreach etc.

4). when using forms , if you are not sending the data to backend then you have to use the metod e.preventDefault().

5). when you have to remove any existing element from the DOM , Dont do 

    --> document.body.style.display = "none"                // old method.
    --------------------------------
    Do this instead.

    --> const div = document.queryselector('div')
        div.addEventListener('click',function(e) {
            let ul = document.querySelector('.ul-class')
            ul.remove();
        },false)

6). watch the execution context (25) vala video again and make notes in copy.

7). SetTimeout ko rokne ke liye clearTimeout or setInterval ko rokne ke liye clearInterval.

8). JSON.parse() string ko json me convert kar deta hai.

9). Before fetch came, we used xmlHttpRequest to work with API's.

10). Blocking code  === synchronous , Non-Blocking code === asynchronous.   

11). Js Engine >>> (2 parts) -- Memory heap(all the variables initialised are stored here) -- call stack(Global execution context to banta hi banta hai fir vo function jo call hote hai ek ke upar ek.).

12). Arrays, Functions , strings have access to all the properties of object as they are inherited from object . 

13). call() method passes the current execution context to another function.

14). document.setAttribute('href', 'http://google.com')  sets the attribute of any html tag.

15). (video = 47) , Object.getOwnPropertyDescriptors(objName, "property") returns an object with some properties of object like (enumerable, configurable, writable) & if Writable == false , then we can't change that object property. for example : - we cant change the value of Math.PI . 

16). Get and Set value in a class should always be same.

17). documen.getelementById('orange').onclick = function(){}  // onlclick ko ek function chahiye hota hai.

18). In closures , whenever the outer function leaves , it leaves its lexical enviornment (variables.) with the inner function.

19). Intersection and Union of two sets :
    --> Intersection : new Set([...mySet1].filter(x => mySet2.has(x)))
    --> Union : new Set([...mySet,...mySet1])

20). why do we use callback inside HOF ?
    --> When we just want to pass the reference of the function to the higher order function , we use callbacks.
    --> when we have a function to pass but it requires an argument , we just cant pass it like this : onClick = {dispatch(removeTodo)}
        so we use it like this onClick ={()=>{dispatch(removeTodo)}}

 ## React ------------------------------------------------------------------------------------------------

1). React reacts to updation of variables.

2). **Reconsilation in react** :- its an algorithm that diffrentiate between two trees (Virtual DOM & Real DOM). if it finds any difference between those two, it will update and rerender the vDOM for that particular differnece and not update the whole webpage.

3). .createRoot() method flushes all the HTML,JSX code to the VDOM and then it compares it with the realDOM.

4). React Fiber Architecture works on scheduling bascially to improve performance.

5). useRef hook gives you the reference of any HTML tag and it must be stored inside any variable.

6). useCallback hook memorizes or optimizes your application. its basically used to improve performance of the react application.

7). ## ContextApi - ['./ContextAPI.md']

8). We can use more than one useEffect in a single application.

9). LOCALSTORAGE - To store something in your local storage of the browser.
--> it accepts only key value pairs and that too in strings only.
--> only two methods , localStorage.setItem() and localStorage.getItem().
--> ex: - localStorage.setItem('user',JSON.stringify(data.user))

## Backend ------------------------------------------------------------------------------------------------

1). What are Services ?
 --> Suppose that you have used BAAS (Backedn as a service) for a project and then the client   demands that he wants to use his own server , so here services comes in the picture.
 --> Because of Services we dont have to write the whole backend code again, also we can categorise services as AuthServices , DataBase Services, Bucket Services etc.

2). Hamesha jab bhi Database se baat karni ho yaa fir kuch bhi database ka kaam ho , we use two things :
--> Trycatch block
--> Async/await or promises (.then,.catch).

3). **How to Connect to the database** 
--> Make a .db file make an async function containing the trycatch block. inside that use mongoose.connect('mongodbURI') , it will return a promise.
--> export that function in the index file and then use .then.catch to capture that promise and inside this .then function listen to the server. 

4). **JWT** :-
--> this jwt.sign() method generate a token.
--> it requires 3 things, FIRST :- payload data, SECOND :- ACCESS_TOKEN_SECRET , THIRD :- ACCESS_TOKEN_EXPIRY.
ex:-
jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )


