import React, { Component } from "react";
import { Box } from "@mui/material";
import "../styles/productImages.scss";
import img1 from "../utils/images/img1.png";
import { pictures } from "../utils/services/dummyData";

class ProductImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: img1,
    };
  }

  handleImageChange = (image) => {
    this.setState({ mainImage: image });
  };

  render() {


    const { mainImage } = this.state;

    return (
      <Box className="imagContainr">
        <Box>
          <ul>
            {pictures.map((picture, index) => (
              <button
                className="bt"
                key={index}
                onClick={() => this.handleImageChange(picture.imagel)}
              >
                <li className="listItem">
                  <img
                    className="w-full"
                    src={picture.imagel}
                    alt={`Image${index + 1}`}
                  />
                </li>
              </button>
            ))}
          </ul>
        </Box>
        <Box className="mainImgeCon">
          <Box className="offer">10% Off</Box>
          <img className="mainImge" src={mainImage} alt="Imagedescription" />
        </Box>
      </Box>
    );
  }
}

export default ProductImages;
