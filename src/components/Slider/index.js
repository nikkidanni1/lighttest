import React, { useState } from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import Card from '@material-ui/core/Card';

const Wrapper = styled.div`
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    .slick-dots {
        .slick-active div {
            background: #fff !important;
        }
    }
`;

const StyledCard = styled(Card)`
    margin: 3px 0px !important;
    height: 510px;
    background: url("${({ bg }) => bg}") no-repeat;
    background-size: cover;
`;

const Dot = styled.div`
    width: 7px;
    height: 7px;
    border-radius: 2px;
    border: 1px solid #fff;
    position: absolute;
    bottom: 50px;
`;

const PhotoSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        customPaging: function(i) {
            return (
              <Dot />
            );
        },
    };
    return (
        <Wrapper>
            <Slider {...settings}>
                {
                    images.map((item) => 
                        <StyledCard bg={item}>

                        </StyledCard>
                    )
                }

            </Slider>
        </Wrapper>
    );
};

export default PhotoSlider;