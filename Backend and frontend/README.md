## STEP 1: 
we have created two folders one is backend and another is frontend
1. backend(node js + express) - we have created express using modular (import method) and to use this you have to change the type from common to modular from the package.json and we have use 5 jokes to render on the web browser using frontend

now i want to consume this backend data in frontend 


2. frontend (react+vite) -  we create frontend using differnt methods like create react app, vite,parcel etc. 
so these are different bundlers known as tool chain means when we create application in  react like main.jsx, index, app these toolchains helps these applications to bundlers so that the browser will understand


3. http client: axios   (npm install axios)
 
4. proxy - vite proxy to connect backend with frontend on local(kind of forcefully)   (vite.config.js)  

(The frontend runs on 5173, backend on 4000.)

## Step 2: 
# COMPLETE EXPLANATION OF FRONTEND

1. usestate - use to  hold and update data that persists between render
2. useEffect - component use to fetch data after renders it contains one call back and  one dependeny array and must use the return statement

3. axios - used to make http client request using get from backend

4. const [joke,setJoke] = useState([])
this is state hook(use to manage state) and did 3 main things
    *this will create  a joke variable to print  (joke holds the list of jokes)
    *setJoke will update the joke state
    *and joke is initalised with the empty array

5. useeffect - this is where we put the fetched data
 
6. axios - /api/jokes - this is kind of half link we take from backend so instead of writing full link where the backend code is running ->(https://localhost:3000/api/jokes) 
but we use short link  this will call the backend
but we are using vite proxy this will restrict that backend will call from this link only not from any other http://localhost:4000/api/jokes

7. axios.get() returns a promise  a placeholder for future result

.then() we use when this promise is successfull 
.then(response) response is an object axios return 


and then setjokes(response.data) 
//  response.data(actaul list of jokes) is like resturant replies and axxios.get is like ordering jokes from backend



8. .catch(error) - this will handle error



9.   jokes.map((joke) =>{  
    this will create a loop where id is the unique identity 

.map() iterates over the jokes array and returns a new array of JSX elements — one for each joke.
})

22. return( 
    Inside the .map() callback we return the JSX to render for this joke.
)




