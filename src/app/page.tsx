
import Image from "next/image";
import Card from "./components/recent-post-card";
export default function Home() {
  return (
        <div>
      <div className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">Hi, I am ambreen
                ,Creative Technologist</h1>
              <p className="main-para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam co
                nsequat sunt nostrud amet.</p>

              <button className="buton">Download Resume</button>
            </div>
            <div>



              <div>

                <Image src="/image.png" width={250} height={250} alt="picture" ></Image>
              </div>
            </div>

           





          </div>
        </div>
      </div>

      <div className="recent-post">
        <div className="container">

          <div className="main">



            <div className="heading">
              <h3>Recent-post</h3>
              <button className="view-buton">view All</button>

            </div>
            <div className="card-parent">
              <Card />
              <Card />
               {/* <div className="card">
              <h2 className="card-heading">Making a design system from scratch</h2>
              <p className="data">12 Feb 2020 | design pattern</p>
              <p className="parag">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
               Velit officia consequat duis enim velit mollit.
               Exercitation veniam consequat sunt nostrud amet.
              </p>
              </div>
              <div className="card">
              <h2 className="card-heading">Making a design system from scratch</h2>
              <p className="data">12 Feb 2020 | design pattern</p>
              <p className="parag">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
               Velit officia consequat duis enim velit mollit.
               Exercitation veniam consequat sunt nostrud amet.
              </p>

               </div>  */}
            

         </div> 
          
         </div>
        </div>

      </div>
      <div className="featured-section">
        <div className="container">
          <div className="main">
            <div className="main-heading">
              <h3>featured works</h3>
            </div>
            <div className="card-parent">
            <div className="card">
              <Image src="/Rectangle 30.png" width={240} height={180} alt="image"></Image>
              <div className="card-content">
                <h2>Designing Dashboards</h2>

                <div className="badge-parent">
                  <div className="badge">
                     <p>2020</p>
                  </div>
                  <p>Dashbord</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
              </div>
              <div className="card">
              <Image src="/Rectangle 32.png" width={240} height={180} alt="image"></Image>
              <div className="card-content">
                <h2>Designing Dashboards</h2>

                <div className="badge-parent">
                  <div className="badge">
                     <p>2020</p>
                  </div>
                  <p>Dashbord</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
              </div>
              <div className="card">
              <Image src="/Rectangle 34.png" width={240} height={180} alt="image"></Image>
              <div className="card-content">
                <h2>Designing Dashboards</h2>

                <div className="badge-parent">
                  <div className="badge">
                     <p>2020</p>
                  </div>
                  <p>Dashbord</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>

            </div>
            </div>
            </div>
            </div>
             </div>
             </div>
             
             
            )};

            


            




