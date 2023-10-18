<link rel="stylesheet" type="text/css" href="styles.css" />
import './App.css'


function app() {
  
  return (
    <>
  <ProfileCard firstName='Joh' lastName='DOE' Age={25} Hobby='He likes to read'/>
  <ProfileCard firstName='Jane' lastName='Smith'Age={25} Hobby='play guitar'/>
  <ProfileCard firstName='Alice' lastName='Johnson'Age={28} Hobby='painting landscapes'/>
   </>
  )
  
};

interface ProfileProps{
  firstName: string;
  lastName: string;
  Age: number;
  Hobby: string;
}
function ProfileCard (prop: ProfileProps) 
{
 return (
  <div className="helpme">
    <div className="cardz">
      <div>
    Name: {prop.firstName} , {prop.lastName};
    </div>
    <div>
    Age: {prop.Age};
    </div>
    <div>
      Hobby: {prop.Hobby};
    </div>
    </div>
  </div>
 )
}

 

export default app
