const express = require('express');
const app = express();

app.use(express.json()); ///adding middleware 

const courses = [ 
    {id : 1 , name: 'course1' },
    {id : 2 , name: 'course2' },
    {id : 3 , name: 'course3' },
];

app.get('/', (req , res ) => {
    res.send('Hello World');
});

app.get('/api/courses' , (req , res) => {
    res.send(courses);
});
//api/courses/1
app.get('/api/courses/:id' , (req , res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id) );
    if(!course) res.status(404).send('The course with the given ID was not found');  //404 => this means object not found 
    res.send(course);
});
//using post methods 
app.post('api/courses', (req,res) => {
    const course = { 
      id: courses.length + 1,
      name : req.body.name
    };
    courses.push(course);
    res.send(course);
});
//Environment Variable 
//PORT
const port = process.env.PORT || 3000;
app.listen(port , () => console.log(`lisetning on port ${port}...`));

