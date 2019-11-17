import React, { useState } from "react";
import styled from "styled-components";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const StyledTabs = styled(Tabs)`
    position: absolute !important;
    bottom: 0 !important;
    width: 100%;
    background: #F8F8F8 !important;
    border-top: 1px solid rgba(0,0,0,.2);
    padding: 0 20px !important;
    box-sizing: border-box !important;
    height: 48px !important;
`;

const StyledTab = styled(Tab)`
    border-left: 1px solid rgba(0,0,0,.2) !important;
    text-transform: none !important;
    border-bottom: 5px solid ${({ bottomColor }) => bottomColor} !important;
    ${({ active }) => active && "background: #0EA7FF !important; color: #fff !important; border-bottom: none !important;"};
`;

const BottomTabs = () => {
    let [activeIndex, setActiveIndex] = useState(5);

    return (
        <StyledTabs variant="fullWidth">
            <StyledTab 
                label="Вариант кухни" 
                bottomColor="#0EA7FF"
                onClick={() => setActiveIndex(0)}
                active={activeIndex === 0}
            />
            <StyledTab 
                label="Размеры" 
                bottomColor="#0EA7FF" 
                onClick={() => setActiveIndex(1)}
                active={activeIndex === 1}
            />
            <StyledTab 
                label="Сенсор" 
                bottomColor="#0EA7FF" 
                onClick={() => setActiveIndex(2)}
                active={activeIndex === 2}
            />
            <StyledTab 
                label="Питающий кабель" 
                bottomColor="#0EA7FF" 
                onClick={() => setActiveIndex(3)}
                active={activeIndex === 3}
            />
            <StyledTab
                label="Блок питания" 
                bottomColor="#0EA7FF"
                onClick={() => setActiveIndex(4)}
                active={activeIndex === 4}
            />
            <StyledTab 
                label="Цвет свечения" 
                bottomColor="#0EA7FF"
                onClick={() => setActiveIndex(5)}
                active={activeIndex === 5}
            />
            <StyledTab 
                label="Монтаж" 
                bottomColor="#FF8182" 
                active={true}
                onClick={() => setActiveIndex(6)}
                active={activeIndex === 6}
            />
            <StyledTab 
                label="Корзина" 
                bottomColor="#FF8182" 
                style={{ borderRight: "1px solid rgba(0,0,0,.2)" }}
                onClick={() => setActiveIndex(7)}
                active={activeIndex === 7}
            />
        </StyledTabs>
    );
};

export default BottomTabs;