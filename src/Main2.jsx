


import React from "react";


import { Button, Form, FormControl, Col , Row , Container} from 'react-bootstrap';


export default function Main2(){

         const[text, settext] = React.useState("")

        const[array, setarray] = React.useState([])

      function Antah(e){

        settext(e.target.value)




      }

        React.useEffect(() => {

          console.log(array)

        }, [array])





      function Prahambh(){

        if(text !== ""){

          setarray([...array, text])



        }

       // console.log(array)


      }

     
      const render = array.map((pre, index) => (
           
              <div key={index}>

               <Row>

                <Col>
                
                <Container id="abc" className="border border-red p-3 text-white">

                 <p>{pre}</p>


                </Container>
                
                </Col>

                <Col>
                
                <Button  variant="dark" className="rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 1a.5.5 0 0 1 .5.5V7h5.5a.5.5 0 0 1 0 1H8v5.5a.5.5 0 0 1-1 0V8H1.5a.5.5 0 0 1 0-1H7V1.5A.5.5 0 0 1 8 1z"/>
                        </svg>
                    </Button>
                
                
                
                </Col>



               </Row>


             





              </div>

           
           
      
           
           
      



        
            




      ))
      



     return(

       <>

          <div className="tiger">


    <Row className="mt-3">    



        
     
      <Col xs={9} sm={9} lg={8}>
      
      <FormControl onChange={Antah} type="email" placeholder="Enter email" id="input1" className="mb-10 " />
      
      
      
      
      </Col>

      <Col xs={3} sm={3} lg={4} className="ml-3">
      
      <Button onClick={Prahambh}  className="rounded-circle"  style={{ backgroundColor: "black" }}>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
<path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg>



</Button>
      
      
      
      </Col>




    </Row>

      <Row className="comk">

      {render}

       </Row>
    
      </div>


       </>





     )





}


























