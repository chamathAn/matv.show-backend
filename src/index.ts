import express, { Application, Request, Response } from "express"; 

const app: Application = express(); 
const port = 8080; 

app.get("/", (req: Request, res: Response) => {
 
  res.send("Hlo my World!"); 
);

app.listen(port, () => {
  
  console.log(`Listening on port ${port}...`); 
});
