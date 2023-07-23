import React, { Component } from "react";
import Rating from "@mui/material/Rating";
import { Typography, CardContent, Box, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import ProductImages from "../components/ProductImages";
import "../styles/ProductDetailsPage.scss";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import { cartItems } from "../utils/services/dummyData";
import img from "../utils/images/img1.png";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: cartItems.length + 1,
        title: "Name Of Product",
        imgSrc: img,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Delectus est veritatis harum libero eveniet, placeat atque,quibusdam ex beatae, architecto corrupti provident eiusminuserror nisi? Suscipit quasi reiciendis nisi.",
        salary: 3000,
        oldsalary: 3650,
      },
      color: "red",
      size: "2*3 m",
      quantity: 1,
    };
  }

  handleAddToCart = () => {
    const { product, color, size, quantity } = this.state;
    const item = {
      ...product,
      color,
      size,
      quantity,
    };
    cartItems.push(item);
    this.props.onBuyNow();
  };

  handleDecreaseQuantity = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    }
  };

  handleIncreaseQuantity = () => {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  };

  render() {
    const { product, color, size, quantity } = this.state;

    const colors = ["white", "black", "#0052D3", "#FCBC04"];
    const sizes = ["2*3", "4*4", "3*4"];

    return (
      <>
        <header className="header">
          Home / All rugs / Kilim & Tulu / Name of product
        </header>
        <div className="secContainer">
          <div className="innerContainer">
            <Box style={{ flex: 3, margin: 10, border: 0 }}>
              <ProductImages />
            </Box>
            <Box style={{ flex: 4 }}>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <div className="product-name">{product.title}</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="130"
                    height="51"
                    viewBox="0 0 130 51"
                    fill="none"
                  >
                    <rect
                      x="1.26473"
                      y="0.989403"
                      width="127.567"
                      height="48.9168"
                      rx="9.11195"
                      fill="white"
                      stroke="#E0E0E0"
                      stroke-width="0.959153"
                    />
                    <mask id="path-2-inside-1_0_289" fill="white">
                      <path d="M58.7545 25.1066H55.6736C55.5726 25.1036 55.4721 25.1209 55.3779 25.1576C55.2838 25.1942 55.1979 25.2494 55.1255 25.3199C55.053 25.3904 54.9954 25.4747 54.956 25.5679C54.9167 25.6611 54.8964 25.7613 54.8964 25.8625C54.8964 25.9636 54.9167 26.0638 54.956 26.157C54.9954 26.2502 55.053 26.3345 55.1255 26.405C55.1979 26.4755 55.2838 26.5307 55.3779 26.5673C55.4721 26.604 55.5726 26.6213 55.6736 26.6183H58.7545C59.2174 26.6188 59.6614 26.4352 59.9891 26.1077C60.3168 25.7803 60.5013 25.3359 60.502 24.8722V18.6987C60.5026 18.235 60.3193 17.7901 59.9924 17.4618C59.6656 17.1334 59.222 16.9486 58.7592 16.9479H55.6736C55.4774 16.9538 55.2912 17.0359 55.1545 17.177C55.0178 17.3182 54.9413 17.5071 54.9413 17.7037C54.9413 17.9004 55.0178 18.0893 55.1545 18.2304C55.2912 18.3715 55.4774 18.4537 55.6736 18.4595H58.7545C58.8167 18.4599 58.8763 18.4849 58.9201 18.5291C58.964 18.5733 58.9886 18.633 58.9886 18.6953V21.0226H55.6736C55.4774 21.0284 55.2912 21.1106 55.1545 21.2517C55.0178 21.3928 54.9413 21.5818 54.9413 21.7784C54.9413 21.9751 55.0178 22.164 55.1545 22.3051C55.2912 22.4462 55.4774 22.5284 55.6736 22.5342H58.9926V24.8655C58.9932 24.8971 58.9875 24.9285 58.9757 24.9578C58.9639 24.9871 58.9464 25.0137 58.9241 25.036C58.9018 25.0583 58.8752 25.0759 58.846 25.0877C58.8167 25.0995 58.7854 25.1053 58.7539 25.1046L58.7545 25.1066Z" />
                    </mask>
                    <path
                      d="M58.7545 25.1066V26.0658H60.0849L59.6646 24.8036L58.7545 25.1066ZM55.6736 25.1066L55.645 26.0654L55.6593 26.0658H55.6736V25.1066ZM55.6736 26.6183V25.6591H55.6593L55.645 25.6595L55.6736 26.6183ZM58.7545 26.6183L58.7556 25.6591H58.7545V26.6183ZM60.502 24.8722L61.4612 24.8736V24.8722H60.502ZM60.502 18.6987L59.5429 18.6976V18.6987H60.502ZM58.7592 16.9479L58.7607 15.9888H58.7592V16.9479ZM55.6736 16.9479V15.9888H55.6593L55.645 15.9892L55.6736 16.9479ZM55.6736 18.4595L55.645 19.4183L55.6593 19.4187H55.6736V18.4595ZM58.7545 18.4595L58.76 17.5004H58.7545V18.4595ZM58.9201 18.5291L58.2393 19.2047L58.9201 18.5291ZM58.9886 18.6953L58.0294 18.6953V18.6953H58.9886ZM58.9886 21.0226V21.9817H59.9477V21.0226H58.9886ZM55.6736 21.0226V20.0634H55.6593L55.645 20.0639L55.6736 21.0226ZM54.9413 21.7784H55.9004H54.9413ZM55.6736 22.5342L55.645 23.493L55.6593 23.4934H55.6736V22.5342ZM58.9926 22.5342H59.9517V21.5751H58.9926V22.5342ZM58.9926 24.8655H58.0334V24.8751L58.0336 24.8848L58.9926 24.8655ZM58.7539 25.1046L58.7732 24.1457L57.4144 24.1182L57.8439 25.4077L58.7539 25.1046ZM58.7545 24.1475H55.6736V26.0658H58.7545V24.1475ZM55.7021 24.1479C55.4726 24.1411 55.2441 24.1805 55.0302 24.2637L55.7257 26.0515C55.7001 26.0614 55.6726 26.0662 55.645 26.0654L55.7021 24.1479ZM55.0302 24.2637C54.8162 24.3469 54.6213 24.4723 54.4568 24.6323L55.7942 26.0075C55.7746 26.0265 55.7514 26.0415 55.7257 26.0515L55.0302 24.2637ZM54.4568 24.6323C54.2923 24.7923 54.1616 24.9836 54.0724 25.1949L55.8397 25.9409C55.8292 25.9658 55.8137 25.9885 55.7942 26.0075L54.4568 24.6323ZM54.0724 25.1949C53.9832 25.4062 53.9373 25.6332 53.9373 25.8625H55.8556C55.8556 25.8894 55.8502 25.916 55.8397 25.9409L54.0724 25.1949ZM53.9373 25.8625C53.9373 26.0917 53.9832 26.3188 54.0724 26.53L55.8397 25.784C55.8502 25.8089 55.8556 25.8355 55.8556 25.8625H53.9373ZM54.0724 26.53C54.1616 26.7413 54.2923 26.9327 54.4568 27.0926L55.7942 25.7174C55.8137 25.7364 55.8292 25.7591 55.8397 25.784L54.0724 26.53ZM54.4568 27.0926C54.6212 27.2526 54.8162 27.378 55.0302 27.4612L55.7257 25.6734C55.7514 25.6834 55.7746 25.6984 55.7942 25.7174L54.4568 27.0926ZM55.0302 27.4612C55.2441 27.5445 55.4726 27.5838 55.7021 27.577L55.645 25.6595C55.6726 25.6587 55.7001 25.6635 55.7257 25.6734L55.0302 27.4612ZM55.6736 27.5774H58.7545V25.6591H55.6736V27.5774ZM58.7534 27.5774C59.4712 27.5783 60.1595 27.2934 60.6671 26.7862L59.3112 25.4292C59.1634 25.5769 58.9636 25.6594 58.7556 25.6591L58.7534 27.5774ZM60.6671 26.7862C61.1747 26.279 61.4601 25.5911 61.4612 24.8736L59.5429 24.8707C59.5426 25.0807 59.459 25.2815 59.3112 25.4292L60.6671 26.7862ZM61.4612 24.8722V18.6987H59.5429V24.8722H61.4612ZM61.4612 18.6998C61.462 17.9824 61.1784 17.2936 60.6722 16.7851L59.3127 18.1384C59.4601 18.2865 59.5431 18.4876 59.5429 18.6976L61.4612 18.6998ZM60.6722 16.7851C60.1659 16.2765 59.4784 15.9899 58.7607 15.9888L58.7577 17.9071C58.9657 17.9074 59.1653 17.9904 59.3127 18.1384L60.6722 16.7851ZM58.7592 15.9888H55.6736V17.9071H58.7592V15.9888ZM55.645 15.9892C55.1989 16.0025 54.7759 16.1894 54.4656 16.5096L55.8433 17.8445C55.8064 17.8825 55.7558 17.905 55.7021 17.9066L55.645 15.9892ZM54.4656 16.5096C54.1554 16.8298 53.9821 17.2582 53.9821 17.7037H55.9004C55.9004 17.756 55.8801 17.8065 55.8433 17.8445L54.4656 16.5096ZM53.9821 17.7037C53.9821 18.1493 54.1554 18.5776 54.4656 18.8978L55.8433 17.563C55.8801 17.601 55.9004 17.6515 55.9004 17.7037H53.9821ZM54.4656 18.8978C54.7759 19.2181 55.1989 19.405 55.645 19.4183L55.7021 17.5008C55.7558 17.5024 55.8064 17.5249 55.8433 17.563L54.4656 18.8978ZM55.6736 19.4187H58.7545V17.5004H55.6736V19.4187ZM58.7491 19.4187C58.5573 19.4176 58.374 19.3405 58.2393 19.2047L59.6009 17.8534C59.3785 17.6293 59.0762 17.5022 58.76 17.5004L58.7491 19.4187ZM58.2393 19.2047C58.1047 19.0691 58.0294 18.8859 58.0294 18.6953L59.9477 18.6954C59.9477 18.3802 59.8232 18.0775 59.6009 17.8534L58.2393 19.2047ZM58.0294 18.6953V21.0226H59.9477V18.6953H58.0294ZM58.9886 20.0634H55.6736V21.9817H58.9886V20.0634ZM55.645 20.0639C55.1989 20.0772 54.7759 20.264 54.4656 20.5843L55.8433 21.9192C55.8064 21.9572 55.7559 21.9797 55.7021 21.9813L55.645 20.0639ZM54.4656 20.5843C54.1554 20.9045 53.9821 21.3329 53.9821 21.7784H55.9004C55.9004 21.8306 55.8801 21.8812 55.8433 21.9192L54.4656 20.5843ZM53.9821 21.7784C53.9821 22.224 54.1554 22.6523 54.4656 22.9725L55.8433 21.6377C55.8801 21.6757 55.9004 21.7262 55.9004 21.7784H53.9821ZM54.4656 22.9725C54.7759 23.2928 55.1989 23.4797 55.645 23.493L55.7021 21.5755C55.7558 21.5771 55.8064 21.5996 55.8433 21.6377L54.4656 22.9725ZM55.6736 23.4934H58.9926V21.5751H55.6736V23.4934ZM58.0334 22.5342V24.8655H59.9517V22.5342H58.0334ZM58.0336 24.8848C58.0316 24.7874 58.0493 24.6906 58.0857 24.6002L59.8657 25.3153C59.9256 25.1663 59.9548 25.0067 59.9515 24.8462L58.0336 24.8848ZM58.0857 24.6002C58.122 24.5098 58.1762 24.4275 58.2452 24.3584L59.6029 25.7136C59.7165 25.5998 59.8059 25.4643 59.8657 25.3153L58.0857 24.6002ZM58.2452 24.3584C58.3142 24.2893 58.3965 24.2348 58.4873 24.1982L59.2046 25.9773C59.3539 25.9171 59.4894 25.8274 59.6029 25.7136L58.2452 24.3584ZM58.4873 24.1982C58.578 24.1616 58.6753 24.1437 58.7732 24.1457L58.7345 26.0636C58.8955 26.0668 59.0554 26.0375 59.2046 25.9773L58.4873 24.1982ZM57.8439 25.4077L57.8445 25.4097L59.6646 24.8036L59.6639 24.8016L57.8439 25.4077Z"
                      fill="#B93C3C"
                      mask="url(#path-2-inside-1_0_289)"
                    />
                    <path
                      d="M63.2795 25.3789L63.2795 25.3788C63.2129 25.3124 63.16 25.2335 63.124 25.1467L63.124 25.1467C63.0879 25.0599 63.0694 24.9668 63.0694 24.8728C63.0694 24.8728 63.0694 24.8728 63.0694 24.8728L63.0694 22.5349V22.0553H63.549H65.8772C66.0667 22.0553 66.2483 22.1308 66.3821 22.2648C66.5158 22.3987 66.5908 22.5803 66.5908 22.7694V24.8728C66.5908 25.0619 66.5158 25.2434 66.3821 25.3774C66.2483 25.5114 66.0667 25.5869 65.8772 25.5869H63.7854H63.7843V25.1073C63.7535 25.1075 63.7229 25.1015 63.6944 25.0898L63.2795 25.3789ZM63.2795 25.3789C63.3462 25.4452 63.4253 25.4978 63.5124 25.5336L63.2795 25.3789ZM67.1404 22.7748V22.776L67.1404 24.8714C67.1404 24.8715 67.1404 24.8716 67.1404 24.8717C67.1398 25.2078 67.0063 25.5299 66.7693 25.7673C66.5323 26.0047 66.2112 26.1382 65.8764 26.1387H63.7852C63.4503 26.138 63.129 26.0045 62.8918 25.767L62.5525 26.1059L62.8918 25.767C62.6546 25.5296 62.5208 25.2077 62.5197 24.8715V18.6992C62.5205 18.3627 62.6542 18.0405 62.8914 17.8028C63.1286 17.5652 63.4498 17.4316 63.7848 17.4308H66.8564C66.9256 17.4342 66.9913 17.4639 67.04 17.5141C67.0899 17.5656 67.118 17.6348 67.118 17.7071C67.118 17.7793 67.0899 17.8485 67.04 17.9C66.9913 17.9502 66.9256 17.9799 66.8564 17.9833H63.7843C63.5944 17.9833 63.4125 18.0589 63.2785 18.1931C63.1445 18.3274 63.0694 18.5092 63.0694 18.6987V21.0226V21.5022H63.549L65.8764 21.5022C65.8765 21.5022 65.8766 21.5022 65.8767 21.5022C66.0429 21.5024 66.2074 21.5355 66.3608 21.5995C66.5143 21.6636 66.6538 21.7573 66.7712 21.8755C66.8887 21.9936 66.9817 22.1338 67.0451 22.2882C67.1085 22.4425 67.1409 22.6078 67.1404 22.7748Z"
                      stroke="#B93C3C"
                      stroke-width="0.959153"
                    />
                    <path
                      d="M72.3818 26.1387H72.5185C72.9803 26.1387 73.4233 25.955 73.7503 25.6278C74.0772 25.3005 74.2612 24.8566 74.2618 24.3932C74.2618 24.3931 74.2618 24.3929 74.2618 24.3928M72.3818 26.1387L74.2618 24.3928M72.3818 26.1387L72.384 26.136L71.388 26.1354C70.9262 26.1351 70.4832 25.9513 70.1563 25.624L69.817 25.963L70.1563 25.624C69.8294 25.2968 69.6452 24.8529 69.6444 24.3895V19.1735C69.6455 18.7102 69.8298 18.2664 70.1567 17.9392C70.4835 17.612 70.9263 17.4281 71.388 17.4275H72.5207M72.3818 26.1387L72.5207 17.4275M74.2618 24.3928L74.2618 19.1763C74.2618 18.7127 74.0782 18.2683 73.7516 17.9405C73.4251 17.6128 72.9824 17.4284 72.5207 17.4275M74.2618 24.3928L72.5207 17.4275M70.1894 19.1754V19.1763L70.1894 24.3932L70.1894 24.3941C70.19 24.7102 70.3157 25.0133 70.5393 25.2369C70.7629 25.4605 71.0661 25.5862 71.3824 25.5862H72.5158C72.8321 25.5862 73.1353 25.4605 73.3589 25.2369C73.5825 25.0133 73.7082 24.7102 73.7088 24.3941V24.3932L73.7088 19.1763L73.7088 19.1754C73.7082 18.8593 73.5825 18.5562 73.3589 18.3326L73.0424 18.6492L73.3589 18.3326C73.1353 18.1091 72.8321 17.9833 72.5158 17.9833H71.3824C71.0661 17.9833 70.7629 18.1091 70.5393 18.3326L70.8784 18.6718L70.5393 18.3326C70.3157 18.5562 70.19 18.8593 70.1894 19.1754Z"
                      stroke="#B93C3C"
                      stroke-width="0.959153"
                    />
                    <path
                      d="M77.0165 14.972L77.0151 14.972C76.7455 14.9723 76.4872 15.0797 76.2968 15.2704L76.2958 15.2715C76.1308 15.4377 76.0285 15.656 76.0062 15.8891C75.9838 16.1221 76.0427 16.3558 76.173 16.5504C76.3033 16.7451 76.497 16.8886 76.7213 16.9565C76.9456 17.0244 77.1864 17.0124 77.4029 16.9225C77.6192 16.8325 77.7977 16.6704 77.9079 16.4638C78.0182 16.2572 78.0536 16.0188 78.0082 15.7891C77.9627 15.5594 77.8393 15.3524 77.6585 15.2034C77.4778 15.0543 77.2509 14.9725 77.0165 14.972ZM77.8866 17.2947C77.6288 17.467 77.3258 17.5588 77.016 17.5585C76.6014 17.558 76.2036 17.3928 75.9101 17.0988C75.6166 16.8047 75.4514 16.4058 75.451 15.9895C75.4506 15.6786 75.5424 15.3746 75.7146 15.1161C75.8867 14.8576 76.1314 14.6562 76.4176 14.5373C76.7038 14.4183 77.0188 14.3871 77.3226 14.4476C77.6265 14.5081 77.9058 14.6575 78.125 14.8772C78.3443 15.0969 78.4936 15.3769 78.5541 15.6818C78.6146 15.9868 78.5834 16.3028 78.4645 16.59C78.3456 16.8771 78.1445 17.1223 77.8866 17.2947Z"
                      stroke="#B93C3C"
                      stroke-width="0.959153"
                    />
                    <path
                      d="M62.341 31.0813L62.3408 31.0812C62.2892 31.0295 62.2194 31.0006 62.1469 31.0006C62.0743 31.0006 62.0045 31.0295 61.9529 31.0812C61.9013 31.1329 61.8721 31.2032 61.8721 31.2767C61.8721 31.3503 61.9013 31.4206 61.9529 31.4723L63.2128 32.7325L64.0675 33.5875L62.8591 33.551C58.2518 33.4117 54.3324 32.7638 51.5506 31.898C50.1628 31.466 49.0354 30.9729 48.2442 30.4466C47.4872 29.943 46.8953 29.3122 46.8953 28.5681C46.8953 27.987 47.3121 27.412 47.9803 26.8999C48.6707 26.3707 49.7272 25.8301 51.2331 25.3313M62.341 31.0813L51.3839 25.7866M62.341 31.0813L64.9209 33.6634C64.9725 33.7152 65.0017 33.7856 65.0017 33.8592C65.0017 33.9327 64.9725 34.0031 64.9209 34.0549L62.3408 36.6398L62.3352 36.6455L62.3297 36.6513C62.3044 36.6784 62.2741 36.7 62.2404 36.715C62.2067 36.73 62.1704 36.738 62.1336 36.7386C62.0969 36.7392 62.0603 36.7324 62.0262 36.7186C61.992 36.7048 61.961 36.6841 61.9348 36.658C61.9087 36.6318 61.888 36.6005 61.8741 36.5661L61.4294 36.7456M62.341 31.0813L61.4294 36.7456M51.2331 25.3313L51.3839 25.7866M51.2331 25.3313C51.2331 25.3313 51.2331 25.3314 51.233 25.3314L51.3839 25.7866M51.2331 25.3313C51.2673 25.32 51.299 25.302 51.3264 25.2783C51.3538 25.2546 51.3763 25.2257 51.3927 25.1932L51.8213 25.4084M51.3839 25.7866C51.478 25.7554 51.5651 25.706 51.6401 25.6411C51.7152 25.5762 51.7767 25.4971 51.8213 25.4084M51.8213 25.4084L51.3927 25.1932C51.409 25.1607 51.4188 25.1252 51.4214 25.0889L51.8997 25.1239M51.8213 25.4084C51.8658 25.3196 51.8925 25.223 51.8997 25.1239M51.8997 25.1239L51.4214 25.0889C51.4241 25.0525 51.4196 25.016 51.4082 24.9814C51.3968 24.9468 51.3787 24.9148 51.355 24.8874L51.7183 24.5743M51.8997 25.1239C51.907 25.0249 51.8947 24.9254 51.8636 24.8311C51.8325 24.7368 51.7831 24.6495 51.7183 24.5743M51.7183 24.5743L51.355 24.8874C51.3313 24.8599 51.3025 24.8374 51.2702 24.8211C51.238 24.8049 51.2029 24.7952 51.1669 24.7925C51.1311 24.7899 51.0951 24.7943 51.0609 24.8056M51.7183 24.5743C51.6535 24.4991 51.5746 24.4375 51.4861 24.3928C51.3975 24.3482 51.301 24.3215 51.2021 24.3142C51.1033 24.307 51.0039 24.3193 50.9098 24.3504L51.0609 24.8056M51.0609 24.8056C49.4398 25.3437 48.2416 25.9582 47.4576 26.6136C46.6779 27.2654 46.3449 27.9229 46.3449 28.5687C46.3449 29.3148 46.7697 30.0276 47.659 30.7031C48.5493 31.3794 49.8473 31.9701 51.4387 32.4616C54.616 33.4429 58.8364 33.991 62.9474 34.1092L64.0586 34.1412L63.2729 34.9276L61.9527 36.2488L61.9472 36.2544L61.9414 36.2598C61.9144 36.2851 61.8928 36.3156 61.8777 36.3496C61.8627 36.3835 61.8546 36.4202 61.854 36.4574C61.8533 36.4947 61.8602 36.5316 61.8741 36.5661L61.4294 36.7456M51.0609 24.8056L61.4294 36.7456"
                      stroke="#B93C3C"
                      stroke-width="0.959153"
                    />
                    <path
                      d="M78.3762 24.8008L78.3841 24.8037L78.3921 24.8063C80.0128 25.3438 81.2108 25.958 81.9946 26.6134C82.774 27.2652 83.1068 27.9228 83.1066 28.5686V28.5688C83.1066 29.2686 82.7246 29.9428 81.922 30.5889C81.1171 31.2368 79.9387 31.813 78.4804 32.3026C75.5716 33.2792 71.6725 33.8712 67.7675 34.065L67.7434 34.0649L67.7404 34.065C67.6686 34.0654 67.5993 34.0376 67.5474 33.9872C67.4956 33.9368 67.4654 33.8678 67.4637 33.795C67.4619 33.7222 67.4888 33.6519 67.5382 33.599C67.5876 33.5462 67.6556 33.515 67.7273 33.512L67.7273 33.5121L67.7309 33.5119C72.1991 33.292 75.8376 32.6244 78.3738 31.7719C79.6391 31.3467 80.6528 30.8679 81.3604 30.3598C82.0431 29.8697 82.5576 29.2662 82.5576 28.5688C82.5576 27.9874 82.1403 27.4135 81.4724 26.9021C80.7823 26.3735 79.7261 25.8326 78.2206 25.331L78.2123 25.3282L78.2039 25.3257C78.1685 25.3154 78.1356 25.298 78.107 25.2745C78.0784 25.251 78.0547 25.222 78.0375 25.1891L77.6156 25.41L78.0375 25.1891C78.0202 25.1561 78.0098 25.12 78.0067 25.0829C78.0037 25.0458 78.0081 25.0084 78.0198 24.9731C78.0315 24.9377 78.0501 24.9052 78.0746 24.8773C78.099 24.8494 78.1288 24.8268 78.162 24.8108C78.1953 24.7948 78.2313 24.7857 78.2681 24.784C78.3049 24.7822 78.3417 24.7879 78.3762 24.8008Z"
                      stroke="#B93C3C"
                      stroke-width="0.959153"
                    />
                  </svg>
                </Box>
                <Rating
                  style={{ width: "100%", margin: 3 }}
                  name="read-only"
                  value={5}
                  readOnly
                />
                <p className="sallary">{product.salary} EGP</p>
                <p className="pastSallary">{product.oldsalary} EGP</p>
                <p className="product-description">{product.description}</p>
                <p className="size">Size</p>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-start", mt: 1 }}
                >
                  {sizes.map((s) => (
                    <Box
                      className="sizeBoxs"
                      key={s}
                      sx={{
                        border: `2px solid ${
                          size === s ? "#B93C3C" : "rgba(0, 0, 0, 0.2)"
                        }`,
                      }}
                      onClick={() => this.setState({ size: s })}
                    >
                      <Typography variant="subtitle1">{s} M</Typography>
                    </Box>
                  ))}
                </Box>
                <p className="color">Color</p>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    mt: 1,
                    ml: 1,
                  }}
                >
                  {colors.map((c) => (
                    <Box
                      className="colorBox"
                      key={c}
                      sx={{
                        bgcolor: c,
                        border:
                          color === c ? "2px solid #b93c3c" : "1px solid gray",
                      }}
                      onClick={() => this.setState({ color: c })}
                    />
                  ))}
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <Box
                      className="quantity"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        aria-label="decrease quantity"
                        size="small"
                        sx={{ margin: "10px" }}
                        onClick={this.handleDecreaseQuantity}
                      >
                        <Remove />
                      </IconButton>
                      <Typography sx={{ margin: "10px" }} variant="body1">
                        {quantity}
                      </Typography>
                      <IconButton
                        aria-label="increase quantity"
                        size="small"
                        onClick={this.handleIncreaseQuantity}
                        sx={{ margin: "10px" }}
                      >
                        <Add />
                      </IconButton>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
                  >
                    <button className="addto-bt1" onClick={this.handleAddToCart}>
                      Buy Now
                    </button>
                  </Box>
                </Box>
                <Box className="additional">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                    >
                      <path
                        d="M19.5847 4.52673C19.1241 4.0808 18.5772 3.72706 17.9752 3.48571C17.3732 3.24436 16.728 3.12014 16.0764 3.12014C15.4249 3.12014 14.7796 3.24436 14.1777 3.48571C13.5757 3.72706 13.0288 4.0808 12.5682 4.52673L11.6148 5.45402L10.6584 4.52864C9.71938 3.67054 8.47158 3.20052 7.18012 3.21845C5.88866 3.23638 4.65531 3.74084 3.74215 4.62466C2.82898 5.50847 2.30796 6.70197 2.28979 7.95157C2.27162 9.20117 2.75774 10.4084 3.64485 11.3167L4.60026 12.2411L11.6148 19.0311L18.6322 12.2411L19.5876 11.3158C20.0483 10.8699 20.4137 10.3405 20.6629 9.758C20.912 9.17546 21.0402 8.55112 21.0399 7.92065C21.0396 7.29018 20.9109 6.66595 20.6613 6.0836C20.4116 5.50126 20.0457 4.97223 19.5847 4.52673V4.52673Z"
                        stroke="#707070"
                        stroke-width="1.38673"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>add to wishlist</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                    >
                      <path
                        d="M11.87 15.7481H3.5728C2.7726 15.7481 2.00517 15.4027 1.43934 14.788C0.873512 14.1734 0.555634 13.3397 0.555634 12.4704V4.27611C0.555634 3.40681 0.873512 2.57312 1.43934 1.95843C2.00517 1.34374 2.7726 0.998413 3.5728 0.998413H11.87C12.6702 0.998413 13.4376 1.34374 14.0035 1.95843C14.5693 2.57312 14.8872 3.40681 14.8872 4.27611V12.4704C14.8872 13.3397 14.5693 14.1734 14.0035 14.788C13.4376 15.4027 12.6702 15.7481 11.87 15.7481ZM3.5728 2.63726C3.1727 2.63726 2.78898 2.80993 2.50607 3.11727C2.22315 3.42461 2.06422 3.84146 2.06422 4.27611V12.4704C2.06422 12.905 2.22315 13.3219 2.50607 13.6292C2.78898 13.9365 3.1727 14.1092 3.5728 14.1092H11.87C12.2701 14.1092 12.6538 13.9365 12.9367 13.6292C13.2196 13.3219 13.3786 12.905 13.3786 12.4704V4.27611C13.3786 3.84146 13.2196 3.42461 12.9367 3.11727C12.6538 2.80993 12.2701 2.63726 11.87 2.63726H3.5728Z"
                        fill="#707070"
                      />
                      <path
                        d="M19.4125 13.2897C19.3452 13.2895 19.2783 13.2798 19.2133 13.261L13.9333 11.6959C13.7402 11.6385 13.5761 11.5002 13.4769 11.3113C13.3778 11.1225 13.3517 10.8986 13.4045 10.6888C13.4573 10.4791 13.5847 10.3008 13.7585 10.1931C13.9324 10.0853 14.1385 10.057 14.3315 10.1144L18.6582 11.3968V5.34947L14.3315 6.63187C14.1385 6.68924 13.9324 6.66096 13.7585 6.55323C13.5847 6.44551 13.4573 6.26717 13.4045 6.05745C13.3517 5.84773 13.3778 5.62381 13.4769 5.43495C13.5761 5.24609 13.7402 5.10775 13.9333 5.05038L19.2133 3.48528C19.3253 3.45199 19.4428 3.44722 19.5567 3.47134C19.6706 3.49545 19.7779 3.54781 19.8702 3.62432C19.9624 3.70084 20.0372 3.79945 20.0886 3.91249C20.1401 4.02552 20.1668 4.14993 20.1667 4.27602V12.4703C20.1667 12.6876 20.0873 12.896 19.9458 13.0497C19.8044 13.2034 19.6125 13.2897 19.4125 13.2897Z"
                        fill="#707070"
                      />
                    </svg>
                    <span>video call</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="46"
                      viewBox="0 0 48 46"
                      fill="none"
                    >
                      <path
                        d="M24.6013 0.00149894H23.0702C10.4511 0.00149894 0.221191 10.2314 0.221191 22.8505C0.221191 35.4697 10.4511 45.6996 23.0702 45.6996H24.6013C37.2205 45.6996 47.4503 35.4697 47.4503 22.8505C47.4503 10.2314 37.2205 0.00149894 24.6013 0.00149894Z"
                        fill="#FAFAFA"
                      />
                      <path
                        d="M12.5596 32.1967C12.5093 32.1968 12.4596 32.1867 12.4135 32.1672C12.3674 32.1477 12.326 32.1191 12.2918 32.0833C12.2577 32.0476 12.2316 32.0053 12.2153 31.9593C12.1989 31.9133 12.1925 31.8644 12.1966 31.8159C12.2054 31.6912 13.2671 19.4965 27.1446 18.4502L27.1111 13.8537C27.1107 13.7827 27.1325 13.7131 27.1736 13.6543C27.2148 13.5954 27.2734 13.55 27.3417 13.5239C27.41 13.4979 27.4849 13.4924 27.5565 13.5083C27.6281 13.5242 27.693 13.5606 27.7428 13.6129L35.3812 21.4329C35.4449 21.4982 35.4804 21.5845 35.4804 21.6743C35.4804 21.764 35.4449 21.8504 35.3812 21.9156L27.6956 29.8062C27.6454 29.8576 27.5803 29.8932 27.5089 29.9084C27.4374 29.9236 27.3629 29.9175 27.2951 29.8911C27.2272 29.8647 27.1691 29.8191 27.1284 29.7603C27.0877 29.7016 27.0663 29.6323 27.0669 29.5615L27.1111 25.0869C24.3733 25.2642 21.7003 25.9722 19.2509 27.1689C16.8015 28.3656 14.6257 30.0265 12.8529 32.053C12.8191 32.0975 12.7749 32.1337 12.724 32.1587C12.673 32.1837 12.6167 32.1967 12.5596 32.1967ZM27.8412 14.7467L27.8707 18.7796C27.8714 18.8695 27.8366 18.9563 27.7733 19.0221C27.71 19.088 27.623 19.1279 27.5303 19.1338C16.3636 19.8164 13.7069 27.6888 13.0969 30.7125C16.8784 26.91 22.0106 24.6381 27.4565 24.3557C27.5062 24.3531 27.5559 24.3604 27.6026 24.3771C27.6492 24.3938 27.6919 24.4196 27.7278 24.4529C27.7638 24.4862 27.7923 24.5262 27.8117 24.5706C27.831 24.615 27.8407 24.6627 27.8402 24.7108L27.8019 28.6694L34.6147 21.6757L27.8412 14.7467Z"
                        fill="#707070"
                        stroke="#707070"
                        stroke-width="0.756534"
                      />
                    </svg>
                    <span>share</span>
                  </div>
                </Box>
              </CardContent>
            </Box>
          </div>
          <YouMayAlsoLike />
        </div>
      </>
    );
  }
}

export default ProductDetails;
