import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [users, setUsers] = useState(['Alex', 'Jordan'])
  // function handleSubmit(e) {
  //   e.preventDefault()
  //   const name = new FormData(e.target).get('name')

  //   setUsers([...users, name])
  //   console.log(name);
  // }
  useEffect(() => {
    document.querySelectorAll('.link').forEach(link => {
      link.onclick=(event)=>{
        event.preventDefault()

        document.querySelectorAll('.link').forEach(item => {
          item.classList.remove('active')
        })

        link.classList.add('active')
      }})
  
  }, [])
  // let links = document.querySelectorAll('.link')
  // links.forEach(link  => {
  //   item.onclick = () => {
  //     links.forEach(item => item.classList.remove('active'))

     
  //     link.classList.add('active')
  //   }
  // })

  return (
    <>
      <div className="wrap">
        <header>
          <div className="left">
            <img src="/img/logo (3).png" alt="" />
            <span>Locus</span>
          </div>
          <div className="center">
            <a href="" className="link active">Home</a>
            <a href="#contact" className="link">Contact</a>
            <a href="#testimonial" className="link">Location</a>
            <a href="#our-promo" className="link">About Us</a>
          </div>
          <div className="right">
            <button>Sign Up</button>
          </div>
        </header>
        <section className='promo'>

          <div className="left-section">
            <h2>Get the inspiration of interior design here</h2>
            <h4>architecture not only about engineering, it even lands to art and aesthetics. With us, you will get a residentical design with an extraordinary touch of art.</h4>
            <button>Let’s go</button>
          </div>
          <div className="right-section">
            <img src="/img/image 1.png" alt="" />
          </div>
        </section>
        <section className='works'>
          <h2>How it works</h2>
          <h4>Spice up your space even simpler <br /> than you think</h4>
          <div className="circle">
            <div className="circle2">
              <img src="/img/play.png" alt="" />
            </div>
          </div>
          <div className="box_works">
            <div className="left-box">
              <img src="/img/works.png" alt="" />
            </div>
            <div className="right-box">
              <span>We provide design and build for commercial building, interior and furniture to improve the better life.</span>
              <h3>S E E V I D E O</h3>
            </div>
          </div>
        </section>
        <section className="promo-images">
          <div className="img">
            <img src="/img/Rectangle 14.png" alt="" />
          </div>
          <div className="texts">
            <h3>Our mission is to deliver aesthetic visual for your home</h3>
            <h4>By applying bacis psychology principles, we are going to explain how perception works and how we can use this understanding to maximise the space that we occupy in our homes.</h4>
          </div>

        </section>
        <section className='our-promo' id='our-promo'>
          <h2>Our project </h2>
          <h4>Introducing our first official project</h4>
          <div className="border"></div>
          <div className="border"></div>
          <div className="our-box">
            <div className="item">
              <span>Project Livingroom</span>
              <p>A simple guide to create the perfect livingro-
                om for . Night Watc works beautifully in a wi-
                de gamut of arrangements.</p>
              <div className="images">
                <img src="/img/1.png" alt="" />
              </div>
            </div>
            <div className="item">
              <div className="images">
                <img src="/img/2.png" alt="" />
              </div>
              <span>Project workspace</span>
              <p>A simple guide to create the perfect livingro- om for . Night Watc works beautifully in a wi- de gamut of arrangements.</p>
            </div>
            <div className="item">
              <span>Library</span>
              <p>A simple guide to create the perfect livingro-
                om for . Night Watc works beautifully in a wi-
                de gamut of arrangements.</p>
              <div className="images">
                <img src="/img/3.png" alt="" />
              </div>
            </div>
          </div>
          <div className="testimonial" >
            <h2>Testimonial</h2>
            <div className="box">
              <img src="/img/image 4.png" alt="" />
              <img src="/img/image 3.png" alt="" />
              <img src="/img/image 2.png" alt="" />
              <img src="/img/image 5.png" alt="" />
            </div>
            <div className="testimonial2" id='testimonial'>
              <div className="left-testi">
                <img src="/img/Rectangle 18.png" alt="" />
              </div>
              <div className="right-testi">
                <div className="dannie">
                  <div className="elem">
                    <h2>105</h2>
                    <p>project <br /> done</p>
                  </div>
                  <div className="elem">
                    <h2>12</h2>
                    <p>years of <br /> experience</p>
                  </div>
                  <div className="elem">
                    <h2>10+</h2>
                    <p>big company <br /> partnership</p>
                  </div>
                </div>
                <h3>"Not able to tell you how happy I am with interior design. Interior design has completely surpassed our expectations. Interior design saved my business. Interior design is worth much more than I paid."</h3>
                <h5>- Roscoe</h5>
                <img src="/img/“.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className='contact' id='contact'>
          <div className="left-contact">
            <h2>Contact Us</h2>
            <p>Have any questions? Want help <br /> before getting started?</p>
            <div className="border"></div>
            <div className="border"></div>
          </div>
          <form className="right-contact">
            <input type="text" placeholder='Full name' />
            <input type="text" placeholder='Email address' />
            <textarea name="Description" placeholder='Description'></textarea>
            <div className="send">
              <button>Send now</button>
            </div>
          </form>

        </section>
      </div>
      {/* <center>
        <form onSubmit={handleSubmit}>
          <input type="text" name='name' />
          <button>add</button>
        </form>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </center> */}
    </>
  )
}

export default App
