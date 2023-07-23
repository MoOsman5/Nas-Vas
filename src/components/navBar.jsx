import React, { Component } from "react";
import "../styles/navBar.scss";
import logo from "../utils/images/logo.png";
import CartModal from "./CartModal";

class NavBar extends Component {
  render() {
    return (
      <div class="container">
        <div class="logo">
          <img class="logoImg" src={logo} alt="logo" />
        </div>
        <nav class="nav">
          <ul>
            <li class="dropdown">
              <a class="link-item " href="#">
                Products
              </a>
            </li>
            <li>
              <a class="link-item " href="#">
                Best Seller
              </a>
            </li>
            <li>
              <a class="link-item " href="#">
                New Arrival
              </a>
            </li>
            <li>
              <a class="link-item " href="#">
                About Us
              </a>
            </li>
            <li>
              <a class="link-item " href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div class="user">
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_423_125)">
                    <path
                      d="M20 11C20 12.78 19.4722 14.5201 18.4832 16.0001C17.4943 17.4802 16.0887 18.6337 14.4442 19.3149C12.7996 19.9961 10.99 20.1743 9.24419 19.8271C7.49836 19.4798 5.89472 18.6226 4.63604 17.364C3.37737 16.1053 2.5202 14.5016 2.17294 12.7558C1.82567 11.01 2.0039 9.20038 2.68509 7.55585C3.36628 5.91131 4.51983 4.50571 5.99987 3.51677C7.47991 2.52784 9.21997 2 11 2C13.387 2 15.6761 2.94821 17.364 4.63604C19.0518 6.32387 20 8.61305 20 11V11Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.93 20.69C19.46 22.29 20.67 22.45 21.6 21.05C22.45 19.77 21.89 18.72 20.35 18.72C20.1055 18.6964 19.859 18.7373 19.6353 18.8386C19.4115 18.9399 19.2181 19.0981 19.0745 19.2974C18.9308 19.4966 18.8419 19.7301 18.8166 19.9744C18.7912 20.2188 18.8303 20.4655 18.93 20.69V20.69Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_423_125">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </svg>
            </li>
            <li class="shopping-cart">
              <CartModal />
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g clip-path="url(#clip0_423_107)">
                  <path
                    d="M12.16 10.87C12.0502 10.86 11.9398 10.86 11.83 10.87C10.6662 10.8267 9.56585 10.3285 8.7656 9.48239C7.96536 8.63629 7.52914 7.50991 7.55075 6.34552C7.57237 5.18112 8.05011 4.07172 8.88121 3.2559C9.71231 2.44009 10.8304 1.98303 11.995 1.98303C13.1596 1.98303 14.2777 2.44009 15.1088 3.2559C15.9399 4.07172 16.4176 5.18112 16.4392 6.34552C16.4608 7.50991 16.0246 8.63629 15.2244 9.48239C14.4241 10.3285 13.3238 10.8267 12.16 10.87Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.15997 14.561C4.73997 16.181 4.73997 18.821 7.15997 20.431C8.67323 21.3341 10.4027 21.811 12.165 21.811C13.9273 21.811 15.6567 21.3341 17.17 20.431C19.59 18.811 19.59 16.171 17.17 14.561C15.6551 13.6626 13.9262 13.1885 12.165 13.1885C10.4037 13.1885 8.67488 13.6626 7.15997 14.561V14.561Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_423_107">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
