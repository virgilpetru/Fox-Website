// 1. Import express and axios
import axios from "axios"
import express from "express"

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;

// 3. Use the public folder for static files
app.use(express.static("public"));

// 4. Go to homepage and render index.ejs
app.get("/", async(req, res) => {
    try{
        const result = await axios.get("https://randomfox.ca/floof/");
        res.render("pages/index.ejs", {image: result.data.image, link: result.data.link});
    } catch (error){
        console.error("Failed to make request:", error.message);
        res.render("pages/index.ejs", {
            error: error.message,
        });
    }   
});

app.get("/foxinfo", (req,res) => {
    res.render("pages/foxinfo.ejs")
})

app.get("/foxnews", (req, res) => {
    res.render("pages/foxnews.ejs")
})


// . Listen to your predefined port and start the server.
app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})