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

9). Before fetch came , we used xmlHttpRequest to work with API's.

10). Blocking code  === synchronous , Non-Blocking code === asynchronous.   

11). Js Engine >>> (2 parts) -- Memory heap(all the variables initialised are stored here) -- call stack(Global execution context to banta hi banta hai fir vo function jo call hote hai ek ke upar ek.).

12). 