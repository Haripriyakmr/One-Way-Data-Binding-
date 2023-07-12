import './App.css';
import Name from './components/Name';
import A from './components/A';
import { useState } from 'react';


function App() {
  const arr = [{ name: "ram", age: 20 },
  { name: "pooja", age: 22 },
  { name: "ramya", age: 21 }
  ];
  const [data, setData] = useState(arr);
  const [name, setName] = useState('kavya');
  const [age, setAge] = useState(20);
  const [degree, setDegree] = useState('be');
  const [year, setYear] = useState(2000);
  const [rollno, setNumber] = useState(10);
  const [college, setCollege] = useState('name');
  const [dept, setDepart] = useState('');
  const [state, setCountry] = useState('');
  const [num, setPhone] = useState('');
  const [tutor, setMentor] = useState('');

  const list = ["pavi", "reo", "gogu", "raj"]

  //   var Details = [
  //     {
  //       name:"priya",
  //       age:22,
  //       degree:"B.E",
  //       state:"TN"
  //     },
  //     {
  //       name:"kavi",
  //       age:20,
  //       degree:"B.E",
  //       state:"KT"
  //     },
  //     {
  //       name:"narmi",
  //       age:22,
  //       degree:"B.E",
  //       state:"Kerala"
  //     },
  //     {
  //       name:"pavi",
  //       age:26,
  //       degree:"B.E",
  //       state:"TN"
  //     }
  // ]

  const NameDisplay1 = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  }
  const NameDisplay2 = (event) => {
    console.log("my age is" + event.target.value);
    setAge(event.target.value);
  }
  const NameDisplay3 = (event) => {
    console.log(event.target.value);
    setDegree(event.target.value);
  }

  const NameDisplay4 = (event) => {
    console.log(event.target.value);
    setYear(event.target.value);
  }

  const NameDisplay5 = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  }
  const NameDisplay6 = (event) => {
    console.log(event.target.value);
    setCollege(event.target.value);
  }
  const NameDisplay7 = (event) => {
    console.log(event.target.value);
    setDepart(event.target.value);
  }
  const NameDisplay8 = (event) => {
    console.log(event.target.value);
    setCountry(event.target.value);
  }
  const NameDisplay9 = (event) => {
    console.log(event.target.value);
    setPhone(event.target.value);
  }
  const NameDisplay10 = (event) => {
    console.log(event.target.value);
    setMentor(event.target.value);
  }

  const onsubmission = (e) => {
    e.preventDefault();
    console.log("submitted");
    const details = {
      // Name: NameDisplay1,
      // Age: NameDisplay2,
      // Degree: NameDisplay3,
      // Year: NameDisplay4,
      name: name,
      age: age,
      degree: degree,
      year: year,
      rollno: rollno,
      college: college,
      dept: dept,
      state: state,
      num: num,
      tutor: tutor


    }
    console.log(details);
    setData([details, ...data])
  }
  return (
    <div className='App'>
      <div>{data.map((item) => <div>{item.age} {item.name} {item.degree} {item.year} {item.rollno} {item.college} {item.dept} {item.state} {item.num} {item.tutor}</div>)}</div>
      {name}---{age}
      <form className='demo' onSubmit={onsubmission}>
        <label>NAME :</label>
        <input onChange={NameDisplay1} />
        <label>Age :</label>
        <input onChange={NameDisplay2} />
        <label>Degree : </label>
        <input onChange={NameDisplay3} />
        <label>Year :</label>
        <input onChange={NameDisplay4} />
        <label>RollNumber :</label>
        <input onChange={NameDisplay5} />
        <label>college :</label>
        <input onChange={NameDisplay6} />
        <label>Dept :</label>
        <input onChange={NameDisplay7} />
        <label>CITY :</label>
        <input onChange={NameDisplay8} />
        <label>PHONE NUMBER :</label>
        <input onChange={NameDisplay9} />
        <label>MENTOR :</label>
        <input onChange={NameDisplay10} />
        <button type='submit'>submit</button>
      </form>
      <A dataA={list[2]} />

    </div>
  );
  // <Name SendingName={Details[0].name} age={Details[0].age} degree={Details[0].degree} state={Details[0].state}/>
  //   <Name SendingName={Details[1].name} age={Details[1].age} degree={Details[1].degree} state={Details[1].state}/>
  //   <Name SendingName={Details[2].name} age={Details[2].age} degree={Details[2].degree} state={Details[2].state}/>
  //   <Name SendingName={Details[3].name} age={Details[3].age} degree={Details[3].degree} state={Details[3].state}/>
}

export default App;
