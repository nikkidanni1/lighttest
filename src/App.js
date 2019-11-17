import React, { useState } from 'react';
import styled from "styled-components";

import Card from '@material-ui/core/Card';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import Header from "components/Header";
import InfoBlock from "components/InfoBlock";
import BottomTabs from "components/BottomTabs";
import Slider from "components/Slider";

import ColdImage from "images/cold.jpg";
import DayImage from "images/day.jpg";
import WarmImage from "images/warm.jpg";

import WarmImage1 from "images/warm1.jpg";
import WarmImage2 from "images/warm2.jpg";
import DayImage1 from "images/day1.jpg";
import DayImage2 from "images/day2.jpg";
import ColdImage1 from "images/cold1.jpg";
import ColdImage2 from "images/cold2.jpg";

const Content = styled.div`
    max-width: 100vw;
    height: calc(100vh - 64px);
    display: flex; 
`;

const LeftSide = styled.div`
    width: 50vw;
    border-right: .5px solid rgba(0,0,0,.2);
`;

const RightSide = styled.div`
    width: 50vw;
    border-left: .5px solid rgba(0,0,0,.2);
`;

const DetailsBlock = styled.div`
    padding: 20px 30px;
`;

const DetailItem = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const DetailName = styled.div`
    width: 40%;
    margin-right: 20px;
`;

const DetailValue = styled.div`
    width: calc(60% - 20px);
    display: flex;
    align-items: flex-end;
`;

const CardsWrapper = styled.div`
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TogglerItem = styled(Card)`
    width: ${({ active }) => active ? "110px" : "100px"};
    height: ${({ active }) => active ? "80px" : "70px"};
    border-radius: 3px !important;
    margin: 0 10px !important;
    background: url("${({ image }) => image}");
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding: 5px;
    cursor: pointer;
    &:after {
        content: "${({ text }) => text}";
        width: 100%;
        height: 20px;
        color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: center;
        background: rgba(0,0,0,.5);
        font-size: 14px;
    }
`;

const StyledCheckBoxIcon = styled(CheckBoxIcon)`
    color: #0EA7FF !important;
    z-index: 1;
`;

const BackCheck = styled.div`
    width: 90%;
    height: 90%;
    background-color: #fff;
    position: absolute;
    z-index: 0;
    width: 14px;
    height: 14px;
    top: 10px;
    right: 10px;
`;

const App = () => {
    let [selectedIndex, setSelectedIndex] = useState(0);
    const images = [
        [WarmImage, WarmImage1, WarmImage2],
        [DayImage, DayImage1, DayImage2],
        [ColdImage, ColdImage1, ColdImage2],
    ]

    return (
        <>
            <Header />
            <Content>
                <LeftSide>
                    <Slider images={images[selectedIndex]} />
                </LeftSide>
                <RightSide>
                    <DetailsBlock>
                        <DetailItem>
                            <DetailName>Класс:</DetailName>
                            <DetailValue>
                                <Card style={{ padding: "7px", background: "#F0F0F0" }}>Standart</Card>
                            </DetailValue>
                        </DetailItem>
                        <DetailItem>
                            <DetailName>Потребляемая мощность:</DetailName>
                            <DetailValue>59 Вт.</DetailValue>
                        </DetailItem>
                        <DetailItem>
                            <DetailName>Сила света:</DetailName>
                            <DetailValue>3459 Люмен = 7.5 ламп накаливания по 40 Вт.</DetailValue>
                        </DetailItem>
                        <DetailItem>
                            <DetailName>Гарантия:</DetailName>
                            <DetailValue>3 года</DetailValue>
                        </DetailItem>
                        <DetailItem>
                            <DetailName>Монтаж:</DetailName>
                            <DetailValue>Да</DetailValue>
                        </DetailItem>
                        <DetailItem>
                            <DetailName>Итого сумма:</DetailName>
                            <DetailValue>2594 рублей</DetailValue>
                        </DetailItem>
                    </DetailsBlock>
                    <InfoBlock />
                    <CardsWrapper>
                        <TogglerItem 
                            image={WarmImage} 
                            text="Теплый"
                            onClick={() => setSelectedIndex(0)}
                            active={selectedIndex === 0}
                        >
                            {selectedIndex === 0 && <>
                                <StyledCheckBoxIcon />
                                <BackCheck />
                            </>}
                        </TogglerItem>
                        <TogglerItem 
                            image={DayImage} 
                            text="Дневной"
                            onClick={() => setSelectedIndex(1)}
                            active={selectedIndex === 1}
                        >
                            {selectedIndex === 1 && <>
                                <StyledCheckBoxIcon />
                                <BackCheck />
                            </>}
                        </TogglerItem>
                        <TogglerItem 
                            image={ColdImage} 
                            text="Холодный"
                            onClick={() => setSelectedIndex(2)}
                            active={selectedIndex === 2}
                        >
                            {selectedIndex === 2 && <>
                                <StyledCheckBoxIcon />
                                <BackCheck />
                            </>}
                        </TogglerItem>
                    </CardsWrapper>
                </RightSide>
            </Content>
            <BottomTabs />
        </>
    );
}

export default App;
