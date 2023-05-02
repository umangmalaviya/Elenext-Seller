import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Home.css"
import logo from "../Images/new-seller-logo.svg"

const Home = () => {
    return (
        <>
            <nav className="sidebar">
                <div className="header">
                    <Link className="logo"><img src={logo} alt="" /></Link>
                </div>
                <ul className='home-ul'>
                    <li className='home-li'>
                        <Link>
                            <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className='home-li'>
                        <Link>
                            {/* <i className="fa-ragular fa-boxes-stacked" style={{ color: "#ffffff" }}></i> */}
                            <i class="fa-regular fa-boxes-stacked"></i>
                            <p>Inventory</p>
                        </Link>
                    </li>
                    <li className='home-li'>
                        <Link>
                            <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
                            <p>Return Product</p>
                        </Link>
                    </li>
                    <li className='home-li'>
                        <Link>
                            <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
                            <p>Product Listing</p>
                        </Link>
                    </li>
                    <li className='home-li'>
                        <Link>
                            <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
                            <p>Orders</p>
                        </Link>
                    </li>
                    <li className='home-li'>
                        <Link>
                            <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
                            <p>Payments</p>
                        </Link>
                    </li>
                    <li className='home-li'>
                        <Link>
                            <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
                            <p>Growth</p>
                        </Link>
                    </li>
                </ul>
            </nav>
            <button className="toggle">☰</button>
            <div className="container">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic accusamus iste consequatur id voluptates, nisi repudiandae libero veritatis quos, architecto vitae, laborum molestias. Quisquam illum minima mollitia, optio odio, iusto deleniti. Ad, laborum error sint porro quibusdam, quo autem sequi sunt iure ea culpa magnam commodi molestias. Id, incidunt distinctio sapiente voluptatum natus. Illum, quidem, placeat. Quibusdam recusandae minus deserunt officiis cum, dicta necessitatibus magni error debitis. Delectus quidem quasi, sint, expedita fuga laboriosam nulla sed minima qui explicabo non maxime nemo minus fugiat! Eum praesentium eius perferendis, enim, temporibus rem quaerat, impedit amet aliquam distinctio dignissimos ratione hic culpa molestias! Amet facere quidem assumenda ullam sit minima explicabo dolorum, rem provident quam, enim quasi eveniet consequuntur nemo. A, error, dolore eaque amet culpa veniam magnam quis quia excepturi repellat laudantium, ab voluptate non aut ad provident, dolores delectus odit pariatur quam. Voluptas nobis quo, sunt, quisquam cum, culpa animi molestias earum porro est itaque incidunt iure quae corrupti cupiditate deleniti facilis amet doloribus a ex. Tenetur blanditiis praesentium quia magni autem. Laborum, excepturi quam! Officia commodi quas enim ut voluptatum quam ipsam fugit libero laboriosam odit, quod, hic voluptate et alias illum. Accusantium porro nam, rerum consequatur ad rem doloribus, voluptatem nihil eum deleniti delectus dolor animi repudiandae placeat beatae aliquid! Laborum autem dolorem amet nobis, nostrum odio repudiandae, eveniet in mollitia rerum neque, earum. Quam veritatis rerum inventore facere ex nihil. Aperiam ab iure eos possimus non vitae voluptatibus animi, sunt nemo dicta asperiores molestias sit laboriosam, magnam soluta, incidunt tenetur pariatur saepe eligendi aliquid vero. Labore debitis quae delectus est cumque, tempora eligendi similique a accusantium, necessitatibus et sed pariatur voluptatem obcaecati. Non similique ab, voluptate tempora, amet quo. Sapiente consequatur voluptatibus, minima architecto iusto, quam, tenetur saepe repellendus veritatis reprehenderit commodi et error nihil. Est.
            </div>
        </>
    )
}

export default Home